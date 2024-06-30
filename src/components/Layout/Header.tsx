import Navigation from "../Navigation";

export default function Header() {

    const subMenues = [
        ['HOME', "/"],
        ['FUND TRANSFERS', "/fund-tranfers"],
        ['BILL PAYMENT', "/bill-payment"],
        ['PROFILE', "/profile"],
        ['REGISTER', "/register"],
        ['SETTINGS', "/settings"]
    ];

    return (
      <>
        <Navigation subNav={subMenues}/>
      </>
    );
}