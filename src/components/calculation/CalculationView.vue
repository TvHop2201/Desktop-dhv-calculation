<template>
  <div class="containe">
    <h1 class="text-center my-3" style="color: #ffffff">CALCULATION</h1>
    <div class="card mx-5 px-5">
      <div class="px-2 mt-5">
        <div class="form-group my-2">
          <input
            class="form-control"
            placeholder="Tên Môn Mày Học"
            v-model="tenMon"
          />
        </div>
        <select
          class="form-select my-2"
          aria-placeholder="Số tín chỉ của môn đó"
          v-model.number="tinChi"
        >
          <option selected>Số tín chỉ của môn đó</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select
          class="form-select my-2"
          aria-placeholder="Số tín chỉ của môn đó"
          v-model.number="thucHanh"
        >
          <option selected>Mày có học thực hành môn này không</option>
          <option value="0">không</option>
          <option value="1">có</option>
          <option value="2">Mày đéo nhớ</option>
        </select>
        <div class="form-group my-2">
          <input
            type="number"
            class="form-control"
            placeholder="Điểm Chuyên Cần"
            v-model.number="cc"
          />
        </div>
        <div class="form-group my-2">
          <input
            type="number"
            class="form-control"
            placeholder="Điểm Hồ Sơ Học Phần"
            v-model.number="hshp"
          />
        </div>
        <div class="form-group my-2">
          <input
            type="number"
            class="form-control"
            placeholder="Điểm Giữa Kỳ"
            v-model.number="gk"
          />
        </div>
        <div class="form-group my-2">
          <input
            type="number"
            class="form-control"
            placeholder="Điểm Giữa Kỳ 2"
            v-model.number="gk2"
            v-if="checkGk2"
          />
        </div>
        <div class="form-group my-2">
          <input
            type="number"
            class="form-control"
            placeholder="Điểm Giữa Thực hành"
            v-model.number="th"
            v-if="checkTh"
          />
        </div>
        <div class="form-group my-2">
          <input
            type="number"
            class="form-control"
            placeholder="Điểm Thi KTHP"
            v-model.number="thi"
          />
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-success mx-auto" @click="tinh">
            Submit
          </button>
        </div>
        <div class="alert my-2">
          <p class="alert-success" v-if="loai">
            Môn {{ tenMon }} của mày được {{ tong }} xếp loại {{ loai }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tenMon: "",
      tinChi: 3,
      thucHanh: 0,
      cc: "",
      hshp: "",
      gk: "",
      checkGk2: false,
      gk2: "",
      checkTh: false,
      th: "",
      thi: "",
      tong: "",
      loai: "",
      alertShow: true,
    };
  },
  methods: {
    check() {
      if (this.tenMon === "") {
        alert("mày chưa nhập tên môn này !!!");
        this.tenMon = "chưa nhập";
      }
      if (this.cc === "") {
        alert("mày chưa nhập điểm chuyên cần này !!!");
        this.cc = 0;
      }
      if (this.hshp === "") {
        alert("mày chưa nhập điểm hồ sơ học phần này !!!");
        this.hshp = 0;
      }
      if (this.gk === "") {
        alert("mày chưa nhập điểm giữa kỳ này !!!");
        this.gk = 0;
      }
      if (this.checkGk2 && this.gk === "") {
        alert("mày chưa nhập điểm giữa kỳ 2 này !!!");
        this.gk2 = 0;
      }
      if (this.checkTh2 && this.th === "") {
        alert("mày chưa nhập điểm thực hành này !!!");
        this.th = 0;
      }
      if (this.thi === "") {
        alert("mày chưa nhập điểm hồ sơ học phần này !!!");
        this.thi = 0;
      }
    },
    tinh() {
      this.check();
      if (!this.checkGk2 && !this.checkTh) {
        this.tong = (
          this.cc * 0.1 +
          this.hshp * 0.2 +
          this.gk * 0.2 +
          this.thi * 0.5
        ).toFixed(2);
        this.xeploai();
        return;
      }
      if (this.checkGk2 && !this.checkTh) {
        this.tong = (
          this.cc * 0.1 +
          this.hshp * 0.2 +
          (this.gk + this.gk2) +
          this.thi * 0.5
        ).toFixed(2);
        this.xeploai();
        return;
      }
      if (!this.checkGk2 && this.checkTh) {
        this.tong = (
          this.cc * 0.1 +
          this.hshp * 0.2 +
          this.gk * 0.2 +
          (((this.thi + this.th) * 2) / 3) * 0.5
        ).toFixed(2);
        this.xeploai();
        return;
      }
      if (this.checkGk2 && this.checkTh) {
        this.tong = (
          this.cc * 0.1 +
          this.hshp * 0.2 +
          (this.gk + this.gk2) +
          (((this.thi + this.th) * 2) / 3) * 0.5
        ).toFixed(2);
        this.xeploai();
        return;
      }
    },
    xeploai() {
      if (this.tong < 4.0) {
        this.loai = "F";
      } else if (this.tong >= 4.0 && this.tong <= 4.9) {
        this.loai = "D";
      } else if (this.tong >= 5.0 && this.tong <= 5.4) {
        this.loai = "D+";
      } else if (this.tong >= 5.5 && this.tong <= 6.4) {
        this.loai = "C";
      } else if (this.tong >= 6.5 && this.tong <= 6.9) {
        this.loai = "C+";
      } else if (this.tong >= 7.0 && this.tong <= 7.9) {
        this.loai = "B";
      } else if (this.tong >= 8.0 && this.tong <= 8.4) {
        this.loai = "B+";
      } else if (this.tong >= 8.5) {
        this.loai = "A";
      }
    },
  },
  watch: {
    tinChi() {
      if (this.tinChi === 5) {
        this.checkGk2 = true;
      } else {
        this.checkGk2 = false;
      }
    },
    thucHanh() {
      if (this.thucHanh === 1) {
        this.checkTh = true;
      } else {
        this.checkTh = false;
      }
      if (this.thucHanh !== 0 && this.thucHanh !== 1) {
        alert("mày ngu như con lợn !!!!");
      }
    },
  },
};
</script>

<style>
.containe {
  background-color: #334155;
}
</style>