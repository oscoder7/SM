﻿namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerFormatter()
    export class PromotionFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            let idList = ctx.value as number[];
            if (!idList || !idList.length)
                return "";

            let byId = Transactions.PromotionsRow.getLookup().itemById;

            return idList.map(x => {
                let g = byId[x];
                if (!g)
                    return x.toString();

                return Q.htmlEncode(g.ToCourseCourseName);
            }).join(", ");
        }
    }
}