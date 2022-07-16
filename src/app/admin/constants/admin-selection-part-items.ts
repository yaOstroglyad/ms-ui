import {SelectionPartItem} from '../../_shared/constants/selection-part-item.interface';

export const ADMIN_SELECTION_PART_ITEMS: ReadonlyArray<SelectionPartItem> = [
  { label: 'Password', route: './password', },
  { label: 'Users privileges', route: './users-privileges', },
  { label: 'Admin privileges', route: './admin-privileges', },
];
