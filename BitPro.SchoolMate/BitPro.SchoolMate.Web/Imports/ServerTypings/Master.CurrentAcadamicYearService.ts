namespace BitPro.SchoolMate.Master {
    export namespace CurrentAcadamicYearService {
        export const baseUrl = 'Master/CurrentAcadamicYear';

        export declare function GetCurrentAcadamicYear(request: Serenity.ServiceRequest, onSuccess?: (response: AcadamicYearRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            GetCurrentAcadamicYear = "Master/CurrentAcadamicYear/GetCurrentAcadamicYear"
        }

        [
            'GetCurrentAcadamicYear'
        ].forEach(x => {
            (<any>CurrentAcadamicYearService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
