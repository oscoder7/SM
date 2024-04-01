
namespace BitPro.SchoolMate.Master {
    import fld = BitPro.SchoolMate.Master.StudentsRow.Fields;
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class StudentsGrid extends Serenity.EntityGrid<StudentsRow, any> {
        protected getColumnsKey() { return 'Master.Students'; }
        protected getDialogType() { return StudentsDialog; }
        protected getIdProperty() { return StudentsRow.idProperty; }
        protected getInsertPermission() { return StudentsRow.insertPermission; }
        protected getLocalTextPrefix() { return StudentsRow.localTextPrefix; }
        protected getService() { return StudentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            Q.first(columns, x => x.field == fld.FatherContactName).format =
                ctx => `<a href="javascript:;" class="customer-link">${Q.htmlEncode(ctx.value)}</a>`;

            Q.first(columns, x => x.field == fld.MotherContactName).format =
                ctx => `<a href="javascript:;" class="customer-link2">${Q.htmlEncode(ctx.value)}</a>`;

            Q.first(columns, x => x.field == fld.StudentContactName).format =
                ctx => `<a href="javascript:;" class="customer-link3">${Q.htmlEncode(ctx.value)}</a>`;

            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {

            // let base grid handle clicks for its edit links
            super.onClick(e, row, cell);

            // if base grid already handled, we shouldn"t handle it again
            if (e.isDefaultPrevented()) {
                return;
            }

            // get reference to current item
            var item = this.itemAt(row);

            // get reference to clicked element
            var target = $(e.target);

            if (target.hasClass("customer-link")) {
                e.preventDefault();


                    // CustomerDialog doesn't use CustomerID but ID (identity)
                // so need to find customer to get its actual ID
                var customer = Q.first(Master.ContactsRow.getLookup().items,
                    x => x.Id == item.FatherContactId);

                new Master.ContactsDialog().loadByIdAndOpenDialog(customer.Id);
              
                    
            }
            if (target.hasClass("customer-link2")) {
                e.preventDefault();


                // CustomerDialog doesn't use CustomerID but ID (identity)
                // so need to find customer to get its actual ID
                var customer = Q.first(Master.ContactsRow.getLookup().items,
                    x => x.Id == item.MotherContactId);

                new Master.ContactsDialog().loadByIdAndOpenDialog(customer.Id);


            }
            if (target.hasClass("customer-link3")) {
                e.preventDefault();


                // CustomerDialog doesn't use CustomerID but ID (identity)
                // so need to find customer to get its actual ID
                var customer = Q.first(Master.ContactsRow.getLookup().items,
                    x => x.Id == item.StudentContactId);

                new Master.ContactsDialog().loadByIdAndOpenDialog(customer.Id);


            }
            
        }
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {
            let filters = super.getQuickFilters();

            filters.push({
               
                           field: fld.CurrentCourses,
                type: Serenity.LookupEditor,
                title: "Course",
                cssClass: "quick-filter-width-250",
                options: {
                    lookupKey: "Master.Courses",
                    multiple: true
                },
                handler: w => {
                    var ss = 0;
                    if (w.value.length > ss) {
                        var k = [];
                        w.value.forEach(function (value) {
                            k.push(value);
                        });



                        w.request.EqualityFilter[fld.CurrentCourses] = k;


                    }
                    else {
                        var k = [];
                        w.request.EqualityFilter[fld.CurrentCourses] = k;

                    }
                    //if (
                    //{
                    //    //if (Q.parseInteger(w.value) == InventoryStoreQtyOptions.Available) {
                    
                    //    //}
                    //    //if (Q.parseInteger(w.value) == InventoryStoreQtyOptions.Unavailable) {
                    //    //    w.request.Criteria = Serenity.Criteria.and(w.request.Criteria, [[fld.Qty], '<=', '0']);
                    //    //}
                    //}
                }
            });

            //Q.first(filters, x => x.field == fld.Qty).init = w => {
            //    (w as Serenity.EnumEditor).value = InventoryStoreQtyOptions.Available.toString();
            //};

            return filters;
        }
        //getQuickFilters(): any {
        //    //var filters = super.getQuickFilters();

        //    //filters.push({
        //    //    field: fld.CurrentCourses,
        //    //    type: Serenity.LookupEditor,
        //    //    title: "Course",
        //    //    cssClass: "quick-filter-width-250",
        //    //    options: {
        //    //        lookupKey: "Master.Courses",
        //    //        multiple: true
        //    //    }
               
        //    //});

        //    //return filters;

        //    //filters.push({
        //    //    field: fld.CurrentCourses,
        //    //    type: Serenity.LookupEditor,
        //    //    options: {
        //    //                  lookupKey: "Master.Courses",
        //    //        multiple: true
        //    //    },
        //    //    handler: w => {
        //    //        (w.value.forEach(function (v) {

        //    //            console.log(v);
        //    //            w.request.Criteria = Serenity.Criteria.and(w.request.Criteria, [[fld.CurrentCourses], '>=', '1']);
        //    //        }));
                    
        //    //    }
        //    //});

        //    //Q.first(filters, x => x.field == fld.Qty).init = w => {
        //    //    (w as Serenity.EnumEditor).value = InventoryStoreQtyOptions.Available.toString();
        //    //};

        //    //return filters;
        //}
        
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: StudentsService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}