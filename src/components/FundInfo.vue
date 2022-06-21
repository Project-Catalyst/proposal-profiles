<template>
  <div class="ui cards" style="margin: 10px">
    <input style="margin: 10px" type="text" placeholder="by category..." v-model="categorySearchQuery" />
    <input style="margin: 10px" type="text" placeholder="by type..." v-model="typeSearchQuery" />
    <input style="margin: 10px" type="text" placeholder="by company..." v-model="companySearchQuery" />
    <input style="margin: 10px" type="text" placeholder="by investment stage..." v-model="investmentStageSearchQuery" />
    <input style="margin: 10px" type="text" placeholder="by region..." v-model="regionSearchQuery" />
    <input style="margin: 10px" type="text" placeholder="by country..." v-model="countrySearchQuery" />
    <input style="margin: 10px" type="text" placeholder="by acceleration needs..." v-model="accelerationNeedsSearchQuery" />
    <div>
      query result count {{resultCount}}
    </div>
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
export default {
  setup() {
    const products = reactive(f2.concat(f3).concat(f4).concat(f5).concat(f6).concat(f7));
    
    const categorySearchQuery = ref("");
    const typeSearchQuery = ref("");
    const companySearchQuery = ref("");
    const investmentStageSearchQuery = ref("");
    const regionSearchQuery = ref("");
    const countrySearchQuery = ref("");
    const accelerationNeedsSearchQuery = ref("");

    const searchedProducts = computed(() => {
      const foundProducts =  products.filter((product) => {
          return (
            (categorySearchQuery.value === "" || product.Category.toLowerCase().indexOf(categorySearchQuery.value.toLowerCase()) != -1) &&
            (typeSearchQuery.value === "" || product.Type.toLowerCase().indexOf(typeSearchQuery.value.toLowerCase()) != -1) &&
            (companySearchQuery.value === "" || product.PartOfACompany.toLowerCase().indexOf(companySearchQuery.value.toLowerCase()) != -1) &&
            (investmentStageSearchQuery.value === "" || product.Stage.toLowerCase().indexOf(investmentStageSearchQuery.value.toLowerCase()) != -1) &&
            (regionSearchQuery.value === "" || product.Region.toLowerCase().indexOf(regionSearchQuery.value.toLowerCase()) != -1) &&
            (countrySearchQuery.value === "" || product.Country.toLowerCase().indexOf(countrySearchQuery.value.toLowerCase()) != -1) &&
            (accelerationNeedsSearchQuery.value === "" || product.AccelerationNeeds.toLowerCase().indexOf(accelerationNeedsSearchQuery.value.toLowerCase()) != -1)
          );
        });
      return foundProducts
    });

    const resultCount = computed(() => {
       return searchedProducts.value.length
    })

    onMounted(async () => {});
    return { searchedProducts, 
    categorySearchQuery,  typeSearchQuery, companySearchQuery, investmentStageSearchQuery, regionSearchQuery, countrySearchQuery, accelerationNeedsSearchQuery, resultCount};
  },
};
</script>
