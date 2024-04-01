namespace  BitPro.SchoolMate
{

    @Serenity.Decorators.registerEditor()
    export class MyLookupEditor extends
        Serenity.LookupEditorBase<Serenity.LookupEditorOptions, any> {

        public myId: number;
        public studentcourse: any;
        public isedit: boolean;
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions) {
            super(container, opt);
        }

        protected getLookupKey() {
            return this.buildLookupKey(this.myId);
        }

        protected getItems(lookup: Q.Lookup<any>) {

            if (this.isedit)
            {
                var customLookup = Q.getLookup(this.buildLookupKey(this.myId));
                return customLookup.items;
            }
            //var customLookup = Q.getLookup(this.buildLookupKey(this.myId));
            let items: any = [];
            
            
            if (this.studentcourse != null) {
                for (var i = 0; i < this.studentcourse.length; i++) {

                    var k = { Id: this.studentcourse[i].CourseId, Code: this.studentcourse[i].CourseCode };
                    items.push(k)
                }
            }
            
            

            if (this.myId == null || this.myId.toString() == "") {
                items = [];
            }

            return items;
             
            
        }

        private buildLookupKey(id?: number): string {

            //demo switch lookup key by id

            return "Master.Courses"
        }
    }
}