import {SelectionPartItem} from '../../_shared/constants/selection-part-item.interface';

export const DIAGNOSTIC_SELECTION_PART_ITEMS: ReadonlyArray<SelectionPartItem> = [
  { label: 'Summery', route: './summery', },
  { label: 'Ping test', route: './ping-test', },
  { label: 'Throughput test', route: './throughput-test', },
];
