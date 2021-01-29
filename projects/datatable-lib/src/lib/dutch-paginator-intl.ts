import { MatPaginatorIntl } from '@angular/material/paginator';

export function getDutchPaginatorIntl() {
    const paginatorIntl = new MatPaginatorIntl();
    paginatorIntl.itemsPerPageLabel = 'แสดงรายการ';
    paginatorIntl.nextPageLabel = 'ถัดไป';
    paginatorIntl.previousPageLabel = 'ก่อนหน้า';
    // paginatorIntl.getRangeLabel = dutchRangeLabel;
    paginatorIntl.firstPageLabel = 'หน้าแรก';
    paginatorIntl.lastPageLabel = 'หน้าสุดท้าย';
    return paginatorIntl;
  }
  