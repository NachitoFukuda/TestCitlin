// app/config/useWidgetConfig.ts
import { WIDGET_CONFIG, type WidgetSettings, type WidgetId } from '../../components/uistore/widgetConfig';

/**
 * 指定したウィジェットIDに対応する設定を返すカスタムフック
 *
 * @param id ウィジェットID
 * @returns レジストリに登録されたウィジェット設定オブジェクト
 */
export function useWidgetConfig(id: WidgetId): WidgetSettings {
  return WIDGET_CONFIG[id];
}