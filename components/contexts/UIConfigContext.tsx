import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Item = { id: string; name: string; price: number; widthCells: number; heightCells: number; };
export type Position = {
  gridX: number;
  gridY: number;
};

type UIConfig = {
    points: number;
    purchases: Record<string, Item>;
    positions: Record<string, Position>;
    buyItem: (item: Item) => Promise<void>;
    updatePosition: (id: string, gridX: number, gridY: number) => Promise<void>;
    removeItem: (id: string) => Promise<void>;
    reloadData: () => Promise<void>;
};

export const UIConfigContext = createContext<UIConfig | null>(null);

export const UIConfigProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [purchases, setPurchases] = useState<Record<string, Item>>({});
  const [positions, setPositions] = useState<Record<string, Position>>({});

  useEffect(() => {
    (async () => {
      const p = await AsyncStorage.getItem('@quiz_points');
      const h = await AsyncStorage.getItem('@quiz:purchases');
      const pos = await AsyncStorage.getItem('@quiz:positions');
      setPoints(p ? JSON.parse(p) : 0);
      setPurchases(h ? JSON.parse(h) : {});
      setPositions(pos ? JSON.parse(pos) : {});
    })();
  }, []);

  const reloadData = async () => {
    const [pJson, posJson] = await Promise.all([
      AsyncStorage.getItem('@quiz:purchases'),
      AsyncStorage.getItem('@quiz:positions'),
    ]);

    setPurchases(pJson ? JSON.parse(pJson) : {});
    setPositions(posJson ? JSON.parse(posJson) : {});
  };

  const removeItem = async (id: string) => {
    const newPurchases = { ...purchases };
    delete newPurchases[id];
    await AsyncStorage.setItem('@quiz:purchases', JSON.stringify(newPurchases));
    setPurchases(newPurchases);
  
    const newPositions = { ...positions };
    delete newPositions[id];
    await AsyncStorage.setItem('@quiz:positions', JSON.stringify(newPositions));
    setPositions(newPositions);
  };

  const buyItem = async (item: Item) => {
    if (points < item.price) throw new Error('ポイント不足');
    const newPoints = points - item.price;
    const newPurchases = { ...purchases, [item.id]: item };
    await AsyncStorage.setItem('@quiz_points', JSON.stringify(newPoints));
    await AsyncStorage.setItem('@quiz:purchases', JSON.stringify(newPurchases));
    setPoints(newPoints);
    setPurchases(newPurchases);

    // 初期位置を追加して永続化
    const newPositions = { ...positions, [item.id]: { gridX: 0, gridY: 0 } };
    await AsyncStorage.setItem('@quiz:positions', JSON.stringify(newPositions));
    setPositions(newPositions);
  };

  const updatePosition = async (id: string, gridX: number, gridY: number) => {
    const next = { ...positions, [id]: { gridX, gridY } };
    await AsyncStorage.setItem('@quiz:positions', JSON.stringify(next));
    setPositions(next);
  };

  return (
    <UIConfigContext.Provider value={{ points, purchases, positions, buyItem, updatePosition, removeItem, reloadData }}>
      {children}
    </UIConfigContext.Provider>
  );
};