import {SelectionPartItem} from '../../_shared/constants/selection-part-item.interface';

export const ENODEB_SELECTION_PART_ITEMS: ReadonlyArray<SelectionPartItem> = [
  { label: 'Performances', route: './performances', },
  { label: 'Users Status', route: './users-status', },
  { label: 'Users Database', route: './users-database', },
  { label: 'IMEI Restricted List', route: './imei-restricted-list', },
  { label: 'Spectrum', route: './spectrum', },
  { label: 'Sensing & Evasion', route: './sensing-and-evasion', }
];
