namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    export class DivisionStudentsCheckDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {

        private permissions: Administration.PermissionCheckEditor;

        constructor(opt: RolePermissionDialogOptions) {
            super(opt);
            this.getDialogOptions().width = 300;
            //this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
            //    showRevoke: false
            //});
            //var button = document.createElement('button');
            //button.innerText = "Add";
            //button.onclick = function () {
                
            //};  
            var k = this.options.prormotionid;
            var kd = this;
            // $('<span>< ul style = "list-style-type: none; display: inline-block;" > <li>1 < /li> < li > 2 < /li> < /ul> < ul style = "list-style-type: none; display: inline-block;" > <li>3 < /li> < li > 4 < /li>< /ul> < span >').appendTo(this.byId('Permissions'));
            //DivisionsService.GetByAcadamicYear({
            //    DivisionIds: this.options.divid,
            //    AcadamicYearId: this.options.acdid,
                
            //}, response => {
                    
            //        for (let item of response) {
            //            if (item.Status == true) {
            //                var button = document.createElement('button');
            //                button.innerText = "-";
            //                button.onclick = function () {
            //                    DivisionsService.DeleteStudentFromDivision({
            //                        AcadamicYearId: k,
            //                        DivisionIds: m,
            //                        StudentId: item.StudentId,

            //                    }, response => {
            //                            kd.myFunc2();
            //                    });
            //                };
            //                var trow = document.createElement('TR');
            //                var y = document.createElement("TD");
            //                var t = document.createTextNode(item.StudentName);
            //                y.appendChild(t);
            //                var y2 = document.createElement("TD");
            //                y2.append(button);
            //                trow.appendChild(y);
            //                trow.appendChild(y2);
            //                $('#myTable2').append(trow);
            //            }
            //            else {
            //                //$('#myTable2').append('<tr><td>' + item.StudentName + '</td><td><button class="btn btn-outline-primary" onclick="myFunc(' + item.StudentId + ',' + this.options.divid + ',' + this.options.acdid+')">+</button></td></tr>');
            //                //$("#menu2").append('<tr><td> Island Trading </td><td> Helen Bennett </td><td> UK </td></tr>');
            //                var button = document.createElement('button');
            //                button.innerText = "+";
            //                button.onclick = function () {
            //                    DivisionsService.UpdateDivision({
            //                        AcadamicYearId: k,
            //                        DivisionIds: m,
            //                        StudentId: item.StudentId,
                            
            //                    }, response => {
            //                            kd.myFunc2();
            //                                        });
            //                };
            //                var trow = document.createElement('TR');
            //                var y = document.createElement("TD");
            //                var t = document.createTextNode(item.StudentName);
            //                y.appendChild(t);
            //                var y2 = document.createElement("TD");
            //                y2.append(button);
            //                trow.appendChild(y);
            //                trow.appendChild(y2);
            //                $('#myTable3').append(trow);
            //            }
            //        }
                    
            //});
            this.myFunc2();

            
        }
        public myFunc2() {
            $('#myTable2 tbody').empty();
             $('#myTable3 tbody').empty();
            var k = this.options.divid;
            var kd = this;
            DivisionsService.GetByPromotions({
                promotionid: this.options.prormotionid,
                
            }, response => {
                   
                for (let item of response) {
                       
                        //$('#myTable2').append('<tr><td>' + item.StudentName + '</td><td><button class="btn btn-outline-primary" onclick="myFunc(' + item.StudentId + ',' + this.options.divid + ',' + this.options.acdid+')">+</button></td></tr>');
                        //$("#menu2").append('<tr><td> Island Trading </td><td> Helen Bennett </td><td> UK </td></tr>');
                        var button = document.createElement('button');
                        button.innerText = "+";
                    button.onclick = function () {
                        
                        DivisionStudentsService.Create({
                            Entity: { DivisionId: kd.options.divid, PromotionDetailId: item.promotiondetailsid }

                            }, response => {
                                    kd.myFunc2();
                            });
                        };
                        var trow = document.createElement('TR');
                        var y = document.createElement("TD");
                       
                        var t = document.createTextNode(item.StudentName);
                        y.appendChild(t);
                        var y2 = document.createElement("TD");
                        y2.append(button);
                        trow.appendChild(y);
                        trow.appendChild(y2);
                        $('#tbodyid2').append(trow);
                    
                }

            });
            var criteria: any;
            DivisionStudentsService.List({
                Criteria: Serenity.Criteria.and(criteria, [[Master.DivisionStudentsRow.Fields.DivisionId], '=', kd.options.divid])

            }, response => {
               // $('#myTable2 tbody').empty();
                  //  $('#myTable3 tbody').empty();
                    for (let item of response.Entities) {
                    var button = document.createElement('button');
                    button.innerText = "-";
                        button.onclick = function () {
                            DivisionStudentsService.Delete({
                                EntityId: item.Id

                        }, response => {
                            kd.myFunc2();
                        });
                    };
                    var trow = document.createElement('TR');
                    var y = document.createElement("TD");

                    var t = document.createTextNode(item.Student);
                    y.appendChild(t);
                    var y2 = document.createElement("TD");
                    y2.append(button);
                    trow.appendChild(y);
                    trow.appendChild(y2);
                    $('#tbodyid3').append(trow);


                }

            });
        }
        protected getTemplate() {
            var k = Master.DivisionsRow.getLookup().itemById[this.options.divid];
    
            // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
            return "<div id='~_Permissions'><div style='float:left; margin:10px'><h3>Current In Division(" + k.DivisionCode+")</h3><table id='myTable2'> <thead><th width='300px'>Student</th><th width='150px'>Action</th> </thead><tbody id='tbodyid3'> <tbody></table></div><div style='float:left;margin:10px'><h3>Unallocated</h3><table id='myTable3'>  <thead>  <th width='300px'>Student </th><th>Action</th>  </thead>   <tbody id='tbodyid2'> <tbody></table></div></div>";
        }

        protected getDialogOptions() {

            let opt = super.getDialogOptions();

            opt.buttons = [
                {
                    text: Q.text('Dialogs.OkButton'),
                    click: e => {
                        //RolePermissionService.Update({
                        //    RoleID: this.options.roleID,
                        //    Permissions: this.permissions.value.map(x => x.PermissionKey),
                        //    Module: null,
                        //    Submodule: null
                        //}, response => {
                        //    this.dialogClose();
                        //    window.setTimeout(() => Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')), 0);
                        //});
                        this.dialogClose()
                    }
                },
                //{
                //    text: Q.text('Dialogs.CancelButton'),
                //    click: () => this.dialogClose()
                //}
            ];

            //opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'),
            //    this.options.title);

            opt.title = 'Division Students';
            return opt;
        }
    }

    export interface RolePermissionDialogOptions {
        divid?: number;
        prormotionid?: number
    }
}