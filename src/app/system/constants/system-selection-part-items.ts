import {SelectionPartItem} from '../../_shared/constants/selection-part-item.interface';

export const SYSTEM_SELECTION_PART_ITEMS: ReadonlyArray<SelectionPartItem> = [
  { label: 'Status', route: './status', },
  { label: 'General', route: './general', },
  { label: 'Cellular', route: './power', },
  { label: 'Shutdown / reboot', route: './shutdown-reboot', },
  { label: 'All', route: './all', }
];
