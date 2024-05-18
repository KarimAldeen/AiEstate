import Link from "next/link";

export default function FlatContact1() {
  return (
    <>
      <section className="flat-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading-section">
                <h2 className="font-2 fw-8">
                  We provide the most suitable and quality real estate.
                </h2>
                <p className="text-color-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  sed tristique metus proin id lorem odio
                </p>
              </div>
              <div className="wrap-info">
                <div className="box-info flex align-center">
                  <div className="icon-info">
                    <svg
                      width={50}
                      height={50}
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M42.5742 38.0897L42.7 38.0394V37.904V23.749C42.7 23.1695 43.1704 22.699 43.75 22.699C44.3295 22.699 44.8 23.1695 44.8 23.749V38.749C44.8 39.179 44.5378 39.5638 44.1424 39.7261C44.1421 39.7262 44.1419 39.7263 44.1417 39.7264L31.6657 44.7158L31.7375 44.8952C31.7375 44.8974 31.7375 44.8994 31.7375 44.9015L31.6563 44.7187L31.6371 44.7272C31.3894 44.8262 31.113 44.8262 30.8654 44.7272L30.8462 44.7187L30.8074 44.7015H30.801L18.8243 39.9108L18.75 39.8811L18.6757 39.9108L6.64074 44.7233L6.64072 44.7233C6.5143 44.7739 6.382 44.799 6.25 44.799C6.04199 44.799 5.83872 44.7382 5.66233 44.6185C5.37414 44.4229 5.2 44.0971 5.2 43.749V21.249C5.2 20.8188 5.46227 20.4344 5.85956 20.2746C5.85958 20.2746 5.8596 20.2746 5.85962 20.2746L18.3281 15.2857L18.3282 15.2863L18.3507 15.2788L18.3509 15.2791L18.3623 15.2745C18.6118 15.1739 18.8907 15.1739 19.1402 15.2745L19.1401 15.2746L19.1448 15.2763L19.1648 15.2838L19.1987 15.2965H19.1989L26.6456 18.2772C26.6456 18.2772 26.6456 18.2772 26.6457 18.2772C27.1862 18.4939 27.4479 19.1052 27.2319 19.6419L27.2318 19.6421C27.0154 20.182 26.3971 20.4421 25.8673 20.2285L25.8668 20.2283L20.0743 17.9108L19.8 17.8011V18.0965V37.9015V38.0369L19.9257 38.0872L29.9257 42.0872L30.2 42.1969V41.9015V28.749C30.2 28.1695 30.6704 27.699 31.25 27.699C31.8295 27.699 32.3 28.1695 32.3 28.749V41.904V42.1994L32.5742 42.0897L42.5742 38.0897ZM18.2775 15.134L18.265 15.1028L18.265 15.1028L18.265 15.0965L18.2775 15.134ZM17.5743 38.0872L17.7 38.0369V37.9015V18.094V17.7986L17.4257 17.9083L7.42572 21.9083L7.3 21.9586V22.094V41.9015V42.1969L7.57428 42.0872L17.5743 38.0872Z"
                        fill="#8E8E93"
                        stroke="white"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M32.6999 13.749C32.6999 11.792 34.2928 10.199 36.2499 10.199C38.2069 10.199 39.7999 11.792 39.7999 13.749C39.7999 15.7061 38.2069 17.299 36.2499 17.299C34.2928 17.299 32.6999 15.7061 32.6999 13.749ZM34.7999 13.749C34.7999 14.5495 35.4494 15.199 36.2499 15.199C37.0503 15.199 37.6999 14.5495 37.6999 13.749C37.6999 12.9486 37.0503 12.299 36.2499 12.299C35.4494 12.299 34.7999 12.9486 34.7999 13.749Z"
                        fill="#8E8E93"
                        stroke="white"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M36.0971 24.4704L36.25 24.6518L36.4029 24.4704C37.7722 22.8466 39.3407 20.7865 40.5681 18.831C41.1818 17.8533 41.7126 16.8981 42.0906 16.0341C42.4666 15.1746 42.7 14.3865 42.7 13.749C42.7 10.1936 39.8054 7.29902 36.25 7.29902C32.6945 7.29902 29.8 10.1936 29.8 13.749C29.8 14.3871 30.0334 15.1755 30.4094 16.0351C30.7874 16.8993 31.3182 17.8544 31.9319 18.8319C33.1593 20.7872 34.7278 22.8466 36.0971 24.4704ZM27.7 13.749C27.7 9.03448 31.5355 5.19902 36.25 5.19902C40.9645 5.19902 44.8 9.03448 44.8 13.749C44.8 14.8262 44.3769 16.1323 43.7105 17.5145C43.0462 18.8922 42.1501 20.3255 41.2259 21.6512C39.3782 24.3016 37.43 26.5055 37.0314 26.9501C36.8312 27.1712 36.5474 27.299 36.25 27.299C35.9526 27.299 35.6688 27.1712 35.4686 26.9501C35.0699 26.5053 33.1217 24.3015 31.2741 21.6512C30.3499 20.3255 29.4538 18.8922 28.7895 17.5145C28.1231 16.1323 27.7 14.8262 27.7 13.749Z"
                        fill="#8E8E93"
                        stroke="white"
                        strokeWidth="0.4"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h5 className="text-color-4">Office address</h5>
                    <h4 className="fw-4">
                      2715 Ash Dr. San Jose, South Dakota 83475
                    </h4>
                  </div>
                </div>
                <div className="box-info flex align-center">
                  <div className="icon-info">
                    <svg
                      width={50}
                      height={51}
                      viewBox="0 0 50 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.4648 13.7812C26.4648 14.5902 27.1207 15.2461 27.9297 15.2461C28.7387 15.2461 29.3945 14.5902 29.3945 13.7812C29.3945 12.9723 28.7387 12.3164 27.9297 12.3164C27.1207 12.3164 26.4648 12.9723 26.4648 13.7812Z"
                        fill="#8E8E93"
                      />
                      <path
                        d="M32.3242 13.7812C32.3242 14.5902 32.9801 15.2461 33.7891 15.2461C34.598 15.2461 35.2539 14.5902 35.2539 13.7812C35.2539 12.9723 34.598 12.3164 33.7891 12.3164C32.9801 12.3164 32.3242 12.9723 32.3242 13.7812Z"
                        fill="#8E8E93"
                      />
                      <path
                        d="M38.1836 13.7812C38.1836 14.5902 38.8395 15.2461 39.6484 15.2461C40.4574 15.2461 41.1133 14.5902 41.1133 13.7812C41.1133 12.9723 40.4574 12.3164 39.6484 12.3164C38.8395 12.3164 38.1836 12.9723 38.1836 13.7812Z"
                        fill="#8E8E93"
                      />
                      <path
                        d="M22.6771 37.2188L27.0716 34.2891L35.8398 37.2188V43.0781C35.8398 44.6961 34.549 46.0078 32.931 46.0078C16.7508 46.0078 1.46484 30.8195 1.46484 14.6394C1.46484 13.0214 2.77656 11.7305 4.39453 11.7305H10.2539L13.1836 20.4987L10.2539 24.8933C12.1247 29.5703 18 35.3479 22.6771 37.2188Z"
                        stroke="#8E8E93"
                        strokeWidth="1.7"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.1406 13.7812C19.1406 18.6354 23.0756 22.5703 27.9297 22.5703V28.4297L33.7891 22.5703H39.6484C44.5025 22.5703 48.5352 18.6354 48.5352 13.7812C48.5352 8.92715 44.5025 4.99219 39.6484 4.99219H27.9297C23.0756 4.99219 19.1406 8.92715 19.1406 13.7812Z"
                        stroke="#8E8E93"
                        strokeWidth="1.7"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h5 className="text-color-4">Request a call back</h5>
                    <Link href="/tel:0123456789">
                      <h4 className="fw-8 font-2 fs-30 text-color-3 lh-37">
                        314-555-0123
                      </h4>
                    </Link>
                  </div>
                </div>
                <div className="box-info flex align-center">
                  <div className="icon-info">
                    <svg
                      width={50}
                      height={50}
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1505_28697)">
                        <path
                          d="M36.6559 17.8341L36.6559 17.8341L36.6609 17.8392C36.8315 18.0113 37.0549 18.0969 37.2788 18.0969C37.5021 18.0969 37.7258 18.0116 37.8976 17.8411C38.2409 17.5005 38.241 16.9425 37.8996 16.5985C37.5586 16.2548 37.0037 16.2526 36.66 16.5934L36.6559 17.8341ZM36.6559 17.8341L36.6551 17.8332M36.6559 17.8341L36.6551 17.8332M36.6551 17.8332C36.3141 17.4895 36.3163 16.9345 36.66 16.5935L36.6551 17.8332Z"
                          fill="#8E8E93"
                          stroke="white"
                          strokeWidth="0.2"
                        />
                        <path
                          d="M46.4639 27.8825H46.7054L46.5346 27.7118L39.3343 20.5115C38.992 20.1691 38.992 19.6141 39.3343 19.2718C39.6767 18.9296 40.2317 18.9296 40.574 19.2718L49.6441 28.3419C49.8085 28.5063 49.9009 28.7294 49.901 28.9618C49.901 29.1943 49.8086 29.4172 49.6442 29.5816L34.0757 45.1502C33.9114 45.3145 33.6884 45.4069 33.4559 45.4069C33.2235 45.4069 33.0005 45.3145 32.8361 45.1502L9.34306 21.6572C9.34306 21.6572 9.34305 21.6572 9.34305 21.6572C9.00075 21.3148 9.00076 20.7598 9.34305 20.4175L24.9114 4.84884C25.2537 4.50664 25.8087 4.50664 26.151 4.84884C26.151 4.84884 26.151 4.84884 26.1511 4.84884L34.9723 13.67C35.3146 14.0124 35.3146 14.5675 34.9723 14.9098C34.6299 15.252 34.0749 15.2519 33.7326 14.9098L26.7811 7.95839L26.6104 7.78768V8.0291V25.1994C26.6104 26.679 27.8139 27.8825 29.2935 27.8825H46.4639ZM24.8575 7.62373V7.38231L24.6868 7.55302L12.2497 19.9901L12.079 20.1608H12.3204H24.7575H24.8575V20.0608V7.62373ZM32.4087 42.2434L32.5794 42.4141V42.1727V29.7356V29.6356H32.4794H29.2937C26.8477 29.6356 24.8575 27.6455 24.8575 25.1994V22.0139V21.9139H24.7575H12.3204H12.079L12.2497 22.0846L32.4087 42.2434ZM34.3324 42.1728V42.4142L34.5031 42.2435L46.9401 29.8064L47.1108 29.6356H46.8694H34.4324H34.3324V29.7356V42.1728Z"
                          fill="#8E8E93"
                          stroke="white"
                          strokeWidth="0.2"
                        />
                        <path
                          d="M0.976562 24.9047H6.70225C7.18637 24.9047 7.57881 25.2972 7.57881 25.7812C7.57881 26.2654 7.18637 26.6578 6.70225 26.6578H0.976562C0.492442 26.6578 0.1 26.2653 0.1 25.7812C0.1 25.2972 0.492442 24.9047 0.976562 24.9047Z"
                          fill="#8E8E93"
                          stroke="white"
                          strokeWidth="0.2"
                        />
                        <path
                          d="M9.59961 24.9047H9.61426C10.0984 24.9047 10.4908 25.2972 10.4908 25.7812C10.4908 26.2653 10.0984 26.6578 9.61426 26.6578H9.59961C9.11549 26.6578 8.72305 26.2653 8.72305 25.7812C8.72305 25.2972 9.11549 24.9047 9.59961 24.9047Z"
                          fill="#8E8E93"
                          stroke="white"
                          strokeWidth="0.2"
                        />
                        <path
                          d="M0.978516 14.6508H4.10381C4.58793 14.6508 4.98037 15.0433 4.98037 15.5273C4.98037 16.0114 4.58793 16.4039 4.10381 16.4039H0.978516C0.494395 16.4039 0.101953 16.0114 0.101953 15.5273C0.101953 15.0433 0.494395 14.6508 0.978516 14.6508Z"
                          fill="#8E8E93"
                          stroke="white"
                          strokeWidth="0.2"
                        />
                        <path
                          d="M7.29315 14.6508H10.9873C11.4714 14.6508 11.8639 15.0433 11.8639 15.5273C11.8639 16.0114 11.4714 16.4039 10.9873 16.4039H7.29315C6.80903 16.4039 6.41659 16.0114 6.41659 15.5273C6.41659 15.0433 6.80903 14.6508 7.29315 14.6508Z"
                          fill="#8E8E93"
                          stroke="white"
                          strokeWidth="0.2"
                        />
                        <path
                          d="M7.64453 30.2758H13.1132C13.5972 30.2758 13.9897 30.6683 13.9897 31.1523C13.9897 31.6364 13.5973 32.0289 13.1132 32.0289H7.64453C7.16041 32.0289 6.76797 31.6364 6.76797 31.1523C6.76797 30.6683 7.16041 30.2758 7.64453 30.2758Z"
                          fill="#8E8E93"
                          stroke="white"
                          strokeWidth="0.2"
                        />
                        <path
                          d="M3.61328 36.5258H17.3827C17.8668 36.5258 18.2593 36.9183 18.2593 37.4023C18.2593 37.8864 17.8668 38.2789 17.3827 38.2789H3.61328C3.12916 38.2789 2.73672 37.8864 2.73672 37.4023C2.73672 36.9183 3.12916 36.5258 3.61328 36.5258Z"
                          fill="#8E8E93"
                          stroke="white"
                          strokeWidth="0.2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1505_28697">
                          <rect width={50} height={50} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="content">
                    <h5 className="text-color-4">Email us</h5>
                    <Link href="/mailto:hellosupport@gmail.com">
                      <h4 className="fw-4 text-color-3">
                        hellosupport@gmail.com
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mark-contact animate-up">
                <img
                  className="img-icon"
                  src="/assets/images/mark/mark-contact.png"
                  alt="images"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wrap-contact">
                <div className="box-title flex justify-space">
                  <div className="inner">
                    <div className="title-ct fs-30 fw-7">Contact us </div>
                    <p>We will respond as soon as we receive your message.</p>
                  </div>
                  <div className="icon-message animate-zoom">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.8668 1.7959H18.0927C15.6302 1.7959 13.6269 3.79882 13.6269 6.26215V14.193H6.12893C3.6681 14.1934 1.66602 16.1963 1.66602 18.6571V28.5738C1.66602 31.0347 3.6681 33.038 6.12893 33.038H6.82768V36.1263C6.82768 36.9651 7.30518 37.6959 8.07393 38.0305C8.34143 38.1472 8.62477 38.2042 8.9056 38.2042C9.43297 38.2041 9.94074 38.0043 10.3268 37.6451L15.2314 33.038H21.9077C24.3694 33.038 26.3718 31.0351 26.3718 28.5738V22.1421L29.6752 25.2367C29.9697 25.5146 30.3394 25.6999 30.7382 25.7695C31.1371 25.8391 31.5477 25.7901 31.9189 25.6284C32.2904 25.4677 32.6068 25.2018 32.8289 24.8634C33.051 24.525 33.1692 24.129 33.1689 23.7242V20.6446H33.8673C36.3293 20.6451 38.3327 18.6417 38.3327 16.1788V6.26215C38.3327 3.79923 36.3293 1.7959 33.8668 1.7959ZM21.9077 30.7838H14.7856C14.4989 30.7841 14.223 30.8934 14.0139 31.0896L9.08185 35.7234V31.9109C9.0819 31.7629 9.05279 31.6163 8.99617 31.4795C8.93954 31.3428 8.85653 31.2185 8.75186 31.1138C8.64719 31.0091 8.52292 30.9261 8.38615 30.8695C8.24938 30.8129 8.10279 30.7838 7.95477 30.7838H6.12893C5.54312 30.7832 4.98151 30.5501 4.5674 30.1357C4.15329 29.7214 3.92051 29.1596 3.92018 28.5738V18.6571C3.92051 18.0713 4.15329 17.5096 4.5674 17.0952C4.98151 16.6809 5.54312 16.4478 6.12893 16.4471H13.6406C13.7806 18.7851 15.721 20.6451 18.0927 20.6451H24.1173V28.5738C24.1169 29.1598 23.884 29.7216 23.4698 30.136C23.0555 30.5504 22.4936 30.7834 21.9077 30.7838ZM36.0785 16.1788C36.0779 16.7652 35.8446 17.3274 35.43 17.7421C35.0154 18.1568 34.4533 18.3901 33.8668 18.3909H32.0414C31.8934 18.3908 31.7468 18.42 31.6101 18.4766C31.4733 18.5332 31.349 18.6162 31.2443 18.7209C31.1397 18.8256 31.0567 18.9498 31 19.0866C30.9434 19.2234 30.9143 19.37 30.9144 19.518V23.3109L26.0218 18.7192L25.9985 18.6971L25.9956 18.7005L25.9898 18.6951C25.7808 18.4995 25.5051 18.3909 25.2189 18.3913H18.0927C17.5063 18.3905 16.9441 18.1572 16.5295 17.7425C16.1149 17.3278 15.8817 16.7656 15.881 16.1792V16.1771H15.8893L15.881 6.26298C15.8817 5.67658 16.1149 5.11437 16.5295 4.69968C16.9441 4.28499 17.5063 4.05167 18.0927 4.0509H33.8668C34.4533 4.05167 35.0154 4.28499 35.43 4.69968C35.8446 5.11437 36.0779 5.67658 36.0785 6.26298V16.1788Z"
                        fill="#FFA920"
                      />
                      <path
                        d="M30.4872 7.77051H21.4713C21.1724 7.77051 20.8857 7.88925 20.6744 8.10062C20.463 8.31199 20.3442 8.59867 20.3442 8.89759C20.3442 9.19651 20.463 9.48319 20.6744 9.69456C20.8857 9.90593 21.1724 10.0247 21.4713 10.0247H30.4876C30.6356 10.0246 30.7821 9.99547 30.9189 9.9388C31.0556 9.88213 31.1798 9.79909 31.2845 9.69441C31.3891 9.58973 31.4721 9.46547 31.5287 9.32871C31.5854 9.19196 31.6145 9.04539 31.6145 8.89738C31.6144 8.74937 31.5852 8.60282 31.5286 8.46608C31.4719 8.32935 31.3889 8.20512 31.2842 8.10048C31.1795 7.99584 31.0553 7.91284 30.9185 7.85622C30.7817 7.79961 30.6352 7.77048 30.4872 7.77051ZM30.4872 12.2784H21.4713C21.1724 12.2784 20.8857 12.3972 20.6744 12.6085C20.463 12.8199 20.3442 13.1066 20.3442 13.4055C20.3442 13.7044 20.463 13.9911 20.6744 14.2025C20.8857 14.4138 21.1724 14.5326 21.4713 14.5326H30.4876C30.6356 14.5326 30.7821 14.5034 30.9189 14.4467C31.0556 14.3901 31.1798 14.307 31.2845 14.2023C31.3891 14.0976 31.4721 13.9734 31.5287 13.8366C31.5854 13.6999 31.6145 13.5533 31.6145 13.4053C31.6144 13.2573 31.5852 13.1107 31.5286 12.974C31.4719 12.8373 31.3889 12.713 31.2842 12.6084C31.1795 12.5038 31.0553 12.4208 30.9185 12.3641C30.7817 12.3075 30.6352 12.2784 30.4872 12.2784ZM9.52049 22.5163C9.38549 22.5605 9.27258 22.6505 9.16008 22.7409C8.95716 22.9655 8.82174 23.2605 8.82174 23.553C8.82174 23.8455 8.95674 24.1384 9.16008 24.3409C9.38549 24.5655 9.65591 24.6801 9.94883 24.6801C10.1063 24.6801 10.2647 24.6338 10.3997 24.5897C10.5351 24.5434 10.6476 24.453 10.7601 24.3409C10.963 24.1384 11.0984 23.8455 11.0984 23.553C11.0984 23.2605 10.963 22.9651 10.7601 22.7409C10.4447 22.4484 9.94883 22.3359 9.52049 22.5163ZM14.9076 22.5163C14.4792 22.3359 13.9834 22.448 13.668 22.7409C13.4651 22.9655 13.3526 23.2605 13.3526 23.553C13.3526 23.8455 13.4651 24.1384 13.668 24.3409C13.7805 24.453 13.8934 24.5434 14.0284 24.5897C14.1863 24.6338 14.3213 24.6801 14.4792 24.6801C14.7726 24.6801 15.043 24.5655 15.2684 24.3409C15.4713 24.1384 15.6067 23.8455 15.6067 23.553C15.6067 23.2605 15.4713 22.9651 15.2684 22.7409C15.1555 22.6509 15.043 22.5605 14.9076 22.5163ZM19.4159 22.5163C19.1455 22.4018 18.8297 22.4018 18.5367 22.5163C18.4017 22.5605 18.2888 22.6505 18.1763 22.7409C17.9734 22.9655 17.838 23.2605 17.838 23.553C17.838 23.8455 17.973 24.1384 18.1763 24.3409C18.4017 24.5655 18.6722 24.6801 18.9655 24.6801C19.123 24.6801 19.2809 24.6338 19.4163 24.5897C19.5517 24.5434 19.6642 24.453 19.7772 24.3409C19.9801 24.1384 20.0926 23.8455 20.0926 23.553C20.0926 23.2605 19.9797 22.9651 19.7772 22.7409C19.6638 22.6509 19.5513 22.5605 19.4159 22.5163ZM7.70716 11.1518H9.96133C10.2602 11.1518 10.5469 11.033 10.7583 10.8216C10.9697 10.6103 11.0884 10.3236 11.0884 10.0247C11.0884 9.72575 10.9697 9.43908 10.7583 9.22771C10.5469 9.01634 10.2602 8.89759 9.96133 8.89759H7.70716C7.40824 8.89759 7.12156 9.01634 6.91019 9.22771C6.69882 9.43908 6.58008 9.72575 6.58008 10.0247C6.58008 10.3236 6.69882 10.6103 6.91019 10.8216C7.12156 11.033 7.40824 11.1518 7.70716 11.1518ZM32.5013 29.1838H30.2472C29.9482 29.1838 29.6616 29.3026 29.4502 29.514C29.2388 29.7253 29.1201 30.012 29.1201 30.3109C29.1201 30.6098 29.2388 30.8965 29.4502 31.1079C29.6616 31.3193 29.9482 31.438 30.2472 31.438H32.5013C32.8003 31.438 33.0869 31.3193 33.2983 31.1079C33.5097 30.8965 33.6284 30.6098 33.6284 30.3109C33.6284 30.012 33.5097 29.7253 33.2983 29.514C33.0869 29.3026 32.8003 29.1838 32.5013 29.1838Z"
                        fill="#FFA920"
                      />
                    </svg>
                  </div>
                </div>
                <div id="comments" className="comments">
                  <div className="respond-comment">
                    <form
                      method="post"
                      id="contactform"
                      className="comment-form form-submit"
                      action="./contact/contact-process.php"
                      acceptCharset="utf-8"
                      noValidate="novalidate"
                    >
                      <fieldset className="name-wrap">
                        <label className="font-2 fw-8 fs-16">Your name</label>
                        <input
                          type="text"
                          className="tb-my-input"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                        <img
                          className="img-icon"
                          src="/assets/images/icon/contact-name.svg"
                          alt="images"
                        />
                      </fieldset>
                      <div className="text-wrap flex">
                        <fieldset className="email-wrap style-text">
                          <label className="font-2 fw-8 fs-16">Email</label>
                          <input
                            type="email"
                            className="tb-my-input"
                            name="email"
                            placeholder="Email"
                            required
                          />
                          <img
                            className="img-icon img-email"
                            src="/assets/images/icon/contact-email.svg"
                            alt="images"
                          />
                        </fieldset>
                        <fieldset className="phone-wrap style-text">
                          <label className="font-2 fw-8 fs-16">Phone</label>
                          <input
                            type="tel"
                            className="tb-my-input"
                            name="tel"
                            placeholder="Phone"
                            required
                          />
                          <img
                            className="img-icon"
                            src="/assets/images/icon/contact-phone.svg"
                            alt="images"
                          />
                        </fieldset>
                      </div>
                      <div className="wd-find-select">
                        <label className="font-2 fw-8 fs-16">
                          Property type
                        </label>
                        <div className="select-wrapper style-2">
                          <select className="nice-select relative" tabIndex={0}>
                            <span className="current">Choose</span>

                            <option value className="option">
                              Choose
                            </option>
                            <option value="apartment" className="option">
                              Apartment
                            </option>
                            <option value="house" className="option">
                              House
                            </option>
                            <option value="rent" className="option">
                              Rent
                            </option>

                            <img
                              className="img-icon icon-style"
                              src="/assets/images/icon/contact-choose.svg"
                              alt="images"
                            />
                          </select>
                        </div>
                      </div>
                      <fieldset className="message-wrap">
                        <label className="font-2 fw-8 fs-16">Message</label>
                        <textarea
                          id="comment-message"
                          name="message"
                          rows={4}
                          tabIndex={4}
                          placeholder="Your message"
                        />
                      </fieldset>
                      <div className="button-boxs">
                        <button
                          className="sc-button"
                          id="submit"
                          name="submit"
                          type="submit"
                        >
                          <svg
                            width={19}
                            height={18}
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1505_28737)">
                              <path
                                d="M17.7381 0.0295345L0.899726 5.53166C0.424186 5.68706 0.355417 6.33388 0.788208 6.58552L7.1516 10.2857C7.24979 10.3428 7.36258 10.3699 7.47599 10.3635C7.5894 10.3572 7.69846 10.3177 7.78965 10.2499L9.57844 8.92152L8.25002 10.7103C8.1823 10.8015 8.14281 10.9106 8.13645 11.024C8.13009 11.1374 8.15714 11.2502 8.21424 11.3484L11.9144 17.7118C12.1664 18.1449 12.813 18.0754 12.9683 17.6003L18.4705 0.76186C18.618 0.309727 18.1881 -0.117584 17.7381 0.0295345ZM12.2669 16.0078L9.41045 11.0954L12.8548 6.45741C12.9378 6.34558 12.9779 6.20763 12.9676 6.06873C12.9574 5.92984 12.8976 5.79924 12.7991 5.70076C12.7006 5.60228 12.57 5.54247 12.4311 5.53225C12.2923 5.52203 12.1543 5.56207 12.0425 5.64507L7.40447 9.08947L2.49215 6.233L17.0112 1.48874L12.2669 16.0078ZM6.59633 12.7247L2.74099 16.58C2.51425 16.8067 2.1466 16.8068 1.91987 16.58C1.69309 16.3533 1.69309 15.9856 1.91987 15.7589L5.77521 11.9036C6.00202 11.6769 6.36967 11.6768 6.59633 11.9036C6.82311 12.1303 6.82311 12.498 6.59633 12.7247ZM1.50311 12.8706C1.27634 12.6438 1.27634 12.2762 1.50311 12.0495L3.02438 10.5282C3.25112 10.3014 3.61877 10.3014 3.8455 10.5282C4.07228 10.7549 4.07228 11.1226 3.8455 11.3493L2.32424 12.8706C2.09754 13.0973 1.72985 13.0973 1.50311 12.8706ZM7.97175 14.6544C8.19852 14.8811 8.19852 15.2488 7.97175 15.4755L6.45045 16.9968C6.3966 17.0508 6.33261 17.0936 6.26215 17.1228C6.1917 17.152 6.11617 17.167 6.0399 17.1669C5.52724 17.1669 5.26254 16.5424 5.62936 16.1756L7.15066 14.6544C7.37736 14.4276 7.74501 14.4276 7.97175 14.6544Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1505_28737">
                                <rect
                                  width={18}
                                  height={18}
                                  fill="white"
                                  transform="translate(0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <span>Send request</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
