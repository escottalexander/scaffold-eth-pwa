import React from "react";
import Head from "next/head";

type MetaHeaderProps = {
  title?: string;
  description?: string;
  image?: string;
  twitterCard?: string;
  children?: React.ReactNode;
};

// Images must have an absolute path to work properly on Twitter.
// We try to get it dynamically from Vercel, but we default to relative path.
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/` : "/";

export const MetaHeader = ({
  title = "Scaffold-ETH 2 PWA App",
  description = "Built with 🏗 Scaffold-ETH 2",
  image = "thumbnail.jpg",
  twitterCard = "summary_large_image",
  children,
}: MetaHeaderProps) => {
  const imageUrl = baseUrl + image;

  return (
    <Head>
      <meta property="og:type" content="website" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="mask-icon" href="/logo.svg" color="#93BBFB" />
      <meta name="msapplication-tap-highlight" content="no" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      {title && (
        <>
          <title>{title}</title>
          <meta name="apple-mobile-web-app-title" content={title} />
          <meta name="application-name" content={title} />
          <meta property="og:site_name" content={title} />
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      {image && (
        <>
          <meta property="og:image" content={imageUrl} />
          <meta name="twitter:image" content={imageUrl} />
        </>
      )}
      {baseUrl && <meta property="og:url" content={baseUrl} />}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      <link rel="shortcut icon" href="/logo.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* <!-- You have to generate a splash screen image for each for iOS device size - try https://progressier.com/pwa-icons-and-ios-splash-screen-generator --> */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="splash_screens/iPhone_14_Pro_Max_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="splash_screens/iPhone_14_Pro_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="splash_screens/iPhone_11__iPhone_XR_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="splash_screens/12.9__iPad_Pro_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="splash_screens/10.9__iPad_Air_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="splash_screens/10.5__iPad_Air_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="splash_screens/10.2__iPad_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="splash_screens/8.3__iPad_Mini_landscape.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="splash_screens/iPhone_14_Pro_Max_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="splash_screens/iPhone_14_Pro_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="splash_screens/iPhone_11__iPhone_XR_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="splash_screens/12.9__iPad_Pro_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="splash_screens/10.9__iPad_Air_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="splash_screens/10.5__iPad_Air_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="splash_screens/10.2__iPad_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="splash_screens/8.3__iPad_Mini_portrait.png"
      />

      {children}
    </Head>
  );
};
