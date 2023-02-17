<script
  dangerouslySetInnerHTML={{
    __html: `
        function initFreshChat() {
          window.fcWidget.init({
            token: "cf05563f-961a-4e7f-b7f5-40dc76107963",
            host: "https://metranetoperations.freshchat.com",
            widgetUuid: "7d564467-d45c-4b81-880d-aac1e2fd1b90"
          });
        }
        function initialize(i,t){var e;i.getElementById(t)?
        initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,
        e.src="https://metranetoperations.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}
        function initiateCall(){initialize(document,"Freshchat-js-sdk")}
        window.addEventListener?window.addEventListener("load",initiateCall,!1)
        :
        window.attachEvent("load",initiateCall,!1);
      `,
  }}
/>;
