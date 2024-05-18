import { footerData } from "@/Data";
import WhatsApp from "@/ui/WhatsApp";
import Link from "next/link";

export default function Footer1() {
  return (
    <footer id="footer" className="clearfix home">
      <div className="container">
        <div className="row">
          {footerData.map((item) => (
            <div key={item.id} className="col-lg-6 col-md-12 col-12">
              <div className="group-icon">
                <div className="box-icons flex">
                  <div className="images">
                    <img src={item.buttonIcon} alt="images" />
                  </div>
                  <div className="content">
                    <div className="title-icon fs-20 lh-45 fw-7 text-color-2">{item.title}</div>
                    <p className="font-1 text-color-2">{item.description}</p>
                  </div>
                </div>
                <div className="button-footer">
                  <WhatsApp/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
