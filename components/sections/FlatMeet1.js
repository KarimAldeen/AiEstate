import { agents } from '@/Data';
import WhatsApp from '@/ui/WhatsApp';
import Link from 'next/link';

export default function FlatMeet1() {
    return (
        <section className="flat-meet tf-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section center">
                            <h2>Want Real agent assistant</h2>
                            {/* <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p> */}
                        </div>
                    </div>
                    {agents.map(agent => (
                        <div className="col-lg-4 col-md-4" key={agent.id}>
                            <div className="box hover-img">
                                <div className="images relative img-style">
                                    <Link href="/agents-detail">
                                        <img src={agent.imageUrl} alt="images" />
                                    </Link>
                                    <div className="icon-socials">
                                        <Link href={agent.socialLinks.facebook}><i className="fab fa-facebook-f" /></Link>
                                        <Link href={agent.socialLinks.twitter}><i className="fab fa-twitter" /></Link>
                                        <Link href={agent.socialLinks.linkedin}><i className="fab fa-linkedin-in" /></Link>
                                        <Link href={agent.socialLinks.instagram}><i className="fab fa-instagram" /></Link>
                                    </div>
                                </div>
                                <div className="content flex justify-space">
                                    <div className="inner">
                                        <h3 className="link-style-1">
                                            <Link href="/agents-detail">{agent.name}</Link>
                                        </h3>
                                        {/* <p className="fs-12 text-color-2">{agent.role}</p> */}
                                    </div>
                                    <div className="icon-box flex">
                                 <WhatsApp />
                                        {/* <Link href={`tel:${agent.phone}`}><i className="fas fa-phone-alt" /></Link> */}
                                        {/* <Link href={`mailto:${agent.email}`}><i className="fas fa-envelope" /></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-lg-12">
                        <div className="box-text flex justify-center">
                            <p>Become an agent and get the commission you deserve.</p>
                            <Link href="/contact" className="text-color-3 font-2 fw-7"> Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
