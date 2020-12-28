import { Auth } from "aws-amplify";

export default {
  Auth: {
    mandatorySignIn: true,
    region: "us-west-2",
    userPoolId: "us-west-2_sft7gzkZg",
    userPoolWebClientId: "ipoph4btm3599vl00ujdjrd7h",
  },
  // API: {
  //   endpoints: [
  //     {
  //       name: "LORA_SBK",
  //       endpoint: "",
  //       custom_header: async () => {
  //         return {
  //           Authorization: `${(await Auth.currentSession())
  //             .getIdToken()
  //             .getJwtToken()}`,
  //         };
  //       },
  //     },
  //   ],
  // },
};
