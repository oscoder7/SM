namespace BitPro.SchoolMate.Texts {

    declare namespace Db {

        namespace Accounts {

            namespace Accounts {
                export const AccountHeadCode: string;
                export const AccountHeadDescription: string;
                export const AccountHeadId: string;
                export const AccountHeadLedgerType: string;
                export const AccountHeadParentHeadId: string;
                export const AccountHeadTenantId: string;
                export const AccountNo: string;
                export const Id: string;
                export const IsDefault: string;
                export const TenantId: string;
                export const Type: string;
            }

            namespace Contra {
                export const Amount: string;
                export const Attachments: string;
                export const ContactId: string;
                export const CreditAccountAccountHeadId: string;
                export const CreditAccountAccountNo: string;
                export const CreditAccountHeadCode: string;
                export const CreditAccountHeadDescription: string;
                export const CreditAccountHeadId: string;
                export const CreditAccountHeadLedgerType: string;
                export const CreditAccountHeadParentHeadId: string;
                export const CreditAccountHeadTenantId: string;
                export const CreditAccountId: string;
                export const CreditAccountType: string;
                export const DebitAccountAccountHeadId: string;
                export const DebitAccountAccountNo: string;
                export const DebitAccountHeadCode: string;
                export const DebitAccountHeadDescription: string;
                export const DebitAccountHeadId: string;
                export const DebitAccountHeadLedgerType: string;
                export const DebitAccountHeadParentHeadId: string;
                export const DebitAccountHeadTenantId: string;
                export const DebitAccountId: string;
                export const DebitAccountType: string;
                export const EntityId: string;
                export const EntityType: string;
                export const Id: string;
                export const PaymentMethod: string;
                export const Remarks: string;
                export const TenantId: string;
                export const TrxDate: string;
                export const VNo: string;
                export const VType: string;
            }

            namespace Payment {
                export const Amount: string;
                export const Attachments: string;
                export const ContactId: string;
                export const CreditAccountAccountHeadId: string;
                export const CreditAccountAccountNo: string;
                export const CreditAccountHeadCode: string;
                export const CreditAccountHeadDescription: string;
                export const CreditAccountHeadId: string;
                export const CreditAccountHeadLedgerType: string;
                export const CreditAccountHeadParentHeadId: string;
                export const CreditAccountHeadTenantId: string;
                export const CreditAccountId: string;
                export const CreditAccountType: string;
                export const DebitAccountAccountHeadId: string;
                export const DebitAccountAccountNo: string;
                export const DebitAccountHeadCode: string;
                export const DebitAccountHeadDescription: string;
                export const DebitAccountHeadId: string;
                export const DebitAccountHeadLedgerType: string;
                export const DebitAccountHeadParentHeadId: string;
                export const DebitAccountHeadTenantId: string;
                export const DebitAccountId: string;
                export const DebitAccountType: string;
                export const EntityId: string;
                export const EntityType: string;
                export const Id: string;
                export const PaymentMethod: string;
                export const Remarks: string;
                export const SalaryPaymentEntityId: string;
                export const TenantId: string;
                export const TrxDate: string;
                export const VNo: string;
                export const VType: string;
            }

            namespace Receipt {
                export const Amount: string;
                export const Attachments: string;
                export const ContactId: string;
                export const CreditAccountAccountHeadId: string;
                export const CreditAccountAccountNo: string;
                export const CreditAccountHeadCode: string;
                export const CreditAccountHeadDescription: string;
                export const CreditAccountHeadId: string;
                export const CreditAccountHeadLedgerType: string;
                export const CreditAccountHeadParentHeadId: string;
                export const CreditAccountHeadTenantId: string;
                export const CreditAccountId: string;
                export const CreditAccountType: string;
                export const DebitAccountAccountHeadId: string;
                export const DebitAccountAccountNo: string;
                export const DebitAccountHeadCode: string;
                export const DebitAccountHeadDescription: string;
                export const DebitAccountHeadId: string;
                export const DebitAccountHeadLedgerType: string;
                export const DebitAccountHeadParentHeadId: string;
                export const DebitAccountHeadTenantId: string;
                export const DebitAccountId: string;
                export const DebitAccountType: string;
                export const EntityId: string;
                export const EntityType: string;
                export const Id: string;
                export const PaymentMethod: string;
                export const Remarks: string;
                export const TenantId: string;
                export const TranportationEntityId: string;
                export const TrxDate: string;
                export const VNo: string;
                export const VType: string;
            }
        }

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
                export const TenantId: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Settings {
                export const Id: string;
                export const Name: string;
                export const TenantId: string;
                export const Type: string;
                export const ValueBool: string;
                export const ValueDate: string;
                export const ValueNumber: string;
                export const ValueString: string;
            }

            namespace SystemSettings {
                export const Id: string;
                export const SalaryAccount: string;
                export const SalaryAccountCode: string;
                export const SalaryAccountDescription: string;
                export const SalaryAccountLedgerType: string;
                export const SalaryAccountParentHeadId: string;
                export const SalaryAccountTenantId: string;
                export const SatffCodeLength: string;
                export const SatffCodePrefix: string;
                export const StudentCodeLength: string;
                export const StudentCodePrefix: string;
                export const TenantId: string;
            }

            namespace Tenant {
                export const TenantId: string;
                export const TenantName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DefaultCampusId: string;
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Master {

            namespace AcadamicYear {
                export const Code: string;
                export const Description: string;
                export const FeeTerms: string;
                export const Id: string;
                export const PeriodFrom: string;
                export const PeriodTo: string;
                export const TenantId: string;
            }

            namespace AccountHeads {
                export const Code: string;
                export const Description: string;
                export const Id: string;
                export const LedgerType: string;
                export const ParentHeadCode: string;
                export const ParentHeadDescription: string;
                export const ParentHeadId: string;
                export const ParentHeadParentHeadId: string;
                export const ParentHeadTenantId: string;
                export const TenantId: string;
            }

            namespace Areas {
                export const AreaName: string;
                export const Code: string;
                export const CountryCode: string;
                export const CountryCurrencyName: string;
                export const CountryId: string;
                export const CountryPrecision: string;
                export const CountryTenantId: string;
                export const Id: string;
                export const TenantId: string;
            }

            namespace Campuses {
                export const Address: string;
                export const AreaAreaName: string;
                export const AreaCode: string;
                export const AreaCountryId: string;
                export const AreaId: string;
                export const AreaTenantId: string;
                export const Campus: string;
                export const Code: string;
                export const CodeLength: string;
                export const ContactPerson: string;
                export const CountryCode: string;
                export const CountryCountryName: string;
                export const CountryCurrencyId: string;
                export const CountryId: string;
                export const CountryTenantId: string;
                export const Email: string;
                export const FullName: string;
                export const Id: string;
                export const IsDefault: string;
                export const Mobile: string;
                export const Phone: string;
                export const Student_Prefix: string;
                export const TenantId: string;
                export const Website: string;
            }

            namespace Contacts {
                export const Address1: string;
                export const Address2: string;
                export const Email: string;
                export const Id: string;
                export const Name: string;
                export const Nationality: string;
                export const NationalityCode: string;
                export const NationalityCountryName: string;
                export const NationalityCurrencyId: string;
                export const NationalityTenantId: string;
                export const Phone: string;
                export const TenantId: string;
                export const Whatsapp: string;
            }

            namespace Countries {
                export const Code: string;
                export const CountryName: string;
                export const CurrencyCode: string;
                export const CurrencyCurrencyName: string;
                export const CurrencyId: string;
                export const CurrencyPrecision: string;
                export const CurrencyTenantId: string;
                export const FullName: string;
                export const Id: string;
                export const TenantId: string;
            }

            namespace CourseDivisions {
                export const CourseActive: string;
                export const CourseCode: string;
                export const CourseCourseName: string;
                export const CourseId: string;
                export const CourseNonAcadamic: string;
                export const CourseTenantId: string;
                export const DivisionCode: string;
                export const Id: string;
            }

            namespace CourseFee {
                export const CourseActive: string;
                export const CourseCode: string;
                export const CourseCourseName: string;
                export const CourseId: string;
                export const CourseNonAcadamic: string;
                export const CourseTenantId: string;
                export const FeeAnnualFee: string;
                export const FeeCode: string;
                export const FeeFeeName: string;
                export const FeeId: string;
                export const FeeTenantId: string;
                export const Id: string;
            }

            namespace CourseSubjects {
                export const CourseActive: string;
                export const CourseCode: string;
                export const CourseCourseName: string;
                export const CourseId: string;
                export const CourseNonAcadamic: string;
                export const CourseTenantId: string;
                export const Id: string;
                export const MaxMarks: string;
                export const SubjectCode: string;
                export const SubjectId: string;
                export const SubjectSubjectName: string;
                export const SubjectTenantId: string;
            }

            namespace Courses {
                export const Active: string;
                export const Code: string;
                export const CourseDivisions: string;
                export const CourseFullName: string;
                export const CourseName: string;
                export const CourseSubject: string;
                export const Id: string;
                export const NonAcadamic: string;
                export const TenantId: string;
            }

            namespace Currencies {
                export const Code: string;
                export const CurrencyName: string;
                export const Id: string;
                export const Precision: string;
                export const TenantId: string;
            }

            namespace DivisionStudents {
                export const DivisionAcadamicYearId: string;
                export const DivisionCourseId: string;
                export const DivisionDivisionCode: string;
                export const DivisionId: string;
                export const DivisionTeacherId: string;
                export const DivisionTenantId: string;
                export const Id: string;
                export const PromotionDetailId: string;
                export const PromotionDetailIsCompleted: string;
                export const PromotionDetailPromotionId: string;
                export const PromotionDetailPromotionType: string;
                export const PromotionDetailStudentId: string;
                export const Student: string;
            }

            namespace Divisions {
                export const AcadamicYearCode: string;
                export const AcadamicYearDescription: string;
                export const AcadamicYearId: string;
                export const AcadamicYearPeriodFrom: string;
                export const AcadamicYearPeriodTo: string;
                export const AcadamicYearTenantId: string;
                export const DivisionCode: string;
                export const DivisionStudents: string;
                export const Id: string;
                export const PromotionId: string;
                export const TeacherCode: string;
                export const TeacherContactId: string;
                export const TeacherDailyWage: string;
                export const TeacherId: string;
                export const TeacherIsTeacher: string;
                export const TeacherRemarks: string;
                export const TeacherStaffName: string;
                export const TeacherTenantId: string;
                export const TenantId: string;
            }

            namespace ExamCourses {
                export const Course: string;
                export const ExamAcadamicYearId: string;
                export const ExamCode: string;
                export const ExamExamName: string;
                export const ExamId: string;
                export const ExamTenantId: string;
                export const Id: string;
                export const PromotionAcadamicYearId: string;
                export const PromotionCreatedBy: string;
                export const PromotionCreatedDate: string;
                export const PromotionFromCourse: string;
                export const PromotionId: string;
                export const PromotionJoiningDivisionId: string;
                export const PromotionTenantId: string;
                export const PromotionToCourse: string;
                export const Subjects: string;
            }

            namespace ExamMaxMarks {
                export const CourseSubject: string;
                export const CourseSubjectCourseId: string;
                export const CourseSubjectId: string;
                export const CourseSubjectMaxMarks: string;
                export const CourseSubjectSubjectId: string;
                export const ExamCoursesExamId: string;
                export const ExamCoursesId: string;
                export const ExamCoursesPromotionId: string;
                export const Id: string;
                export const MaxMark: string;
            }

            namespace Exams {
                export const AcadamicYearCode: string;
                export const AcadamicYearDescription: string;
                export const AcadamicYearId: string;
                export const AcadamicYearPeriodFrom: string;
                export const AcadamicYearPeriodTo: string;
                export const AcadamicYearTenantId: string;
                export const Code: string;
                export const Courses: string;
                export const ExamName: string;
                export const Id: string;
                export const TenantId: string;
            }

            namespace FeeExcemptions {
                export const CourseFeeId: string;
                export const CourseId: string;
                export const FeeExcempted: string;
                export const Id: string;
                export const StudentCampusId: string;
                export const StudentCode: string;
                export const StudentDivision: string;
                export const StudentFatherContactId: string;
                export const StudentId: string;
                export const StudentJoiningCourse: string;
                export const StudentJoiningDate: string;
                export const StudentMotherContactId: string;
                export const StudentOtherInstitute: string;
                export const StudentStudentContactId: string;
                export const StudentTenantId: string;
                export const TenantId: string;
            }

            namespace FeeStructure {
                export const AcadamicYearCode: string;
                export const AcadamicYearDescription: string;
                export const AcadamicYearId: string;
                export const AcadamicYearPeriodFrom: string;
                export const AcadamicYearPeriodTo: string;
                export const FeeAmount: string;
                export const FeeAnnualFee: string;
                export const FeeCode: string;
                export const FeeFeeName: string;
                export const FeeId: string;
                export const FeeTenantId: string;
                export const FeeTermId: string;
                export const FeeTermTermName: string;
                export const Id: string;
                export const TenantId: string;
            }

            namespace FeeTerms {
                export const AcadamicYearId: string;
                export const Id: string;
                export const TenantId: string;
                export const TermName: string;
            }

            namespace Fees {
                export const AnnualFee: string;
                export const Code: string;
                export const CourseFee: string;
                export const DebitAccountHeadCode: string;
                export const DebitAccountHeadDescription: string;
                export const DebitAccountHeadId: string;
                export const DebitAccountHeadLedgerType: string;
                export const DebitAccountHeadParentHeadId: string;
                export const DebitAccountHeadTenantId: string;
                export const FeeName: string;
                export const FeeStructures: string;
                export const FullName: string;
                export const Id: string;
                export const IsTranportation: string;
                export const TenantId: string;
            }

            namespace StaffSubjects {
                export const Id: string;
                export const StaffCode: string;
                export const StaffContactId: string;
                export const StaffDailyWage: string;
                export const StaffId: string;
                export const StaffIsTeacher: string;
                export const StaffRemarks: string;
                export const StaffStaffName: string;
                export const SubjectCode: string;
                export const SubjectId: string;
                export const SubjectSubjectName: string;
            }

            namespace Staffs {
                export const Code: string;
                export const ContactAddress1: string;
                export const ContactAddress2: string;
                export const ContactEmail: string;
                export const ContactId: string;
                export const ContactName: string;
                export const ContactNationality: string;
                export const ContactPhone: string;
                export const ContactWhatsapp: string;
                export const DailyWage: string;
                export const DaysCount: string;
                export const FullName: string;
                export const Id: string;
                export const IsTeacher: string;
                export const JoiningDate: string;
                export const Qualification: string;
                export const Remarks: string;
                export const SalaryAmount: string;
                export const StaffName: string;
                export const StaffSubjects: string;
                export const TenantId: string;
            }

            namespace StudentCurrentCourses {
                export const CourseActive: string;
                export const CourseCode: string;
                export const CourseCourseName: string;
                export const CourseId: string;
                export const CourseNonAcadamic: string;
                export const CourseTenantId: string;
                export const Id: string;
                export const StudentBusStop: string;
                export const StudentCampusId: string;
                export const StudentCode: string;
                export const StudentDivision: string;
                export const StudentDob: string;
                export const StudentFatherContactId: string;
                export const StudentGender: string;
                export const StudentId: string;
                export const StudentIdno: string;
                export const StudentJoiningCourse: string;
                export const StudentJoiningDate: string;
                export const StudentLandMark: string;
                export const StudentMotherContactId: string;
                export const StudentOtherInstitute: string;
                export const StudentPhoto: string;
                export const StudentRemarks: string;
                export const StudentStudentContactId: string;
                export const StudentStudentName: string;
                export const StudentTenantId: string;
            }

            namespace Students {
                export const AdmissionAcadamicYearId: string;
                export const AdmissionFeeTermId: string;
                export const BusStop: string;
                export const Campus: string;
                export const CampusAddress: string;
                export const CampusAreaId: string;
                export const CampusCode: string;
                export const CampusContactPerson: string;
                export const CampusCountryId: string;
                export const CampusEmail: string;
                export const CampusId: string;
                export const CampusMobile: string;
                export const CampusPhone: string;
                export const CampusTenantId: string;
                export const CampusWebsite: string;
                export const Code: string;
                export const CurrentCourses: string;
                export const DOB: string;
                export const Division: string;
                export const FatherContactAddress1: string;
                export const FatherContactAddress2: string;
                export const FatherContactEmail: string;
                export const FatherContactId: string;
                export const FatherContactName: string;
                export const FatherContactNationality: string;
                export const FatherContactPhone: string;
                export const FatherContactTenantId: string;
                export const FatherContactWhatsapp: string;
                export const FromAcadamicYearId: string;
                export const FromFeeTermId: string;
                export const FullName: string;
                export const Gender: string;
                export const IDNO: string;
                export const Id: string;
                export const JoiningCourse: string;
                export const JoiningCourseActive: string;
                export const JoiningCourseCode: string;
                export const JoiningCourseCourseName: string;
                export const JoiningCourseNonAcadamic: string;
                export const JoiningCourseTenantId: string;
                export const JoiningDate: string;
                export const JoiningDivisionId: string;
                export const LandMark: string;
                export const MotherContactAddress1: string;
                export const MotherContactAddress2: string;
                export const MotherContactEmail: string;
                export const MotherContactId: string;
                export const MotherContactName: string;
                export const MotherContactNationality: string;
                export const MotherContactPhone: string;
                export const MotherContactTenantId: string;
                export const MotherContactWhatsapp: string;
                export const OtherInstitute: string;
                export const Photo: string;
                export const Remarks: string;
                export const StudentContactAddress1: string;
                export const StudentContactAddress2: string;
                export const StudentContactEmail: string;
                export const StudentContactId: string;
                export const StudentContactName: string;
                export const StudentContactNationality: string;
                export const StudentContactPhone: string;
                export const StudentContactTenantId: string;
                export const StudentContactWhatsapp: string;
                export const StudentName: string;
                export const TenantId: string;
                export const TranportationFeeId: string;
            }

            namespace Subjects {
                export const Code: string;
                export const Id: string;
                export const SubjectName: string;
                export const TenantId: string;
            }
        }

        namespace Transactions {

            namespace Admission {
                export const AcadamicYearCode: string;
                export const AcadamicYearDescription: string;
                export const AcadamicYearId: string;
                export const AcadamicYearPeriodFrom: string;
                export const AcadamicYearPeriodTo: string;
                export const AcadamicYearTenantId: string;
                export const AdmissionFeeTermId: string;
                export const Id: string;
                export const JoiningCourse: string;
                export const JoiningCourseActive: string;
                export const JoiningCourseCode: string;
                export const JoiningCourseCourseName: string;
                export const JoiningCourseNonAcadamic: string;
                export const JoiningCourseTenantId: string;
                export const JoiningDate: string;
                export const JoiningDivisionCourseId: string;
                export const JoiningDivisionDivisionCode: string;
                export const JoiningDivisionId: string;
                export const SelectedFees: string;
                export const StudentBusStop: string;
                export const StudentCampusId: string;
                export const StudentCode: string;
                export const StudentDivision: string;
                export const StudentDob: string;
                export const StudentFatherContactId: string;
                export const StudentGender: string;
                export const StudentId: string;
                export const StudentIdno: string;
                export const StudentJoiningCourse: string;
                export const StudentJoiningDate: string;
                export const StudentJoiningDivisionId: string;
                export const StudentLandMark: string;
                export const StudentMotherContactId: string;
                export const StudentOtherInstitute: string;
                export const StudentPhoto: string;
                export const StudentRemarks: string;
                export const StudentStudentContactId: string;
                export const StudentStudentName: string;
                export const StudentTenantId: string;
                export const TenantId: string;
            }

            namespace Attandance {
                export const AcadamicYearCode: string;
                export const AcadamicYearDescription: string;
                export const AcadamicYearId: string;
                export const AcadamicYearPeriodFrom: string;
                export const AcadamicYearPeriodTo: string;
                export const AcadamicYearTenantId: string;
                export const Attachments: string;
                export const Date: string;
                export const Description: string;
                export const Id: string;
                export const PromotionDetailId: string;
                export const StaffCode: string;
                export const StaffContactId: string;
                export const StaffDailyWage: string;
                export const StaffId: string;
                export const StaffIsTeacher: string;
                export const StaffRemarks: string;
                export const StaffStaffName: string;
                export const StaffTenantId: string;
                export const Status: string;
                export const TenantId: string;
            }

            namespace CourseExit {
                export const AcadamicYearCode: string;
                export const AcadamicYearDescription: string;
                export const AcadamicYearId: string;
                export const AcadamicYearPeriodFrom: string;
                export const AcadamicYearPeriodTo: string;
                export const AcadamicYearTenantId: string;
                export const ExitDate: string;
                export const ExitType: string;
                export const Id: string;
                export const PromotionAcadamicYearId: string;
                export const PromotionCreatedBy: string;
                export const PromotionCreatedDate: string;
                export const PromotionFromCourse: string;
                export const PromotionId: string;
                export const PromotionJoiningDivisionId: string;
                export const PromotionTenantId: string;
                export const PromotionToCourse: string;
                export const Students: string;
                export const TenantId: string;
                export const ToCourse: string;
            }

            namespace CourseExitDetails {
                export const Attachments: string;
                export const CourseExitAcadamicYearId: string;
                export const CourseExitExitDate: string;
                export const CourseExitExitType: string;
                export const CourseExitId: string;
                export const CourseExitPromotionId: string;
                export const Id: string;
                export const PromotionDetailId: string;
                export const PromotionDetailIsCompleted: string;
                export const PromotionDetailPromotionId: string;
                export const PromotionDetailPromotionType: string;
                export const PromotionDetailStudentId: string;
                export const Student: string;
            }

            namespace FeeAllocation {
                export const Balance: string;
                export const Collected: string;
                export const CourseFeeCourseId: string;
                export const CourseFeeFeeId: string;
                export const CourseFeeId: string;
                export const FeeCode: string;
                export const FeeCollectionCourseId: string;
                export const FeeCollectionId: string;
                export const FeeCollectionPayDate: string;
                export const FeeCollectionStudentId: string;
                export const FeeCollectionTenantId: string;
                export const FeeCollectionTotalAmount: string;
                export const FeeStrctureAcadamicYearId: string;
                export const FeeStrctureFeeAmount: string;
                export const FeeStrctureFeeId: string;
                export const FeeStrctureFeeTermId: string;
                export const FeeStrctureId: string;
                export const FeeStrctureTenantId: string;
                export const Id: string;
                export const Receipts: string;
                export const TermName: string;
            }

            namespace FeeAllocationTranportation {
                export const Balance: string;
                export const Collected: string;
                export const FeeAnnualFee: string;
                export const FeeCode: string;
                export const FeeCollectionAcadamicYearId: string;
                export const FeeCollectionAccountId: string;
                export const FeeCollectionId: string;
                export const FeeCollectionPayDate: string;
                export const FeeCollectionPaymentMethod: string;
                export const FeeCollectionPromotionDetailId: string;
                export const FeeCollectionStudentId: string;
                export const FeeCollectionTenantId: string;
                export const FeeCollectionTotalAmount: string;
                export const FeeDebitAccountHeadId: string;
                export const FeeFeeName: string;
                export const FeeId: string;
                export const FeeIsTranportation: string;
                export const FeeStrctureAcadamicYearId: string;
                export const FeeStrctureFeeAmount: string;
                export const FeeStrctureFeeId: string;
                export const FeeStrctureFeeTermId: string;
                export const FeeStrctureId: string;
                export const FeeStrctureTenantId: string;
                export const FeeTenantId: string;
                export const Id: string;
                export const Receipts: string;
                export const TermName: string;
            }

            namespace FeeCollection {
                export const AcadamicYearId: string;
                export const AccountId: string;
                export const CreditAccountAccountHeadId: string;
                export const CreditAccountAccountNo: string;
                export const CreditAccountType: string;
                export const FeeAllocations: string;
                export const Id: string;
                export const PayDate: string;
                export const PaymentMethod: string;
                export const PromotionDetailId: string;
                export const StudentCampusId: string;
                export const StudentCode: string;
                export const StudentDivision: string;
                export const StudentFatherContactId: string;
                export const StudentFullName: string;
                export const StudentId: string;
                export const StudentJoiningCourse: string;
                export const StudentJoiningDate: string;
                export const StudentMotherContactId: string;
                export const StudentOtherInstitute: string;
                export const StudentStudentContactId: string;
                export const StudentTenantId: string;
                export const TenantId: string;
                export const TotalAmount: string;
                export const TranportationFee: string;
            }

            namespace PromotionDetails {
                export const Course: string;
                export const Id: string;
                export const IsCompleted: string;
                export const PromotionAcadamicYearId: string;
                export const PromotionCreatedBy: string;
                export const PromotionCreatedDate: string;
                export const PromotionFromCourse: string;
                export const PromotionId: string;
                export const PromotionTenantId: string;
                export const PromotionToCourse: string;
                export const PromotionType: string;
                export const StudentCampusId: string;
                export const StudentCode: string;
                export const StudentDivision: string;
                export const StudentFatherContactId: string;
                export const StudentId: string;
                export const StudentJoiningCourse: string;
                export const StudentJoiningDate: string;
                export const StudentMotherContactId: string;
                export const StudentName: string;
                export const StudentOtherInstitute: string;
                export const StudentStudentContactId: string;
                export const StudentTenantId: string;
            }

            namespace PromotionDetailsLookup {
                export const Course: string;
                export const Id: string;
                export const IsCompleted: string;
                export const PromotionAcadamicYearId: string;
                export const PromotionCreatedBy: string;
                export const PromotionCreatedDate: string;
                export const PromotionFromCourse: string;
                export const PromotionId: string;
                export const PromotionTenantId: string;
                export const PromotionToCourse: string;
                export const PromotionType: string;
                export const StudentCampusId: string;
                export const StudentCode: string;
                export const StudentDivision: string;
                export const StudentFatherContactId: string;
                export const StudentId: string;
                export const StudentJoiningCourse: string;
                export const StudentJoiningDate: string;
                export const StudentMotherContactId: string;
                export const StudentName: string;
                export const StudentOtherInstitute: string;
                export const StudentStudentContactId: string;
                export const StudentTenantId: string;
            }

            namespace Promotions {
                export const AcadamicYearCode: string;
                export const AcadamicYearDescription: string;
                export const AcadamicYearId: string;
                export const AcadamicYearPeriodFrom: string;
                export const AcadamicYearPeriodTo: string;
                export const AcadamicYearTenantId: string;
                export const CreatedBy: string;
                export const CreatedByCode: string;
                export const CreatedByContactId: string;
                export const CreatedByDailyWage: string;
                export const CreatedByIsTeacher: string;
                export const CreatedByRemarks: string;
                export const CreatedByStaffName: string;
                export const CreatedByTenantId: string;
                export const CreatedDate: string;
                export const FromCourse: string;
                export const FromCourseActive: string;
                export const FromCourseCode: string;
                export const FromCourseCourseName: string;
                export const FromCourseNonAcadamic: string;
                export const FromCourseTenantId: string;
                export const Id: string;
                export const PromotionDetail: string;
                export const PromotionDivisions: string;
                export const TenantId: string;
                export const ToCourse: string;
                export const ToCourseActive: string;
                export const ToCourseCode: string;
                export const ToCourseCourseName: string;
                export const ToCourseNonAcadamic: string;
                export const ToCourseTenantId: string;
            }

            namespace SalaryPayments {
                export const CreditAccountAccountHeadId: string;
                export const CreditAccountAccountNo: string;
                export const CreditAccountId: string;
                export const CreditAccountIsDefault: string;
                export const CreditAccountTenantId: string;
                export const CreditAccountType: string;
                export const Id: string;
                export const PaidAmount: string;
                export const PaidDate: string;
                export const PayableSalaryAmount: string;
                export const Payment: string;
                export const PaymentMethod: string;
                export const SalaryAmount: string;
                export const SalaryStructureCreatedBy: string;
                export const SalaryStructureCreatedDate: string;
                export const SalaryStructureFromDate: string;
                export const SalaryStructureId: string;
                export const SalaryStructureTenantId: string;
                export const SalaryStructureToDate: string;
                export const StaffCode: string;
                export const StaffContactId: string;
                export const StaffDailyWage: string;
                export const StaffDaysCount: string;
                export const StaffId: string;
                export const StaffIsTeacher: string;
                export const StaffJoiningDate: string;
                export const StaffQualification: string;
                export const StaffRemarks: string;
                export const StaffSalaryAmount: string;
                export const StaffStaffName: string;
                export const StaffTenantId: string;
                export const TotalAbsent: string;
                export const TotalPresent: string;
            }

            namespace SalaryStructure {
                export const CreatedBy: string;
                export const CreatedByCode: string;
                export const CreatedByContactId: string;
                export const CreatedByDailyWage: string;
                export const CreatedByDaysCount: string;
                export const CreatedByIsTeacher: string;
                export const CreatedByJoiningDate: string;
                export const CreatedByQualification: string;
                export const CreatedByRemarks: string;
                export const CreatedBySalaryAmount: string;
                export const CreatedByStaffName: string;
                export const CreatedByTenantId: string;
                export const CreatedDate: string;
                export const FromDate: string;
                export const Id: string;
                export const SalaryPayments: string;
                export const TenantId: string;
                export const ToDate: string;
            }

            namespace StudentMarks {
                export const AcadamicYearCode: string;
                export const AcadamicYearDescription: string;
                export const AcadamicYearId: string;
                export const AcadamicYearPeriodFrom: string;
                export const AcadamicYearPeriodTo: string;
                export const AcadamicYearTenantId: string;
                export const ExamAcadamicYearId: string;
                export const ExamCode: string;
                export const ExamDate: string;
                export const ExamExamName: string;
                export const ExamId: string;
                export const ExamTenantId: string;
                export const Id: string;
                export const PromotionAcadamicYearId: string;
                export const PromotionCreatedBy: string;
                export const PromotionCreatedDate: string;
                export const PromotionFromCourse: string;
                export const PromotionId: string;
                export const PromotionJoiningDivisionId: string;
                export const PromotionTenantId: string;
                export const PromotionToCourse: string;
                export const Subjects: string;
                export const TenantId: string;
            }

            namespace StudentMarksDetails {
                export const Description: string;
                export const Id: string;
                export const Mark: string;
                export const PromotionDetailId: string;
                export const PromotionDetailIsCompleted: string;
                export const PromotionDetailPromotionId: string;
                export const PromotionDetailPromotionType: string;
                export const PromotionDetailStudentId: string;
                export const Student: string;
                export const StudentMarksSubjectsCourseSubjectId: string;
                export const StudentMarksSubjectsId: string;
                export const StudentMarksSubjectsStudentMarksId: string;
            }

            namespace StudentMarksSubjects {
                export const CourseSubject: string;
                export const CourseSubjectCourseId: string;
                export const CourseSubjectId: string;
                export const CourseSubjectMaxMarks: string;
                export const CourseSubjectSubjectId: string;
                export const Id: string;
                export const StudentMarksAcadamicYearId: string;
                export const StudentMarksDetails: string;
                export const StudentMarksExamDate: string;
                export const StudentMarksExamId: string;
                export const StudentMarksId: string;
                export const StudentMarksPromotionId: string;
            }

            namespace Transport {
                export const Address: string;
                export const Code: string;
                export const Id: string;
                export const Name: string;
                export const TenantId: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    BitPro.SchoolMate['Texts'] = Q.proxyTexts(Texts, '', {Db:{Accounts:{Accounts:{AccountHeadCode:1,AccountHeadDescription:1,AccountHeadId:1,AccountHeadLedgerType:1,AccountHeadParentHeadId:1,AccountHeadTenantId:1,AccountNo:1,Id:1,IsDefault:1,TenantId:1,Type:1},Contra:{Amount:1,Attachments:1,ContactId:1,CreditAccountAccountHeadId:1,CreditAccountAccountNo:1,CreditAccountHeadCode:1,CreditAccountHeadDescription:1,CreditAccountHeadId:1,CreditAccountHeadLedgerType:1,CreditAccountHeadParentHeadId:1,CreditAccountHeadTenantId:1,CreditAccountId:1,CreditAccountType:1,DebitAccountAccountHeadId:1,DebitAccountAccountNo:1,DebitAccountHeadCode:1,DebitAccountHeadDescription:1,DebitAccountHeadId:1,DebitAccountHeadLedgerType:1,DebitAccountHeadParentHeadId:1,DebitAccountHeadTenantId:1,DebitAccountId:1,DebitAccountType:1,EntityId:1,EntityType:1,Id:1,PaymentMethod:1,Remarks:1,TenantId:1,TrxDate:1,VNo:1,VType:1},Payment:{Amount:1,Attachments:1,ContactId:1,CreditAccountAccountHeadId:1,CreditAccountAccountNo:1,CreditAccountHeadCode:1,CreditAccountHeadDescription:1,CreditAccountHeadId:1,CreditAccountHeadLedgerType:1,CreditAccountHeadParentHeadId:1,CreditAccountHeadTenantId:1,CreditAccountId:1,CreditAccountType:1,DebitAccountAccountHeadId:1,DebitAccountAccountNo:1,DebitAccountHeadCode:1,DebitAccountHeadDescription:1,DebitAccountHeadId:1,DebitAccountHeadLedgerType:1,DebitAccountHeadParentHeadId:1,DebitAccountHeadTenantId:1,DebitAccountId:1,DebitAccountType:1,EntityId:1,EntityType:1,Id:1,PaymentMethod:1,Remarks:1,SalaryPaymentEntityId:1,TenantId:1,TrxDate:1,VNo:1,VType:1},Receipt:{Amount:1,Attachments:1,ContactId:1,CreditAccountAccountHeadId:1,CreditAccountAccountNo:1,CreditAccountHeadCode:1,CreditAccountHeadDescription:1,CreditAccountHeadId:1,CreditAccountHeadLedgerType:1,CreditAccountHeadParentHeadId:1,CreditAccountHeadTenantId:1,CreditAccountId:1,CreditAccountType:1,DebitAccountAccountHeadId:1,DebitAccountAccountNo:1,DebitAccountHeadCode:1,DebitAccountHeadDescription:1,DebitAccountHeadId:1,DebitAccountHeadLedgerType:1,DebitAccountHeadParentHeadId:1,DebitAccountHeadTenantId:1,DebitAccountId:1,DebitAccountType:1,EntityId:1,EntityType:1,Id:1,PaymentMethod:1,Remarks:1,TenantId:1,TranportationEntityId:1,TrxDate:1,VNo:1,VType:1}},Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1,TenantId:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Settings:{Id:1,Name:1,TenantId:1,Type:1,ValueBool:1,ValueDate:1,ValueNumber:1,ValueString:1},SystemSettings:{Id:1,SalaryAccount:1,SalaryAccountCode:1,SalaryAccountDescription:1,SalaryAccountLedgerType:1,SalaryAccountParentHeadId:1,SalaryAccountTenantId:1,SatffCodeLength:1,SatffCodePrefix:1,StudentCodeLength:1,StudentCodePrefix:1,TenantId:1},Tenant:{TenantId:1,TenantName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DefaultCampusId:1,DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Master:{AcadamicYear:{Code:1,Description:1,FeeTerms:1,Id:1,PeriodFrom:1,PeriodTo:1,TenantId:1},AccountHeads:{Code:1,Description:1,Id:1,LedgerType:1,ParentHeadCode:1,ParentHeadDescription:1,ParentHeadId:1,ParentHeadParentHeadId:1,ParentHeadTenantId:1,TenantId:1},Areas:{AreaName:1,Code:1,CountryCode:1,CountryCurrencyName:1,CountryId:1,CountryPrecision:1,CountryTenantId:1,Id:1,TenantId:1},Campuses:{Address:1,AreaAreaName:1,AreaCode:1,AreaCountryId:1,AreaId:1,AreaTenantId:1,Campus:1,Code:1,CodeLength:1,ContactPerson:1,CountryCode:1,CountryCountryName:1,CountryCurrencyId:1,CountryId:1,CountryTenantId:1,Email:1,FullName:1,Id:1,IsDefault:1,Mobile:1,Phone:1,Student_Prefix:1,TenantId:1,Website:1},Contacts:{Address1:1,Address2:1,Email:1,Id:1,Name:1,Nationality:1,NationalityCode:1,NationalityCountryName:1,NationalityCurrencyId:1,NationalityTenantId:1,Phone:1,TenantId:1,Whatsapp:1},Countries:{Code:1,CountryName:1,CurrencyCode:1,CurrencyCurrencyName:1,CurrencyId:1,CurrencyPrecision:1,CurrencyTenantId:1,FullName:1,Id:1,TenantId:1},CourseDivisions:{CourseActive:1,CourseCode:1,CourseCourseName:1,CourseId:1,CourseNonAcadamic:1,CourseTenantId:1,DivisionCode:1,Id:1},CourseFee:{CourseActive:1,CourseCode:1,CourseCourseName:1,CourseId:1,CourseNonAcadamic:1,CourseTenantId:1,FeeAnnualFee:1,FeeCode:1,FeeFeeName:1,FeeId:1,FeeTenantId:1,Id:1},CourseSubjects:{CourseActive:1,CourseCode:1,CourseCourseName:1,CourseId:1,CourseNonAcadamic:1,CourseTenantId:1,Id:1,MaxMarks:1,SubjectCode:1,SubjectId:1,SubjectSubjectName:1,SubjectTenantId:1},Courses:{Active:1,Code:1,CourseDivisions:1,CourseFullName:1,CourseName:1,CourseSubject:1,Id:1,NonAcadamic:1,TenantId:1},Currencies:{Code:1,CurrencyName:1,Id:1,Precision:1,TenantId:1},DivisionStudents:{DivisionAcadamicYearId:1,DivisionCourseId:1,DivisionDivisionCode:1,DivisionId:1,DivisionTeacherId:1,DivisionTenantId:1,Id:1,PromotionDetailId:1,PromotionDetailIsCompleted:1,PromotionDetailPromotionId:1,PromotionDetailPromotionType:1,PromotionDetailStudentId:1,Student:1},Divisions:{AcadamicYearCode:1,AcadamicYearDescription:1,AcadamicYearId:1,AcadamicYearPeriodFrom:1,AcadamicYearPeriodTo:1,AcadamicYearTenantId:1,DivisionCode:1,DivisionStudents:1,Id:1,PromotionId:1,TeacherCode:1,TeacherContactId:1,TeacherDailyWage:1,TeacherId:1,TeacherIsTeacher:1,TeacherRemarks:1,TeacherStaffName:1,TeacherTenantId:1,TenantId:1},ExamCourses:{Course:1,ExamAcadamicYearId:1,ExamCode:1,ExamExamName:1,ExamId:1,ExamTenantId:1,Id:1,PromotionAcadamicYearId:1,PromotionCreatedBy:1,PromotionCreatedDate:1,PromotionFromCourse:1,PromotionId:1,PromotionJoiningDivisionId:1,PromotionTenantId:1,PromotionToCourse:1,Subjects:1},ExamMaxMarks:{CourseSubject:1,CourseSubjectCourseId:1,CourseSubjectId:1,CourseSubjectMaxMarks:1,CourseSubjectSubjectId:1,ExamCoursesExamId:1,ExamCoursesId:1,ExamCoursesPromotionId:1,Id:1,MaxMark:1},Exams:{AcadamicYearCode:1,AcadamicYearDescription:1,AcadamicYearId:1,AcadamicYearPeriodFrom:1,AcadamicYearPeriodTo:1,AcadamicYearTenantId:1,Code:1,Courses:1,ExamName:1,Id:1,TenantId:1},FeeExcemptions:{CourseFeeId:1,CourseId:1,FeeExcempted:1,Id:1,StudentCampusId:1,StudentCode:1,StudentDivision:1,StudentFatherContactId:1,StudentId:1,StudentJoiningCourse:1,StudentJoiningDate:1,StudentMotherContactId:1,StudentOtherInstitute:1,StudentStudentContactId:1,StudentTenantId:1,TenantId:1},FeeStructure:{AcadamicYearCode:1,AcadamicYearDescription:1,AcadamicYearId:1,AcadamicYearPeriodFrom:1,AcadamicYearPeriodTo:1,FeeAmount:1,FeeAnnualFee:1,FeeCode:1,FeeFeeName:1,FeeId:1,FeeTenantId:1,FeeTermId:1,FeeTermTermName:1,Id:1,TenantId:1},FeeTerms:{AcadamicYearId:1,Id:1,TenantId:1,TermName:1},Fees:{AnnualFee:1,Code:1,CourseFee:1,DebitAccountHeadCode:1,DebitAccountHeadDescription:1,DebitAccountHeadId:1,DebitAccountHeadLedgerType:1,DebitAccountHeadParentHeadId:1,DebitAccountHeadTenantId:1,FeeName:1,FeeStructures:1,FullName:1,Id:1,IsTranportation:1,TenantId:1},StaffSubjects:{Id:1,StaffCode:1,StaffContactId:1,StaffDailyWage:1,StaffId:1,StaffIsTeacher:1,StaffRemarks:1,StaffStaffName:1,SubjectCode:1,SubjectId:1,SubjectSubjectName:1},Staffs:{Code:1,ContactAddress1:1,ContactAddress2:1,ContactEmail:1,ContactId:1,ContactName:1,ContactNationality:1,ContactPhone:1,ContactWhatsapp:1,DailyWage:1,DaysCount:1,FullName:1,Id:1,IsTeacher:1,JoiningDate:1,Qualification:1,Remarks:1,SalaryAmount:1,StaffName:1,StaffSubjects:1,TenantId:1},StudentCurrentCourses:{CourseActive:1,CourseCode:1,CourseCourseName:1,CourseId:1,CourseNonAcadamic:1,CourseTenantId:1,Id:1,StudentBusStop:1,StudentCampusId:1,StudentCode:1,StudentDivision:1,StudentDob:1,StudentFatherContactId:1,StudentGender:1,StudentId:1,StudentIdno:1,StudentJoiningCourse:1,StudentJoiningDate:1,StudentLandMark:1,StudentMotherContactId:1,StudentOtherInstitute:1,StudentPhoto:1,StudentRemarks:1,StudentStudentContactId:1,StudentStudentName:1,StudentTenantId:1},Students:{AdmissionAcadamicYearId:1,AdmissionFeeTermId:1,BusStop:1,Campus:1,CampusAddress:1,CampusAreaId:1,CampusCode:1,CampusContactPerson:1,CampusCountryId:1,CampusEmail:1,CampusId:1,CampusMobile:1,CampusPhone:1,CampusTenantId:1,CampusWebsite:1,Code:1,CurrentCourses:1,DOB:1,Division:1,FatherContactAddress1:1,FatherContactAddress2:1,FatherContactEmail:1,FatherContactId:1,FatherContactName:1,FatherContactNationality:1,FatherContactPhone:1,FatherContactTenantId:1,FatherContactWhatsapp:1,FromAcadamicYearId:1,FromFeeTermId:1,FullName:1,Gender:1,IDNO:1,Id:1,JoiningCourse:1,JoiningCourseActive:1,JoiningCourseCode:1,JoiningCourseCourseName:1,JoiningCourseNonAcadamic:1,JoiningCourseTenantId:1,JoiningDate:1,JoiningDivisionId:1,LandMark:1,MotherContactAddress1:1,MotherContactAddress2:1,MotherContactEmail:1,MotherContactId:1,MotherContactName:1,MotherContactNationality:1,MotherContactPhone:1,MotherContactTenantId:1,MotherContactWhatsapp:1,OtherInstitute:1,Photo:1,Remarks:1,StudentContactAddress1:1,StudentContactAddress2:1,StudentContactEmail:1,StudentContactId:1,StudentContactName:1,StudentContactNationality:1,StudentContactPhone:1,StudentContactTenantId:1,StudentContactWhatsapp:1,StudentName:1,TenantId:1,TranportationFeeId:1},Subjects:{Code:1,Id:1,SubjectName:1,TenantId:1}},Transactions:{Admission:{AcadamicYearCode:1,AcadamicYearDescription:1,AcadamicYearId:1,AcadamicYearPeriodFrom:1,AcadamicYearPeriodTo:1,AcadamicYearTenantId:1,AdmissionFeeTermId:1,Id:1,JoiningCourse:1,JoiningCourseActive:1,JoiningCourseCode:1,JoiningCourseCourseName:1,JoiningCourseNonAcadamic:1,JoiningCourseTenantId:1,JoiningDate:1,JoiningDivisionCourseId:1,JoiningDivisionDivisionCode:1,JoiningDivisionId:1,SelectedFees:1,StudentBusStop:1,StudentCampusId:1,StudentCode:1,StudentDivision:1,StudentDob:1,StudentFatherContactId:1,StudentGender:1,StudentId:1,StudentIdno:1,StudentJoiningCourse:1,StudentJoiningDate:1,StudentJoiningDivisionId:1,StudentLandMark:1,StudentMotherContactId:1,StudentOtherInstitute:1,StudentPhoto:1,StudentRemarks:1,StudentStudentContactId:1,StudentStudentName:1,StudentTenantId:1,TenantId:1},Attandance:{AcadamicYearCode:1,AcadamicYearDescription:1,AcadamicYearId:1,AcadamicYearPeriodFrom:1,AcadamicYearPeriodTo:1,AcadamicYearTenantId:1,Attachments:1,Date:1,Description:1,Id:1,PromotionDetailId:1,StaffCode:1,StaffContactId:1,StaffDailyWage:1,StaffId:1,StaffIsTeacher:1,StaffRemarks:1,StaffStaffName:1,StaffTenantId:1,Status:1,TenantId:1},CourseExit:{AcadamicYearCode:1,AcadamicYearDescription:1,AcadamicYearId:1,AcadamicYearPeriodFrom:1,AcadamicYearPeriodTo:1,AcadamicYearTenantId:1,ExitDate:1,ExitType:1,Id:1,PromotionAcadamicYearId:1,PromotionCreatedBy:1,PromotionCreatedDate:1,PromotionFromCourse:1,PromotionId:1,PromotionJoiningDivisionId:1,PromotionTenantId:1,PromotionToCourse:1,Students:1,TenantId:1,ToCourse:1},CourseExitDetails:{Attachments:1,CourseExitAcadamicYearId:1,CourseExitExitDate:1,CourseExitExitType:1,CourseExitId:1,CourseExitPromotionId:1,Id:1,PromotionDetailId:1,PromotionDetailIsCompleted:1,PromotionDetailPromotionId:1,PromotionDetailPromotionType:1,PromotionDetailStudentId:1,Student:1},FeeAllocation:{Balance:1,Collected:1,CourseFeeCourseId:1,CourseFeeFeeId:1,CourseFeeId:1,FeeCode:1,FeeCollectionCourseId:1,FeeCollectionId:1,FeeCollectionPayDate:1,FeeCollectionStudentId:1,FeeCollectionTenantId:1,FeeCollectionTotalAmount:1,FeeStrctureAcadamicYearId:1,FeeStrctureFeeAmount:1,FeeStrctureFeeId:1,FeeStrctureFeeTermId:1,FeeStrctureId:1,FeeStrctureTenantId:1,Id:1,Receipts:1,TermName:1},FeeAllocationTranportation:{Balance:1,Collected:1,FeeAnnualFee:1,FeeCode:1,FeeCollectionAcadamicYearId:1,FeeCollectionAccountId:1,FeeCollectionId:1,FeeCollectionPayDate:1,FeeCollectionPaymentMethod:1,FeeCollectionPromotionDetailId:1,FeeCollectionStudentId:1,FeeCollectionTenantId:1,FeeCollectionTotalAmount:1,FeeDebitAccountHeadId:1,FeeFeeName:1,FeeId:1,FeeIsTranportation:1,FeeStrctureAcadamicYearId:1,FeeStrctureFeeAmount:1,FeeStrctureFeeId:1,FeeStrctureFeeTermId:1,FeeStrctureId:1,FeeStrctureTenantId:1,FeeTenantId:1,Id:1,Receipts:1,TermName:1},FeeCollection:{AcadamicYearId:1,AccountId:1,CreditAccountAccountHeadId:1,CreditAccountAccountNo:1,CreditAccountType:1,FeeAllocations:1,Id:1,PayDate:1,PaymentMethod:1,PromotionDetailId:1,StudentCampusId:1,StudentCode:1,StudentDivision:1,StudentFatherContactId:1,StudentFullName:1,StudentId:1,StudentJoiningCourse:1,StudentJoiningDate:1,StudentMotherContactId:1,StudentOtherInstitute:1,StudentStudentContactId:1,StudentTenantId:1,TenantId:1,TotalAmount:1,TranportationFee:1},PromotionDetails:{Course:1,Id:1,IsCompleted:1,PromotionAcadamicYearId:1,PromotionCreatedBy:1,PromotionCreatedDate:1,PromotionFromCourse:1,PromotionId:1,PromotionTenantId:1,PromotionToCourse:1,PromotionType:1,StudentCampusId:1,StudentCode:1,StudentDivision:1,StudentFatherContactId:1,StudentId:1,StudentJoiningCourse:1,StudentJoiningDate:1,StudentMotherContactId:1,StudentName:1,StudentOtherInstitute:1,StudentStudentContactId:1,StudentTenantId:1},PromotionDetailsLookup:{Course:1,Id:1,IsCompleted:1,PromotionAcadamicYearId:1,PromotionCreatedBy:1,PromotionCreatedDate:1,PromotionFromCourse:1,PromotionId:1,PromotionTenantId:1,PromotionToCourse:1,PromotionType:1,StudentCampusId:1,StudentCode:1,StudentDivision:1,StudentFatherContactId:1,StudentId:1,StudentJoiningCourse:1,StudentJoiningDate:1,StudentMotherContactId:1,StudentName:1,StudentOtherInstitute:1,StudentStudentContactId:1,StudentTenantId:1},Promotions:{AcadamicYearCode:1,AcadamicYearDescription:1,AcadamicYearId:1,AcadamicYearPeriodFrom:1,AcadamicYearPeriodTo:1,AcadamicYearTenantId:1,CreatedBy:1,CreatedByCode:1,CreatedByContactId:1,CreatedByDailyWage:1,CreatedByIsTeacher:1,CreatedByRemarks:1,CreatedByStaffName:1,CreatedByTenantId:1,CreatedDate:1,FromCourse:1,FromCourseActive:1,FromCourseCode:1,FromCourseCourseName:1,FromCourseNonAcadamic:1,FromCourseTenantId:1,Id:1,PromotionDetail:1,PromotionDivisions:1,TenantId:1,ToCourse:1,ToCourseActive:1,ToCourseCode:1,ToCourseCourseName:1,ToCourseNonAcadamic:1,ToCourseTenantId:1},SalaryPayments:{CreditAccountAccountHeadId:1,CreditAccountAccountNo:1,CreditAccountId:1,CreditAccountIsDefault:1,CreditAccountTenantId:1,CreditAccountType:1,Id:1,PaidAmount:1,PaidDate:1,PayableSalaryAmount:1,Payment:1,PaymentMethod:1,SalaryAmount:1,SalaryStructureCreatedBy:1,SalaryStructureCreatedDate:1,SalaryStructureFromDate:1,SalaryStructureId:1,SalaryStructureTenantId:1,SalaryStructureToDate:1,StaffCode:1,StaffContactId:1,StaffDailyWage:1,StaffDaysCount:1,StaffId:1,StaffIsTeacher:1,StaffJoiningDate:1,StaffQualification:1,StaffRemarks:1,StaffSalaryAmount:1,StaffStaffName:1,StaffTenantId:1,TotalAbsent:1,TotalPresent:1},SalaryStructure:{CreatedBy:1,CreatedByCode:1,CreatedByContactId:1,CreatedByDailyWage:1,CreatedByDaysCount:1,CreatedByIsTeacher:1,CreatedByJoiningDate:1,CreatedByQualification:1,CreatedByRemarks:1,CreatedBySalaryAmount:1,CreatedByStaffName:1,CreatedByTenantId:1,CreatedDate:1,FromDate:1,Id:1,SalaryPayments:1,TenantId:1,ToDate:1},StudentMarks:{AcadamicYearCode:1,AcadamicYearDescription:1,AcadamicYearId:1,AcadamicYearPeriodFrom:1,AcadamicYearPeriodTo:1,AcadamicYearTenantId:1,ExamAcadamicYearId:1,ExamCode:1,ExamDate:1,ExamExamName:1,ExamId:1,ExamTenantId:1,Id:1,PromotionAcadamicYearId:1,PromotionCreatedBy:1,PromotionCreatedDate:1,PromotionFromCourse:1,PromotionId:1,PromotionJoiningDivisionId:1,PromotionTenantId:1,PromotionToCourse:1,Subjects:1,TenantId:1},StudentMarksDetails:{Description:1,Id:1,Mark:1,PromotionDetailId:1,PromotionDetailIsCompleted:1,PromotionDetailPromotionId:1,PromotionDetailPromotionType:1,PromotionDetailStudentId:1,Student:1,StudentMarksSubjectsCourseSubjectId:1,StudentMarksSubjectsId:1,StudentMarksSubjectsStudentMarksId:1},StudentMarksSubjects:{CourseSubject:1,CourseSubjectCourseId:1,CourseSubjectId:1,CourseSubjectMaxMarks:1,CourseSubjectSubjectId:1,Id:1,StudentMarksAcadamicYearId:1,StudentMarksDetails:1,StudentMarksExamDate:1,StudentMarksExamId:1,StudentMarksId:1,StudentMarksPromotionId:1},Transport:{Address:1,Code:1,Id:1,Name:1,TenantId:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
