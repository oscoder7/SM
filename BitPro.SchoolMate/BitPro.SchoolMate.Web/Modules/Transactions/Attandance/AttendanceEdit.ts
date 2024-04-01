declare var Morris: any;

namespace BitPro.SchoolMate {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    export class AttendanceEdit extends Serenity.TemplatedDialog<any> {

        private areaChart: any;

        static initializePage() {
           
            $(function () {
                $("#cboSelect").prop("selectedIndex", -1);
                $('#btnAddtoList').click(function (e) {
                    var myTableDiv = document.getElementById("pardiv");
                    $('#pardiv').empty();
                    //var table = document.createElement('TABLE');
                    ////table.border = '1';
                    //table.className = "w3-red"
                    //var tablehead = document.createElement('THEAD');
                    //var tr1 = document.createElement('TR');
                    //tr1.className = "w3-red"
                    //var th1 = document.createElement('TH');
                    //th1.innerHTML = "Teacher Name";
                    //th1.style.width = "600spx";
                    //tr1.appendChild(th1);
                    //var th2 = document.createElement('TH');
                    //th2.innerHTML = "Status";
                    //tr1.appendChild(th2);
                    //tablehead.appendChild(tr1);
                    //table.appendChild(tablehead);
                    //var tableBody = document.createElement('TBODY');
                    //table.appendChild(tableBody);
                    //tableBody.className = "wsd";
                    //for (var i = 0; i < 3; i++) {
                    //    var tr = document.createElement('TR');
                    //    tableBody.appendChild(tr);

                    //    for (var j = 0; j < 4; j++) {
                    //        var td = document.createElement('TD');
                    //       // td.width = '75';
                    //        td.appendChild(document.createTextNode("Cell " + i + "," + j));
                    //        tr.appendChild(td);
                    //    }
                    //}
                    //myTableDiv.appendChild(table);
                    var criteria: any;
                    
                    var id = $("#cboSelect option:selected").val();
                    var date = new Date($('#loaddate').val());
                    var courseid = $("#cboSelectcourse option:selected").val();
                    var diviid = $("#cboSelectdivision option:selected").val();
                    Transactions.AttandanceService.GetAttendanceList({
                        date: date.toDateString(),
                        type: id,
                        courseid: courseid,
                        divid: diviid
                    }, response => {
                        var markdiv = $('<div class="row" style="padding:5px"><div class="col-md-10"><select id="cbmarkall" class="form-control select2" style="width: 100%;"><option value="1">Absente</option><option value="2">Present</option><option value="3">holiday</option></select></div><div class="col-md-2" id="buttondiv"></div></div>');
                            $('#pardiv').append(markdiv);
                            var button = document.createElement('button');
                            button.innerText = "Mark All";
                            button.className = "btn btn-primary";
                            button.onclick = function () {
                                Transactions.AttandanceService.UpdateAttendanceList({
                                    date: response.Entities,
                                    status: $("#cbmarkall option:selected").val()
                                }, response => {
                                        if (response == true) {
                                            Q.notifySuccess("Updated Successfully");
                                            document.getElementById('btnAddtoList').click();
                                        }

                                });
                            };
                            document.getElementById("buttondiv").appendChild(button); 
                            if (id == 1)
                            {
                                
                                var m = "";
                                response.Entities.forEach(function (value) {
                                    var str1 = "";
                                    var str2 = "";
                                    var str3 = "";
                                    if (value.Status == 1) {
                                        str1 = "selected"
                                    }
                                    else {
                                        if (value.Status == 2) {
                                            str2 = "selected"
                                        }
                                        else {
                                            str3 = "selected"
                                        }
                                    }
                                    var z = "<select id='cboSelect' class='form-control select2' style='width:100%;' onchange='getval(" + value.Id + ",this)'><option value='1' " + str1 + ">Absente</option><option value='2' " + str2 + ">Present</option><option value='3' " + str3 + ">holiday</option></select>";

                                    m = m + "<tr><td>" + value.StaffCode + "</td><td>" + z + "</td></tr>";

                                });
                                var newDivhol = $('<table class="w3-table-all"><thead><tr><th>Student Name</th><th>Status</th></tr></thead>' + m + '</table>');
                                $('#pardiv').append(newDivhol);
                            }
                            else
                            {
                                if (id == 2)
                                {

                                    
                                    var m = "";
                                    response.Entities.forEach(function (value) {
                                        var str1 = "";
                                        var str2 = "";
                                        var str3 = "";
                                        if (value.Status == 1)
                                        {
                                            str1 = "selected"
                                        }
                                        else
                                        {
                                            if (value.Status == 2)
                                            {
                                                str2 = "selected"
                                            }
                                            else
                                            {
                                                str3 = "selected"
                                            }
                                        }
                                        var z = "<select id='cboSelect' class='form-control select2' style='width:100%;' onchange='getval(" + value.Id + ",this)'><option value='1' " + str1 + ">Absente</option><option value='2' " + str2 + ">Present</option><option value='3' " + str3 +">holiday</option></select>";

                                        m = m + "<tr><td>" + value.StaffStaffName + " (" + value.StaffCode + ")</td><td>" + z + "</td></tr>";

                                    });
                                    var newDivhol = $('<table class="w3-table-all"><thead><tr><th>Teacher Name</th><th>Status</th></tr></thead>' + m + '</table>');
                                    $('#pardiv').append(newDivhol);
                                }
                                else
                                {
                                    if (id == 3)
                                    {
                                        var m = "";
                                        response.Entities.forEach(function (value) {
                                            var str1 = "";
                                            var str2 = "";
                                            var str3 = "";
                                            if (value.Status == 1) {
                                                str1 = "selected"
                                            }
                                            else {
                                                if (value.Status == 2) {
                                                    str2 = "selected"
                                                }
                                                else {
                                                    str3 = "selected"
                                                }
                                            }
                                            var z = "<select id='cboSelect' class='form-control select2' style='width:100%;' onchange='getval(" + value.Id + ",this)'><option value='1' " + str1 + ">Absente</option><option value='2' " + str2 + ">Present</option><option value='3' " + str3 + ">holiday</option></select>";
                                            alert(value.StaffStaffName);
                                            m = m + "<tr><td>" + value.StaffStaffName + " (" + value.StaffCode + ")</td><td>" + z + "</td></tr>";

                                        });
                                        var newDivhol = $('<table class="w3-table-all"><thead><tr ><th>Staff Name</th><th>Status</th></tr></thead>' + m + '</table>');
                                        $('#pardiv').append(newDivhol);

                                    }
                                }
                            }
                        }
                    );
                  
                });
                $('#cboSelect').change(function (e) {
                    var a = "";
                    if (this.value == 1) {
                        Transactions.AttandanceService.GetPromotionCurrentAcadamicYear({

                        }, response => {
                                response.forEach(function (value) {

                                    a = a + "<option value='" + value.promotionid + "'>" + value.CousrseName + "</option>"
                                });
                                var newDivhol = $('<div id="comboco"><label>Course</label><select id="cboSelectcourse" class="form-control select2" style="width:100%;"  onchange="getdat(this)">' + a + '</select></div>');
                                $('#combo').append(newDivhol);
                                $("#cboSelectcourse").prop("selectedIndex", -1);

                        });
                        
                    }
                    else {
                        var l = document.getElementById("comboco");
                        if (l != null)
                        {
                            l.remove();
                        }
                        var l2 = document.getElementById("comboco2");
                        if (l2 != null) {
                            l2.remove();
                        }
                    }
                });


            });
            
           


            
        }
        static getdat(val) {
            var l = document.getElementById("comboco2");
            if (l != null) {
                l.remove();
            }
            var a = "";
            var criteria: any;
            Common.CommonService.DivisionsList({
                promotionid:val.value
            }, response => {
                response.Entities.forEach(function (value) {

                    a = a + "<option value='" + value.Id + "'>" + value.DivisionCode + "</option>"
                });
                var newDivhol = $('<div id="comboco2"><label>Division</label><select id="cboSelectdivision" class="form-control select2" style="width:100%;" >' + a + '</select></div>');
                $('#combo').append(newDivhol);
                $("#cboSelectdivision").prop("selectedIndex", -1);

            });
        }
        static UpdateAll(list) {
            alert("sdc");
        }
        protected onDialogOpen() {
            super.onDialogOpen();
            //BasicSamplesService.OrdersByShipper({}, response => {
            //    this.areaChart = new Morris.Area({
            //        element: this.idPrefix + 'Chart',
            //        resize: true, parseTime: false,
            //        data: response.Values,
            //        xkey: 'Month',
            //        ykeys: response.ShipperKeys, labels: response.ShipperLabels, hideHover: 'auto'
            //    });
            //});
        }

        protected arrange() {
            super.arrange();
            this.areaChart && this.areaChart.redraw();
        }

        protected getTemplate() {
            // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
            return "<div id='~_Chart'></div>";
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Orders by Shipper';
            return opt;
        }
    }
}