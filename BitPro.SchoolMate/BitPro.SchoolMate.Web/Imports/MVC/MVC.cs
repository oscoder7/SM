using System;

namespace MVC
{
    public static class Views
    {
        public static class Accounts
        {
            public static class Accounts_
            {
                public const string AccountsIndex = "~/Modules/Accounts/Accounts/AccountsIndex.cshtml";
            }

            public static class Contra
            {
                public const string ContraIndex = "~/Modules/Accounts/Contra/ContraIndex.cshtml";
            }

            public static class Payment
            {
                public const string PaymentIndex = "~/Modules/Accounts/Payment/PaymentIndex.cshtml";
            }

            public static class Receipt
            {
                public const string ReceiptIndex = "~/Modules/Accounts/Receipt/ReceiptIndex.cshtml";
            }

        }

        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Sergen
            {
                public const string SergenError = "~/Modules/Administration/Sergen/SergenError.cshtml";
                public const string SergenIndex = "~/Modules/Administration/Sergen/SergenIndex.cshtml";
            }

            public static class Settings
            {
                public const string SettingsIndex = "~/Modules/Administration/Settings/SettingsIndex.cshtml";
            }

            public static class SystemSettings
            {
                public const string SystemSettingsIndex = "~/Modules/Administration/SystemSettings/SystemSettingsIndex.cshtml";
            }

