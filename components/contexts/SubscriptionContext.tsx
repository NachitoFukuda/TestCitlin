// components/contexts/SubscriptionContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

type SubscriptionContextType = {
  isSubscribed: boolean;
  customerInfo: any;
  refresh: () => Promise<void>;
};

const SubscriptionContext = createContext<SubscriptionContextType>({
  isSubscribed: false,
  customerInfo: null,
  refresh: async () => {},
});

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<any>(null);

  const refresh = async () => {
    try {
    } catch {
      setIsSubscribed(false);
      setCustomerInfo(null);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <SubscriptionContext.Provider value={{ isSubscribed, customerInfo, refresh }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => useContext(SubscriptionContext);