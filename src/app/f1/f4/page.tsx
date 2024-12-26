import { MyLink } from "@/components/buttons/Link";

export default function F4() {
    return (
        <>
        <h1>f4 page</h1>
        <div className="mt-2 w-1/2 mx-auto">
            <MyLink to="/f1/f3" name="f3 intercepted" />
        </div>

        <div className="mt-2 w-1/2 mx-auto">
            <MyLink to="/f1" name="f1" />
        </div>
        </>
    )
}