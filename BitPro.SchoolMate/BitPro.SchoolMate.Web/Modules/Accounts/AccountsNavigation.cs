using Serenity.Navigation;
using MyPages = BitPro.SchoolMate.Accounts.Pages;

[assembly: NavigationMenu(int.MaxValue, "Accounts",  icon: "fa fa-money")]
[assembly: NavigationLink(int.MaxValue, "Accounts/Accounts", typeof(MyPages.AccountsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Accounts/Receipt", typeof(MyPages.ReceiptController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Accounts/Payment", typeof(MyPages.PaymentController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Accounts/Contra", typeof(MyPages.ContraController), icon: null)]