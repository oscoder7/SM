using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace BitPro.SchoolMate.Master
{
    public partial class PromotionFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "BitPro.SchoolMate.Master.PromotionFormatter";

        public PromotionFormatterAttribute()
            : base(Key)
        {
        }
    }
}
