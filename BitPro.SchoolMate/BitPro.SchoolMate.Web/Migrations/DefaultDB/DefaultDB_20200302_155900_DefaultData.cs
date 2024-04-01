﻿using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200302155900)]
    public class DefaultDB_20200302_155900_DefaultData
        : AutoReversingMigration
    {
        public override void Up()
        {


            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "AED", CurrencyName = "Dirham", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "AFN", CurrencyName = "Afghani", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XCD", CurrencyName = "East Caribbean Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XCD", CurrencyName = "East Caribbean Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "ALL", CurrencyName = "Lek", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "AMD", CurrencyName = "Dram", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "AOA", CurrencyName = "Angolan kwanza", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "AQD", CurrencyName = "Antarctican dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "ARS", CurrencyName = "Peso", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "AUD", CurrencyName = "Australian Dollars", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "ANG", CurrencyName = "Netherlands Antilles Guilder", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euro", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "AZN", CurrencyName = "Manat", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "BAM", CurrencyName = "Bosnia and Herzegovina convertible mark", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "BBD", CurrencyName = "Barbadian Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "BDT", CurrencyName = "Taka", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XOF", CurrencyName = "CFA Franc BCEAO", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "BGN", CurrencyName = "Lev", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "BHD", CurrencyName = "Bahraini Dinar", Precision = 3 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "BIF", CurrencyName = "Burundi Franc", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XOF", CurrencyName = "CFA Franc BCEAO", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euro", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "BMD", CurrencyName = "Bermudian Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "BND", CurrencyName = "Bruneian Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "BOB", CurrencyName = "Boliviano", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "BRL", CurrencyName = "Brazil", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "BSD", CurrencyName = "Bahamian Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "INR", CurrencyName = "Indian Rupee", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "NOK", CurrencyName = "Norwegian Krone", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "BWP", CurrencyName = "Pula", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "BYR", CurrencyName = "Belarus Ruble", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "BZD", CurrencyName = "Belizean Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "CAD", CurrencyName = "Canadian Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "AUD", CurrencyName = "Australian Dollars", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "CDF", CurrencyName = "Congolese Frank", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XAF", CurrencyName = "CFA Franc BEAC", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XAF", CurrencyName = "CFA Franc BEAC", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "CHF", CurrencyName = "Swiss Franc", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XOF", CurrencyName = "CFA Franc BCEAO", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "NZD", CurrencyName = "New Zealand Dollars", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "CLP", CurrencyName = "Chilean Peso", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XAF", CurrencyName = "CFA Franc BEAC", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "CNY", CurrencyName = "Yuan Renminbi", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "COP", CurrencyName = "Peso", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "CRC", CurrencyName = "Costa Rican Colon", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "CUP", CurrencyName = "Cuban Peso", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "CVE", CurrencyName = "Escudo", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "AUD", CurrencyName = "Australian Dollars", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "CYP", CurrencyName = "Cypriot Pound", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "CZK", CurrencyName = "Koruna", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "DJF", CurrencyName = "Djiboutian Franc", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "DKK", CurrencyName = "Danish Krone", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XCD", CurrencyName = "East Caribbean Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "DOP", CurrencyName = "Dominican Peso", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "DZD", CurrencyName = "Algerian Dinar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "ECS", CurrencyName = "Sucre", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EEK", CurrencyName = "Estonian Kroon", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EGP", CurrencyName = "Egyptian Pound", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MAD", CurrencyName = "Dirham", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "ETB", CurrencyName = "Ethiopian Birr", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "ETB", CurrencyName = "Ethiopian Birr", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "FJD", CurrencyName = "Fijian Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "FKP", CurrencyName = "Falkland Pound", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "USD", CurrencyName = "USD", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "DKK", CurrencyName = "Danish Krone", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XAF", CurrencyName = "CFA Franc BEAC", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "GBP", CurrencyName = "Sterling", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XCD", CurrencyName = "East Caribbean Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "GEL", CurrencyName = "Lari", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "GGP", CurrencyName = "Guernsey pound", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "GHS", CurrencyName = "Ghana cedi", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "GIP", CurrencyName = "Gibraltar Pound", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "DKK", CurrencyName = "Danish Krone", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "GMD", CurrencyName = "Dalasi", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "GNF", CurrencyName = "Guinean Franc", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XAF", CurrencyName = "CFA Franc BEAC", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "GBP", CurrencyName = "Sterling", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "GTQ", CurrencyName = "Quetzal", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "USD", CurrencyName = "USD", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XOF", CurrencyName = "CFA Franc BCEAO", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "GYD", CurrencyName = "Guyanaese Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "HKD", CurrencyName = "HKD", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "AUD", CurrencyName = "Australian Dollars", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "HNL", CurrencyName = "Lempira", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "HRK", CurrencyName = "Croatian Dinar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "HTG", CurrencyName = "Gourde", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "HUF", CurrencyName = "Forint", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "IDR", CurrencyName = "Indonesian Rupiah", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "ILS", CurrencyName = "Shekel", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "GBP", CurrencyName = "Manx pound", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "INR", CurrencyName = "Indian Rupee", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "USD", CurrencyName = "USD", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "IQD", CurrencyName = "Iraqi Dinar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "IRR", CurrencyName = "Iranian Rial", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "ISK", CurrencyName = "Icelandic Krona", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "GBP", CurrencyName = "Sterling", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "JMD", CurrencyName = "Jamaican Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "JOD", CurrencyName = "Jordanian Dinar", Precision = 3 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "JPY", CurrencyName = "Japanese Yen", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "KES", CurrencyName = "Kenyan Shilling", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "KGS", CurrencyName = "Som", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "KHR", CurrencyName = "Riel", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "AUD", CurrencyName = "Australian Dollars", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "KMF", CurrencyName = "Comoran Franc", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XCD", CurrencyName = "East Caribbean Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "KPW", CurrencyName = "Won", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "KRW", CurrencyName = "Won", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "KWD", CurrencyName = "Kuwaiti Dinar", Precision = 3 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "KYD", CurrencyName = "Caymanian Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "KZT", CurrencyName = "Tenge", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "LAK", CurrencyName = "Kip", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "LBP", CurrencyName = "Lebanese Pound", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XCD", CurrencyName = "East Caribbean Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "CHF", CurrencyName = "Swiss Franc", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "LKR", CurrencyName = "Rupee", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "LRD", CurrencyName = "Liberian Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "LSL", CurrencyName = "Loti", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "LTL", CurrencyName = "Lita", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "LVL", CurrencyName = "Lat", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "LYD", CurrencyName = "Libyan Dinar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MAD", CurrencyName = "Dirham", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MDL", CurrencyName = "Leu", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euro", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "ANG", CurrencyName = "Netherlands Antillean guilder", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MGA", CurrencyName = "Malagasy Franc", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "USD", CurrencyName = "USD", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MKD", CurrencyName = "Denar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XOF", CurrencyName = "CFA Franc BCEAO", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MMK", CurrencyName = "Kyat", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MNT", CurrencyName = "Tugrik", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MOP", CurrencyName = "Pataca", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "USD", CurrencyName = "USD", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MRO", CurrencyName = "Ouguiya", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XCD", CurrencyName = "East Caribbean Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MTL", CurrencyName = "Maltese Lira", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MUR", CurrencyName = "Mauritian Rupee", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MVR", CurrencyName = "Rufiyaa", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MWK", CurrencyName = "Malawian Kwacha", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MXN", CurrencyName = "Peso", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MYR", CurrencyName = "Ringgit", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "MZN", CurrencyName = "Metical", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "NAD", CurrencyName = "Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XPF", CurrencyName = "CFP Franc", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XOF", CurrencyName = "CFA Franc BCEAO", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "AUD", CurrencyName = "Australian Dollars", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "NGN", CurrencyName = "Naira", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "NIO", CurrencyName = "Cordoba Oro", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "NOK", CurrencyName = "Norwegian Krone", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "NPR", CurrencyName = "Nepalese Rupee", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "AUD", CurrencyName = "Australian Dollars", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "NZD", CurrencyName = "New Zealand Dollars", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "NZD", CurrencyName = "New Zealand Dollars", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "OMR", CurrencyName = "Sul Rial", Precision = 3 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "PAB", CurrencyName = "Balboa", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "PEN", CurrencyName = "Nuevo Sol", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XPF", CurrencyName = "CFP Franc", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "PGK", CurrencyName = "Kina", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "PHP", CurrencyName = "Peso", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "PKR", CurrencyName = "Rupee", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "PLN", CurrencyName = "Zloty", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euro", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "NZD", CurrencyName = "New Zealand Dollars", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "USD", CurrencyName = "USD", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "JOD", CurrencyName = "Jordanian dinar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "USD", CurrencyName = "USD", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "PYG", CurrencyName = "Guarani", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "QAR", CurrencyName = "Rial", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "RON", CurrencyName = "Leu", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "RSD", CurrencyName = "Serbian dinar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "RUB", CurrencyName = "Ruble", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "RWF", CurrencyName = "Rwanda Franc", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "SAR", CurrencyName = "Riyal", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "SBD", CurrencyName = "Solomon Islands Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "SCR", CurrencyName = "Rupee", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "SDG", CurrencyName = "Dinar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "SEK", CurrencyName = "Krona", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "SGD", CurrencyName = "Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "GBP", CurrencyName = "Saint Helena pound", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "NOK", CurrencyName = "Norwegian Krone", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "SKK", CurrencyName = "Koruna", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "SLL", CurrencyName = "Leone", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XOF", CurrencyName = "CFA Franc BCEAO", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "SOS", CurrencyName = "Shilling", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "SRD", CurrencyName = "Surinamese Guilder", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "STD", CurrencyName = "Dobra", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "SVC", CurrencyName = "Salvadoran Colon", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "SYP", CurrencyName = "Syrian Pound", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "SZL", CurrencyName = "Lilangeni", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "USD", CurrencyName = "USD", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XAF", CurrencyName = "CFA Franc BEAC", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XOF", CurrencyName = "CFA Franc BCEAO", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "THB", CurrencyName = "Baht", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "TJS", CurrencyName = "Tajikistan Ruble", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "NZD", CurrencyName = "New Zealand Dollars", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "TMT", CurrencyName = "Manat", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "TND", CurrencyName = "Tunisian Dinar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "TOP", CurrencyName = "PaÕanga", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "TRY", CurrencyName = "Lira", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "TTD", CurrencyName = "Trinidad and Tobago Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "AUD", CurrencyName = "Australian Dollars", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "TWD", CurrencyName = "Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "TZS", CurrencyName = "Shilling", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "UAH", CurrencyName = "Hryvnia", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "UGX", CurrencyName = "Shilling", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "USD", CurrencyName = "USD", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "USD", CurrencyName = "USD", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "UYU", CurrencyName = "Peso", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "UZS", CurrencyName = "Som", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XCD", CurrencyName = "East Caribbean Dollar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "VEF", CurrencyName = "Bolivar", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "USD", CurrencyName = "USD", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "USD", CurrencyName = "USD", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "VND", CurrencyName = "Dong", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "VUV", CurrencyName = "Vatu", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "XPF", CurrencyName = "CFP Franc", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "YER", CurrencyName = "Rial", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "EUR", CurrencyName = "Euros", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "ZAR", CurrencyName = "Rand", Precision = 2 });
            this.Insert.IntoTable("Currencies").Row(new { Code = "ZMK", CurrencyName = "Kwacha", Precision = 2 });
 

        }
    }
}