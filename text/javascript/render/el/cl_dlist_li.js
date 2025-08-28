
export default (
    (n, v, e, click) => {
        var
            b = e.firstElementChild
        ;
        return (
            b.setAttribute("data-i", v),
            (b.firstElementChild.textContent = n),
            (b.onclick = click),
            
            e
        )
    }
)


