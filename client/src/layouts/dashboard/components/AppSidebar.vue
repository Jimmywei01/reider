<template>
  <div class="app-aside">
    <el-menu
      :default-active="activeIndex"
      @select="handleItemSelect"
      router
    >
      <template v-for="menuItem in menuList()">
        <el-menu-item
          class="app-aside__menu-item"
          :index="menuItem.name"
          :key="menuItem.name"
        >
          <i :class="['app-aside__icon', `${menuItem.meta.icon}`]" />
          <span>{{menuItem.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  data () {
    return {
      activeIndex: this.$route.name,
      identity: this.$store.getters.user.identity,
      roles: this.$store.getters.roles
    }
  },
  /**
    @method
      handleItemSelect   顯示側邊 router name
      menuList           依權限判斷要顯示的 router
  */
  methods: {
    handleItemSelect (index) {
      if (this.activeIndex !== index) {
        this.activeIndex = index
        this.$router.push({ name: index })
      }
    },
    menuList () {
      if (this.identity === 'editor') {
        this.$router.options.routes[1].children = this.roles
        return this.$router.options.routes[1].children
      } else {
        return this.$router.options.routes[1].children
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-aside {
    &__icon {
      margin-right: 2rem;
    }
    &__menu-item {
      padding-left: 1.4rem;
      color: #BFCBD9;
      background-color: #304156;
      &:hover,
      &:focus {
        background-color: #263445;
      }
    }
  }
</style>
