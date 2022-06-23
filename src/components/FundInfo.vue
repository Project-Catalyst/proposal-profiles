<template>
  <div class="flex-container">
    <div class="mx-auto d-inline-flex flex-column mb-5">
      <CFormSelect
        label="Category"
        size="lg"
        class="m-1"
        style="width: 200px"
        @change="categoryChangeHandler"
        aria-label="Large select example"
      >
        <option v-for="option in categoryOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </CFormSelect>

      <CFormSelect
        label="Type"
        size="lg"
        width="1em"
        class="m-1"
        style="width: 200px"
        @change="typeChangeHandler"
        aria-label="Large select example"
      >
        <option v-for="option in typeOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </CFormSelect>

      <CFormSelect
        label="Company"
        size="lg"
        class="m-1"
        style="width: 200px"
        @change="companyChangeHandler"
        aria-label="Large select example"
      >
        <option v-for="option in companyOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </CFormSelect>

      <CFormSelect
        label="Investment Stage"
        size="lg"
        class="m-1"
        style="width: 200px"
        @change="investmentStageChangeHandler"
        aria-label="Large select example"
      >
        <option v-for="option in investmentStageOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </CFormSelect>
    </div>
    <div class="mx-auto d-inline-flex flex-column mb-5">
      <CFormSelect
        label="Region"
        size="lg"
        class="m-1"
        style="width: 200px"
        @change="regionChangeHandler"
        aria-label="Large select example"
      >
        <option v-for="option in regionOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </CFormSelect>

      <CFormSelect
        label="Country"
        size="lg"
        class="m-1"
        style="width: 200px"
        @change="countryChangeHandler"
        aria-label="Large select example"
      >
        <option v-for="option in countryOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </CFormSelect>

      <CFormSelect
        label="Acceleration Needs"
        size="lg"
        class="m-1"
        style="width: 200px"
        @change="accelerationNeedsChangeHandler"
        aria-label="Large select example"
      >
        <option v-for="option in accelerationNeedsOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </CFormSelect>
    </div>
  </div>
  <div class="mx-auto">
    <div>query result count {{ resultCount }}</div>
    <div
      class="card ui fluid"
      v-for="product in searchedProducts"
      :key="product.id"
      style="margin: 10px"
    >
      <div class="content">
        <div class="header">{{ product.ID }}</div>
        <div class="header">{{ product.ProjectName }}</div>
        <div class="header">{{ product.About }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import f2 from "../../public/data/f2/data.json";
import f3 from "../../public/data/f3/data.json";
import f4 from "../../public/data/f4/data.json";
import f5 from "../../public/data/f5/data.json";
import f6 from "../../public/data/f6/data.json";
import f7 from "../../public/data/f7/data.json";

import { onMounted, reactive, ref, computed } from "vue";
import { CFormSelect } from "@coreui/vue";

// "@coreui/coreui": "^4.1.6",
// "@coreui/vue": "^4.3.0",

const categorySearchQuery = ref("");
const typeSearchQuery = ref("");
const companySearchQuery = ref("");
const investmentStageSearchQuery = ref("");
const regionSearchQuery = ref("");
const countrySearchQuery = ref("");
const accelerationNeedsSearchQuery = ref("");
export default {
  setup() {
    const products = reactive(f2.concat(f3).concat(f4).concat(f5).concat(f6).concat(f7));

    const categoryOptions = [...new Set(products.map((x) => x.Category))].sort();
    const typeOptions = [...new Set(products.map((x) => x.Type))].sort();
    const companyOptions = [...new Set(products.map((x) => x.PartOfACompany))].sort();
    const investmentStageOptions = [...new Set(products.map((x) => x.Stage))].sort();
    const regionOptions = [...new Set(products.map((x) => x.Region))].sort();
    const countryOptions = [...new Set(products.map((x) => x.Country))].sort();
    const accelerationNeedsOptions = [
      ...new Set(products.map((x) => x.AccelerationNeeds)),
    ].sort();

    const searchedProducts = computed(() => {
      const foundProducts = products.filter((product) => {
        return (
          (categorySearchQuery.value === "" ||
            product.Category.toLowerCase().indexOf(
              categorySearchQuery.value.toLowerCase()
            ) != -1) &&
          (typeSearchQuery.value === "" ||
            product.Type.toLowerCase().indexOf(typeSearchQuery.value.toLowerCase()) !=
              -1) &&
          (companySearchQuery.value === "" ||
            product.PartOfACompany.toLowerCase().indexOf(
              companySearchQuery.value.toLowerCase()
            ) != -1) &&
          (investmentStageSearchQuery.value === "" ||
            product.Stage.toLowerCase().indexOf(
              investmentStageSearchQuery.value.toLowerCase()
            ) != -1) &&
          (regionSearchQuery.value === "" ||
            product.Region.toLowerCase().indexOf(regionSearchQuery.value.toLowerCase()) !=
              -1) &&
          (countrySearchQuery.value === "" ||
            product.Country.toLowerCase().indexOf(
              countrySearchQuery.value.toLowerCase()
            ) != -1) &&
          (accelerationNeedsSearchQuery.value === "" ||
            product.AccelerationNeeds.toLowerCase().indexOf(
              accelerationNeedsSearchQuery.value.toLowerCase()
            ) != -1)
        );
      });
      return foundProducts;
    });

    const resultCount = computed(() => {
      return searchedProducts.value.length;
    });

    onMounted(async () => {});
    return {
      categoryOptions,
      typeOptions,
      companyOptions,
      investmentStageOptions,
      regionOptions,
      countryOptions,
      accelerationNeedsOptions,
      searchedProducts,
      categorySearchQuery,
      typeSearchQuery,
      companySearchQuery,
      investmentStageSearchQuery,
      regionSearchQuery,
      countrySearchQuery,
      accelerationNeedsSearchQuery,
      resultCount,
    };
  },
  methods: {
    categoryChangeHandler(event) {
      categorySearchQuery.value = event.target.value;
    },
    typeChangeHandler(event) {
      typeSearchQuery.value = event.target.value;
    },
    companyChangeHandler(event) {
      companySearchQuery.value = event.target.value;
    },
    investmentStageChangeHandler(event) {
      investmentStageSearchQuery.value = event.target.value;
    },
    regionChangeHandler(event) {
      regionSearchQuery.value = event.target.value;
    },
    countryChangeHandler(event) {
      countrySearchQuery.value = event.target.value;
    },
    accelerationNeedsChangeHandler(event) {
      accelerationNeedsSearchQuery.value = event.target.value;
    },
  },
  components: {
    CFormSelect,
  },
};
</script>
