
import {format_time} from "../../f/i.js";

export default (
    (A,chat,call,icons,now) => {
        var
            b = A.querySelector("button"),
            ib = b.querySelector(":nth-child(3)"),

            type = call._
        ;
        return (
            b.classList.add("_"+type.toString()),
            (
                b
                .querySelector(":nth-child(2)")
                .style
                .background = `rgb(${chat.r.join(",")})`
            ),
            (
                b
                .querySelector(":nth-child(1)")
                .appendChild(
                    icons[type].cloneNode(true)
                )
            ),
            (
                ib
                .querySelector(":nth-child(1)")
                .textContent = chat.c
            ),
            (
                ib
                .querySelector(":nth-child(2)")
                .textContent =
                    format_time(
                        new Date(call.t),
                        now
                    )
            ),
            A
        );
    }
)