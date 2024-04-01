namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    @Serenity.Decorators.panel()
    export class PromotionStudentsDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {

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
            var criteria: any;
            Master.DivisionsService.List({
                Criteria: Serenity.Criteria.and(criteria, [[Master.DivisionsRow.Fields.PromotionId], '=', kd.options.promotionid])

            }, response => {
                // $('#myTable2 tbody').empty();
                //  $('#myTable3 tbody').empty();
               
                    var a = "";
                    a = a + "<option value='0'>---select if Default----</option>"
                    response.Entities.forEach(function (value) {

                        a = a + "<option value='" + value.Id + "'>" + value.DivisionCode + "</option>"
                    });
                    //var newDivhol = $('<div id="comboco"><label>Course</label><select id="cboSelectcourse" class="form-control select2" style="width:100%;"  onchange="getdat(this)">' + a + '</select></div>');
                    //$('#combo').append(newDivhol);
                    $("#cboSelectcourse").empty();
                    $("#cboSelectcourse").append(a);
                    $("#cboSelectcourse").prop("selectedIndex", -1);

                

            });
            this.myFunc2();

            
        }
        public myFunc2() {
           
            var kd = this;
            PromotionsService.GetStudentsByCourse({
                FromCouseId: this.options.fromcourseid,
                PromotionId: this.options.promotionid,
                ToCouseId: this.options.tocourseid,
                AcadamicYearId: this.options.acadamicyearid

            }, response => {
                   // $('#myTable2 tbody').empty();
                   // $('#myTable3 tbody').empty();
                    $('#tbodyid3').empty();
                    $('#tbodyid4').empty();
                for (let item of response) {
                   
                        var button = document.createElement('button');
                    button.innerText = "+";

                    button.onclick = function () {
                        var id = $("#cboSelectcourse option:selected").val();
                        PromotionsService.InsertIntoPromotionDetails({
                            PromotionId: kd.options.promotionid,
                            StudentId: item.StudentId,
                            promotiondetailid: item.promotiondetailid,
                            divid:id
                            }, response => {
                                kd.myFunc2();
                            })
                        };
                        var trow = document.createElement('TR');
                        var y = document.createElement("TD");
                        
                        var t = document.createTextNode(item.StudentName);
                        y.appendChild(t);
                        var y2 = document.createElement("TD");
                        y2.append(button);
                        trow.appendChild(y);
                        trow.appendChild(y2);
                    

                    if (item.type == '1') {
                        $('#tbodyid4').append(trow);
                    }
                    else {
                        $('#tbodyid3').append(trow);
                    }
                    //}
                    //else {
                    //    //$('#myTable2').append('<tr><td>' + item.StudentName + '</td><td><button class="btn btn-outline-primary" onclick="myFunc(' + item.StudentId + ',' + this.options.divid + ',' + this.options.acdid+')">+</button></td></tr>');
                    //    //$("#menu2").append('<tr><td> Island Trading </td><td> Helen Bennett </td><td> UK </td></tr>');
                    //    var button = document.createElement('button');
                    //    button.innerText = "+";
                    //    button.onclick = function () {
                    //        //DivisionsService.UpdateDivision({
                    //        //    AcadamicYearId: k,
                    //        //    DivisionIds: m,
                    //        //    StudentId: item.StudentId,

                    //        //}, response => {
                    //        //        kd.myFunc2();
                    //        //});
                    //    };
                    //    var trow = document.createElement('TR');
                    //    var y = document.createElement("TD");
                       
                    //    var t = document.createTextNode(item.StudentName);
                    //    y.appendChild(t);
                    //    var y2 = document.createElement("TD");
                    //    y2.append(button);
                    //    trow.appendChild(y);
                    //    trow.appendChild(y2);
                    //    $('#tbodyid2').append(trow);
                    //}
                }

            });
            PromotionsService.GetPromotionDetails({
                FromCouseId: this.options.fromcourseid,
                PromotionId: this.options.promotionid,

            }, response => {
               // $('#myTable2 tbody').empty();
                    //$('#myTable3 tbody').empty();
                    $('#tbodyid2').empty();
                for (let item of response) {

                    var button = document.createElement('button');
                    button.innerText = "-";
                    button.onclick = function () {
                        if (kd.options.fromcourseid == null) {
                            Q.notifyError("Not possible in type admission");
                            return;
                        }
                        PromotionsService.DeletePromotionDetails({
                            PromotionId: kd.options.promotionid,
                            StudentId: item.StudentId,
                            promotiondetailid: item.promotiondetailid

                        }, response => {
                                if (response == false) {
                                    Q.notifyError("A higher promotion already exists");
                                }
                                else {
                                    kd.myFunc2();
                                }
                           
                        })
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
                    //}
                    //else {
                    //    //$('#myTable2').append('<tr><td>' + item.StudentName + '</td><td><button class="btn btn-outline-primary" onclick="myFunc(' + item.StudentId + ',' + this.options.divid + ',' + this.options.acdid+')">+</button></td></tr>');
                    //    //$("#menu2").append('<tr><td> Island Trading </td><td> Helen Bennett </td><td> UK </td></tr>');
                    //    var button = document.createElement('button');
                    //    button.innerText = "+";
                    //    button.onclick = function () {
                    //        //DivisionsService.UpdateDivision({
                    //        //    AcadamicYearId: k,
                    //        //    DivisionIds: m,
                    //        //    StudentId: item.StudentId,

                    //        //}, response => {
                    //        //        kd.myFunc2();
                    //        //});
                    //    };
                    //    var trow = document.createElement('TR');
                    //    var y = document.createElement("TD");

                    //    var t = document.createTextNode(item.StudentName);
                    //    y.appendChild(t);
                    //    var y2 = document.createElement("TD");
                    //    y2.append(button);
                    //    trow.appendChild(y);
                    //    trow.appendChild(y2);
                    //    $('#tbodyid2').append(trow);
                    //}
                }

            });
        }
        protected getTemplate() {
            var fromcousername = "";
            var tocoursename = "";
            // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
            if (this.options.fromcourseid > 0) {
                 fromcousername = Master.CoursesRow.getLookup().itemById[this.options.fromcourseid].CourseName;
            }
            if (this.options.tocourseid > 0) {
                tocoursename = Master.CoursesRow.getLookup().itemById[this.options.tocourseid].CourseName;
            }
            var table3 = "<table id='myTable4' width='100%' class='timecard'> <caption>Students In " + tocoursename + "(Previous academic year)</caption><thead><th>Student</th><th width='150px'>Action</th> </thead><tbody id='tbodyid4'> <tbody></table>";
            var table1 = "<table id='myTable2' width='100%' class='timecard'> <caption>Students In " + fromcousername + "(Previous academic year)</caption><thead><th>Student</th><th width='150px'>Action</th> </thead><tbody id='tbodyid3'> <tbody></table>";
            var table2 = "<table id='myTable3' width='100%' class='timecard'>  <caption>Promotion Details(" + tocoursename + ")</caption> <thead>  <th>Student </th><th>Action</th>  </thead>   <tbody id='tbodyid2'> <tbody></table>";
            var div = "<br><div class='row'> <div class='col-md-4'>" + table1 + "</div><div class='col-md-4'>" + table3 + "</div><div class='col-md-4'>" + table2 + "</div></div>";
            return "<div id='~_Permissions'><div id='comboco' style='padding-right:20px;padding-left:20px;'><label>Default Division</label><select id='cboSelectcourse' class='form-control select2' style='width:100%;'></select></div>"+div+"</div";

            var tab3 = "<div style='float:left; margin:10px'><table id='myTable3' class='timecard'> <caption>Students In " + fromcousername + "</caption><thead><th width='300px'>Student</th><th width='150px'>Action</th> </thead><tbody id='tbodyid4'> <tbody></table></div>";
            return "<div id='~_Permissions'><div id='comboco' style='padding-right:20px;padding-left:20px;'><label>Default Division</label><select id='cboSelectcourse' class='form-control select2' style='width:100%;'></select></div><div style='float:left; margin:10px'><table id='myTable2' class='timecard'> <caption>Students In " + fromcousername + "</caption><thead><th width='300px'>Student</th><th width='150px'>Action</th> </thead><tbody id='tbodyid3'> <tbody></table></div><div style='float:left;margin:10px'><table id='myTable3' class='timecard'>  <caption>Promotion Details(" + tocoursename + ")</caption> <thead>  <th width='300px'>Student </th><th>Action</th>  </thead>   <tbody id='tbodyid2'> <tbody></table></div>" + tab3+"</div>";
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

            opt.title = 'Promotion Students';
            return opt;
        }
    }

    export interface RolePermissionDialogOptions {
        fromcourseid?: number;
        tocourseid?: number;
        promotionid?: number;
        acadamicyearid?: number;
    }
}