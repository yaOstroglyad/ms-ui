import {SelectionPartItem} from '../../_shared/constants/selection-part-item.interface';

export const NETWORK_SELECTION_PART_ITEMS: ReadonlyArray<SelectionPartItem> = [
  { label: 'IP Address', route: './ip-address', },
  { label: 'Routing', route: './routing', },
  { label: 'Tunneling', route: './tunneling', },
  { label: 'Port Forwarding', route: './port-forwarding', }
];