            public static class Tenant
            {
                public const string TenantIndex = "~/Modules/Administration/Tenant/TenantIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Master
        {
            public static class AcadamicYear
            {
                public const string AcadamicYearIndex = "~/Modules/Master/AcadamicYear/AcadamicYearIndex.cshtml";
            }

            public static class AccountHeads
            {
                public const string AccountHeadsIndex = "~/Modules/Master/AccountHeads/AccountHeadsIndex.cshtml";
            }

            public static class Areas
            {
                public const string AreasIndex = "~/Modules/Master/Areas/AreasIndex.cshtml";
            }

            public static class Campuses
            {
                public const string CampusesIndex = "~/Modules/Master/Campuses/CampusesIndex.cshtml";
            }

            public static class Contacts
            {
                public const string ContactsIndex = "~/Modules/Master/Contacts/ContactsIndex.cshtml";
            }

            public static class Countries
            {
                public const string CountriesIndex = "~/Modules/Master/Countries/CountriesIndex.cshtml";
            }

            public static class CourseDivisions
            {
                public const string CourseDivisionsIndex = "~/Modules/Master/CourseDivisions/CourseDivisionsIndex.cshtml";
            }

            public static class CourseFee
            {
                public const string CourseFeeIndex = "~/Modules/Master/CourseFee/CourseFeeIndex.cshtml";
            }

            public static class Courses
            {
                public const string CoursesIndex = "~/Modules/Master/Courses/CoursesIndex.cshtml";
            }

            public static class CourseSubjects
            {
                public const string CourseSubjectsIndex = "~/Modules/Master/CourseSubjects/CourseSubjectsIndex.cshtml";
            }

            public static class Currencies
            {
                public const string CurrenciesIndex = "~/Modules/Master/Currencies/CurrenciesIndex.cshtml";
            }

            public static class Divisions
            {
                public const string DivisionsIndex = "~/Modules/Master/Divisions/DivisionsIndex.cshtml";
            }

            public static class DivisionStudents
            {
                public const string DivisionStudentsIndex = "~/Modules/Master/DivisionStudents/DivisionStudentsIndex.cshtml";
            }

            public static class ExamCourses
            {
                public const string ExamCoursesIndex = "~/Modules/Master/ExamCourses/ExamCoursesIndex.cshtml";
            }

            public static class ExamMaxMarks
            {
                public const string ExamMaxMarksIndex = "~/Modules/Master/ExamMaxMarks/ExamMaxMarksIndex.cshtml";
            }

            public static class Exams
            {
                public const string ExamsIndex = "~/Modules/Master/Exams/ExamsIndex.cshtml";
            }

            public static class FeeExcemptions
            {
                public const string FeeExcemptionsIndex = "~/Modules/Master/FeeExcemptions/FeeExcemptionsIndex.cshtml";
            }

            public static class Fees
            {
                public const string FeesIndex = "~/Modules/Master/Fees/FeesIndex.cshtml";
            }

            public static class FeeStructure
            {
                public const string FeeStructureIndex = "~/Modules/Master/FeeStructure/FeeStructureIndex.cshtml";
            }

            public static class FeeTerms
            {
                public const string FeeTermsIndex = "~/Modules/Master/FeeTerms/FeeTermsIndex.cshtml";
            }

            public static class Staffs
            {
                public const string StaffsIndex = "~/Modules/Master/Staffs/StaffsIndex.cshtml";
            }

            public static class StaffSubjects
            {
                public const string StaffSubjectsIndex = "~/Modules/Master/StaffSubjects/StaffSubjectsIndex.cshtml";
            }

            public static class StudentCurrentCourses
            {
                public const string StudentCurrentCoursesIndex = "~/Modules/Master/StudentCurrentCourses/StudentCurrentCoursesIndex.cshtml";
            }

            public static class Students
            {
                public const string StudentsIndex = "~/Modules/Master/Students/StudentsIndex.cshtml";
            }

            public static class Subjects
            {
                public const string SubjectsIndex = "~/Modules/Master/Subjects/SubjectsIndex.cshtml";
            }

        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

        public static class Transactions
        {
            public static class Admission
            {
                public const string AdmissionIndex = "~/Modules/Transactions/Admission/AdmissionIndex.cshtml";
            }

            public static class Attandance
            {
                public const string AttandanceIndex = "~/Modules/Transactions/Attandance/AttandanceIndex.cshtml";
                public const string AttendanceEditIndex = "~/Modules/Transactions/Attandance/AttendanceEditIndex.cshtml";
            }

            public static class CourseExit
            {
                public const string CourseExitIndex = "~/Modules/Transactions/CourseExit/CourseExitIndex.cshtml";
            }

            public static class CourseExitDetails
            {
                public const string CourseExitDetailsIndex = "~/Modules/Transactions/CourseExitDetails/CourseExitDetailsIndex.cshtml";
            }

            public static class FeeAllocation
            {
                public const string FeeAllocationIndex = "~/Modules/Transactions/FeeAllocation/FeeAllocationIndex.cshtml";
            }

            public static class FeeAllocationTranportation
            {
                public const string FeeAllocationTranportationIndex = "~/Modules/Transactions/FeeAllocationTranportation/FeeAllocationTranportationIndex.cshtml";
            }

            public static class FeeCollection
            {
                public const string FeeCollectionIndex = "~/Modules/Transactions/FeeCollection/FeeCollectionIndex.cshtml";
            }

            public static class PromotionDetails
            {
                public const string PromotionDetailsIndex = "~/Modules/Transactions/PromotionDetails/PromotionDetailsIndex.cshtml";
            }

            public static class Promotions
            {
                public const string PromotionsIndex = "~/Modules/Transactions/Promotions/PromotionsIndex.cshtml";
            }

            public static class Reports
            {
                public const string AccountStatements = "~/Modules/Transactions/Reports/AccountStatements.cshtml";
                public const string AttendanceReport = "~/Modules/Transactions/Reports/AttendanceReport.cshtml";
                public const string ClassWiseAttendanceReport = "~/Modules/Transactions/Reports/ClassWiseAttendanceReport.cshtml";
                public const string ClassWiseFeeCollection = "~/Modules/Transactions/Reports/ClassWiseFeeCollection.cshtml";
                public const string FeeDue = "~/Modules/Transactions/Reports/FeeDue.cshtml";
                public const string ProgressCard = "~/Modules/Transactions/Reports/ProgressCard.cshtml";
                public const string StaffAttendanceSummary = "~/Modules/Transactions/Reports/StaffAttendanceSummary.cshtml";
                public const string TrialBalance = "~/Modules/Transactions/Reports/TrialBalance.cshtml";
            }

            public static class SalaryPayments
            {
                public const string SalaryPaymentsIndex = "~/Modules/Transactions/SalaryPayments/SalaryPaymentsIndex.cshtml";
            }

            public static class SalaryStructure
            {
                public const string SalaryStructureIndex = "~/Modules/Transactions/SalaryStructure/SalaryStructureIndex.cshtml";
            }

            public static class StudentMarks
            {
                public const string StudentMarksIndex = "~/Modules/Transactions/StudentMarks/StudentMarksIndex.cshtml";
            }

            public static class StudentMarksDetails
            {
                public const string StudentMarksDetailsIndex = "~/Modules/Transactions/StudentMarksDetails/StudentMarksDetailsIndex.cshtml";
            }

            public static class StudentMarksSubjects
            {
                public const string StudentMarksSubjectsIndex = "~/Modules/Transactions/StudentMarksSubjects/StudentMarksSubjectsIndex.cshtml";
            }

            public static class Transport
            {
                public const string TransportIndex = "~/Modules/Transactions/Transport/TransportIndex.cshtml";
            }

        }

    }
}
