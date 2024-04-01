/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class FeeStructureEditor extends Common.GridEditorBase<FeeStructureRow> {
        protected getColumnsKey() { return "Master.FeeStructure"; }
        protected getDialogType() { return FeeStructureDialog; }
        protected getLocalTextPrefix() { return FeeStructureRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
            var ite=this;
            this.slickGrid.onSort.subscribe(function (e, args) {
                sortGridFunction((args.grid as Slick.Grid), args.sortCols[0], args.sortCols[0].sortCol.field);

                //(args.grid as Slick.Grid).init();
                (args.grid as Slick.Grid).invalidateAllRows();
                (args.grid as Slick.Grid).invalidate();
                (args.grid as Slick.Grid).render();
                (args.grid as Slick.Grid).resizeCanvas();
            });
            this.number = 1;
            Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({


            }, response => {

                    this.number = response.Id;
                ite.view.beginUpdate();
                let filter = function filter(item, args) {
                    var linha = (item as FeeStructureRow);

                    // filter logic
                    //Sample filter (if the Value for column "CduCodigo" equals 3)
                    if (item["AcadamicYearId"] == ite.number)
                        return true;

                    return false;
                }

                ite.view.setFilter(filter);

                ite.view.endUpdate();
                //this.view.endUpdate();
               
            });
            this.quickFiltersBar.changeSelect2(function (e){
                
                ite.view.beginUpdate();
                if (e.added != null) {
                    ite.number = e.added.id;
                    let filter = function filter(item, args) {
                        var linha = (item as FeeStructureRow);

                        // filter logic
                        //Sample filter (if the Value for column "CduCodigo" equals 3)
                        if (item["AcadamicYearId"] == 1)
                            return true;

                        return false;
                    }
                    ite.view.setFilter(filter);

                    ite.view.endUpdate();
                }

                
                //this.view.endUpdate();
            });
            
        }
       
        protected layout() {
            super.layout();

            var sortCols = this.slickGrid.getSortColumns();

            sortGridFunction(this.slickGrid, sortCols[0], sortCols[0].columnId);
        }
        private number = 0;
        protected onViewSubmit() {
            var kl = this.number;
            

                    
                    this.view.beginUpdate();

                    let filter = function filter(item, args) {
                        var linha = (item as FeeStructureRow);

                        // filter logic
                        //Sample filter (if the Value for column "CduCodigo" equals 3)
                        if (item["AcadamicYearId"] == kl)
                            return true;

                        return false;
                    }

                    this.view.setFilter(filter);

                    this.view.endUpdate();

            

            return true;
        }
        protected enableFiltering() {
            return true;
        }
        protected getDefaultSortBy() {
            //Columns to apply first sort on layout
            return ["Id"];
        }
        //protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

        //    // get quick filter list from base class
        //    let filters = super.getQuickFilters();

        //    let filter = Q.first(filters, x => x.field == "AcadamicYearId");  // *** The city filter is special because it does not derive its values from a real xyzRow but its values are collected from all customers (see Northwind/Customer/CustomerCity.cs) ***
        //    var f = this.getItems();
        //    filter.handler = h => {
        //        //this.CityName = h.value;    // *** We want to store the selected value from the city quickfilter in the CityName private string field of this grid class ***
        //        var k = h.value;
        //        if (h.active) {
        //            //var i = f.filter(k => k.AcadamicYearId = h.);  
        //            var i=0;
        //        }
        //    };

        //    return filters;
        //}
        validateEntity(row, id) {


            //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
            //if (sameProduct && this.id(sameProduct) !== id) {
            //    Q.alert('This product is already in order details!');
            //    return false;
            //}
            row.AcadamicYearCode = Master.AcadamicYearRow.getLookup().itemById[row.AcadamicYearId].Code;
            row.FeeTermTermName = Master.FeeTermsRow.getLookup().itemById[row.FeeTermId].TermName;
            //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
    }
    function sortGridFunction(grid: Slick.Grid, column: any, field: any) {
        grid.getData().sort(function (a, b) {
            var result = a[field] > b[field] ? 1 :
                a[field] < b[field] ? -1 :
                    0;
            return column.sortAsc ? result : -result;
        });
    }
}