<template>
  <ClientOnly>
    <div
      class="grid grid-cols-[max-content_1fr] grid-rows-[max-content_1fr] min-h-screen"
    >
      <nav
        class="col-start-2 col-end-3 row-start-1 row-end-2 p-4 bg-primary h-14 shadow"
      >
        <ULink>s</ULink>
      </nav>
      <ul
        class="col-start-1 col-end-2 row-start-1 row-end-3 bg-primary p-4 flex flex-col gap-y-4 w-72 shadow"
      >
        <ULink
          to="/"
          target="_blank"
          active-class="text-white hover:bg-primary-700 p-2 rounded"
          inactive-class="text-white hover:bg-primary-dark p-2 rounded"
          class="flex items-center justify-center h-14"
        >
          Logo
        </ULink>

        <!-- Dashboard -->
        <ULink
          active-class="text-white hover:bg-primary-700 p-2 rounded"
          inactive-class="text-white hover:bg-primary-dark p-2 rounded"
          class="flex items-center justify-between"
          to="/panel/dashboard"
        >
          <div class="flex items-center gap-x-2">
            <UIcon name="i-heroicons-rectangle-group-20-solid" />
            Dashboard
          </div>
        </ULink>

        <!-- Products -->
        <PanelSidebarMenu label="Products">
          <PanelSidebarMenuItem
            link="/panel/products/add"
            label="Add"
            icon="i-heroicons-plus"
          />
          <PanelSidebarMenuItem
            link="/panel/products"
            label="List"
            icon="i-heroicons-table-cells"
          />
        </PanelSidebarMenu>

        <!-- Users -->
        <PanelSidebarMenu label="Users">
          <PanelSidebarMenuItem
            link="/panel/users/add"
            label="Add"
            icon="i-heroicons-plus"
          />
          <PanelSidebarMenuItem
            link="/panel/users"
            label="List"
            icon="i-heroicons-table-cells"
          />
        </PanelSidebarMenu>

        <!-- Categories -->
        <PanelSidebarMenu label="Categories">
          <PanelSidebarMenuItem
            link="/panel/categories/add"
            label="Add"
            icon="i-heroicons-plus"
          />
          <PanelSidebarMenuItem
            link="/panel/categories"
            label="List"
            icon="i-heroicons-table-cells"
          />
        </PanelSidebarMenu>
      </ul>

      <!-- Main Content -->
      <main class="p-4 bg-gray-100">
        <slot />
      </main>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts"></script>
