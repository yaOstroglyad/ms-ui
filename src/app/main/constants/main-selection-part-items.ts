import {MainSelectionPartItem} from '../main-selection-part/main-selection-part.component';

export const MAIN_SELECTION_PART_ITEMS: ReadonlyArray<MainSelectionPartItem> = [
  { label: 'System', route: './system', },
  { label: 'Network', route: './network', },
  { label: 'eNodeB', route: './eNodeB', },
  { label: 'Serial', route: './serial', },
  { label: 'Backhaul', route: './backhaul', },
  { label: 'GPS', route: './gps', },
  { label: 'Diagnostic', route: './diagnostic', },
  { label: 'Logs', route: './logs', },
  { label: 'Admin', route: './admin', },
];
