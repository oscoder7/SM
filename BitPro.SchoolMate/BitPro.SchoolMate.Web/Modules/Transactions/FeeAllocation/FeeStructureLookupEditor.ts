namespace  BitPro.SchoolMate
{

    @Serenity.Decorators.registerEditor()
    export class FeeStructureLookupEditor extends
        Serenity.LookupEditorBase<Serenity.LookupEditorOptions, any> {

        public myId: number;
        public feestructures: any;
        public feestuctureid: number;
        public stucturename: string;
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions) {
            super(container, opt);
        }

        protected getLookupKey() {
            return this.buildLookupKey(this.myId);
        }

        protected getItems(lookup: Q.Lookup<any>) {
           // var customLookup = Q.getLookup(this.buildLookupKey(this.myId));

            let items: any = [];// super.getItems(customLookup);
            //if (this.studentcourse != null) {
            //    items.forEach((item, index) => {
            //        var z=this.studentcourse.some(person => person.CourseId === item.Id)
            //        if (z != true)
            //           items.slice(index, 1)
            //    });
            //}
            if (this.feestuctureid > 0) {
                var kd = { Id: this.feestuctureid, FeeTermTermName: this.stucturename };
                items.push(kd)
                return items;
            }
            else {
                if (this.feestructures != null) {

                    for (var i = 0; i < this.feestructures.length; i++) {

                        var k = { Id: this.feestructures[i].FeeStructureId, FeeTermTermName: this.feestructures[i].TermName };
                        items.push(k)
                    }
                }
            }
            // this is demo about filtering lookup items

            // only take item that has Id % 5 = 0 (5, 10, 15, 20...)
            //items = items.filter(x => Q.toId(x.Id) % 5 == 0); // here 'Id' field is hardcode for demo

            // just take maximum first 5 items
            

            if (this.myId == null || this.myId.toString() == "") {
                items = [];
            }
            return items;
             
            
        }

        private buildLookupKey(id?: number): string {

            //demo switch lookup key by id

            return "Master.FeeStructure"
        }
    }
}