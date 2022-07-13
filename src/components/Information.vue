<template>
  <div class="containe px-5">
    <h1 class="text-center mt-1" style="color: #ffffff">INFORMATION</h1>
    <div class="row pt-3">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">CPU : {{ cpu }}</h6>
            <h6 class="card-title">Core : {{ core }}</h6>
            <h6 class="card-title">Version : {{ version }}</h6>
            <h6 class="card-title">Type : {{ type }}</h6>
            <h6 class="card-title">UserInfo : {{ userInfo }}</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <span class="placeholder bg-success" :style="{ width: ram + '%' }"></span>
            <h6 class="card-title pt-3">ram : {{ ram }} %</h6>
            <h6 class="card-title">freeMem : {{ freeMem }} Mb</h6>
            <h6 class="card-title">usingMem : {{ totalMem - freeMem }} Mb</h6>
            <h6 class="card-title">TotalMem : {{ totalMem }} Mb</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body mx-auto">
            <div class="my-2">
              <i class="fa-brands fa-node mx-3"></i>
              <i class="fa-solid fa-atom mx-3"></i>
              <i class="fa-brands fa-vuejs mx-3"></i>
            </div>
            <div class="my-2">
              <i class="fa-brands fa-windows mx-3"></i>
              <i class="fa-brands fa-linux mx-3"></i>
              <i class="fa-brands fa-apple mx-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: window.api,
      cpu: window.api.cpu[0].model,
      core: window.api.cpu.length,
      totalMem: Math.round(window.api.totalmem / 1028 / 1028),
      version: window.api.version,
      userInfo: window.api.userInfo,
      type: window.api.type,
      freeMem: Math.round(window.api.freeMem / 1028 / 1028),
      ram: 10,
    };
  },
  created() {
    setInterval(() => {
      this.freeMem = Math.round(window.api2.freeMem() / 1028 / 1028);
      this.ram = Math.round(
        (100 / this.totalMem) * (this.totalMem - this.freeMem)
      );
    }, 1000);
  },
  methods: {},
};
</script>

<style scoped>
.containe {
  background-color: #334155;
  color: black;
}

.row {
  background-color: #334155;
}
</style>