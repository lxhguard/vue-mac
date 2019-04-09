declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module "socket.io-client" {
  const socketIoClient: any
  export default socketIoClient
}

