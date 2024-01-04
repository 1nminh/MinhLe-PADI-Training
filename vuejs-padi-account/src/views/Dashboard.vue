<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      isLoading: true,
      isAddingNew: false,
      newUser: {
        name: "",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1223.jpg",
        country: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getUsers", "getError"]),
  },
  methods: {
    ...mapActions(["fetchUsers", "deleteUser"]),
    async handleDeleteUser(userId) {
      if (confirm("Are you sure you want to delete this user?")) {
        await this.deleteUser(userId);
      }
    },
    async addNewUser() {
      this.scrollToTop();
      this.isAddingNew = true;
    },
    async saveNewUser() {
      try {
        await this.$store.dispatch("createUser", this.newUser);
        this.isAddingNew = false;
        this.newUser = {
          name: "",
          avatar:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1223.jpg",
          country: "",
        };
        this.scrollToBottom();
      } catch (error) {
        console.error("Error adding new user:", error);
      }
    },
    cancelAddNewUser() {
      this.isAddingNew = false;
    },
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  async mounted() {
    await this.fetchUsers();
    this.isLoading = false;
  },
};
</script>
<template>
  <div class="container">
    <h2>User List</h2>
    <p v-if="isLoading">loading</p>
    <ul v-else class="responsive-table">
      <li class="table-header">
        <div class="col col-1">Id</div>
        <div class="col col-2">Avatar</div>
        <div class="col col-3">Name</div>
        <div class="col col-4">Country</div>
        <div class="col col-5">Create date</div>
        <div class="col col-6">Action</div>
      </li>
      <li v-if="isAddingNew" class="table-row">
        <div class="col col-1">{{ getUsers.length + 1 }}</div>
        <div class="col col-2">
          <img :src="this.newUser.avatar" alt="User Avatar" class="avatar" />
          <!-- <input v-model="newUser.avatar" placeholder="Avatar URL" /> -->
        </div>
        <div class="col col-3">
          <input v-model="newUser.name" placeholder="Name" />
        </div>
        <div class="col col-4">
          <input v-model="newUser.country" placeholder="Country" />
        </div>
        <div class="col col-5"></div>
        <div class="col col-6">
          <button type="button" @click="saveNewUser()">Save</button>
          <button type="button" @click="cancelAddNewUser()">Cancel</button>
        </div>
      </li>
      <li v-for="user in getUsers" :key="user.id" class="table-row">
        <div class="col col-1">{{ user.id }}</div>
        <div class="col col-2">
          <img :src="user.avatar" alt="User Avatar" class="avatar" />
        </div>
        <div class="col col-3">{{ user.name }}</div>
        <div class="col col-4">{{ user.country }}</div>
        <div class="col col-5">{{ user.createdAt }}</div>
        <div class="col col-6">
          <button type="button" @click="addNewUser()">Add new</button>
          <button type="button" class="">Edit</button>
          <button type="button" @click="handleDeleteUser(user.id)">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
  <p v-if="getError">{{ getError }}</p>
</template>
<style lang="scss" scoped>
body {
  font-family: "lato", sans-serif;
}
.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
  small {
    font-size: 0.5em;
  }
}

.responsive-table {
  li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .table-header {
    background-color: #95a5a6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  }
  .col-1 {
    flex-basis: 10%;
  }
  .col-2 {
    flex-basis: 10%;
  }
  .col-3 {
    flex-basis: 20%;
  }
  .col-4 {
    flex-basis: 20%;
  }
  .col-5 {
    flex-basis: 20%;
  }
  .col-6 {
    flex-basis: 20%;
  }

  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }
    // .table-row {
    // }
    li {
      display: block;
    }
    .col {
      flex-basis: 100%;
    }
    .col {
      display: flex;
      padding: 10px 0;
      &:before {
        color: #6c7a89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
  .avatar {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
</style>
