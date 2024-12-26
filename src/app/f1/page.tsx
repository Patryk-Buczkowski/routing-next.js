import { MyLink } from "@/components/buttons/Link";

export default function F1() {
    return (
        <>
        <h1>f1 page</h1>
        <div className="mt-2 w-1/2 mx-auto">
            <MyLink to="/f1/f2" name="f2 intercepted" />
        </div>

        <div className="mt-2 w-1/2 mx-auto">
            <MyLink to="/f1/f4" name="f4" />
        </div>

        <div className="mt-2 w-1/2 mx-auto">
            <MyLink to="/f1/f4/f5" name="f5" />
        </div>
        </>
    )
}