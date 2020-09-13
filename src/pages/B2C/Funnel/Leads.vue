<template>
    <Index>
      <div class="kanban-column">
        <div class="kanban-sorting">
          <label>Sort by:</label>
          <ul class="kanban-sort">
            <li>
              category
            </li>
            <li>
              date
            </li>
          </ul>
        </div>
        <div class="kanban-title purple">
          <span>New Lead</span>
        </div>
        <draggable class="kanban-list" :list="arrLead" group="tasks">
          <div class="kanban-item" @click="kanbandata(lead)" v-for="lead in arrLead" :key="lead.name">
            <div class="kanban-col">
              <label>Name:</label> 
              <span>{{ lead.name }}</span>
            </div>
            <div class="kanban-col">
              <label>Category:</label> 
              <span>{{ lead.category }}</span>
            </div>
            <span class="kanban-date">{{ lead.date }}</span>
          </div>
        </draggable>
        <div class="kanban-add">
          <span>+ New lead</span>
        </div>
      </div>
      <div class="kanban-column">
        <div class="kanban-sorting">
          <label>Sort by:</label>
          <ul class="kanban-sort">
            <li>
              category
            </li>
            <li>
              date
            </li>
          </ul>
        </div>
        <div class="kanban-title blue">
          <span>Temporary dealer card</span>
        </div>
        <draggable class="kanban-list" :list="arrDealerCard" group="tasks">
          <div class="kanban-item" v-for="dealer in arrDealerCard" :key="dealer.name">
            <div class="kanban-col">
              <label>Name:</label> 
              <span>{{ dealer.name }}</span>
            </div>
            <div class="kanban-col">
              <label>Category:</label> 
              <span>{{ dealer.category }}</span>
            </div>
          </div>
        </draggable>
      </div>
      <div class="kanban-column">
        <div class="kanban-sorting">
          <label>Sort by:</label>
          <ul class="kanban-sort">
            <li>
              category
            </li>
            <li>
              date
            </li>
          </ul>
        </div>
        <div class="kanban-title orange">
          <span>Moderararea</span>
        </div>
        <draggable class="kanban-list" :list="arrModerararea" group="tasks">
          <div class="kanban-item" v-for="moderararea in arrModerararea" :key="moderararea.name">
            <div class="kanban-col">
              <label>Name:</label> 
              <span>{{ moderararea.name }}</span>
            </div>
            <div class="kanban-col">
              <label>Category:</label> 
              <span>{{ moderararea.category }}</span>
            </div>
          </div>
        </draggable>
      </div>
      <div class="kanban-column">
        <div class="kanban-sorting">
          <label>Sort by:</label>
          <ul class="kanban-sort">
            <li>
              category
            </li>
            <li>
              date
            </li>
          </ul>
        </div>
        <div class="kanban-title yellow">
          <span>In wait</span>
        </div>
        <draggable class="kanban-list" :list="arrInwait" group="tasks">
          <div class="kanban-item" v-for="wait in arrInwait" :key="wait.name">
            <div class="kanban-col">
              <label>Name:</label> 
              <span>{{ wait.name }}</span>
            </div>
            <div class="kanban-col">
              <label>Category:</label> 
              <span>{{ wait.category }}</span>
            </div>
          </div>
        </draggable>
      </div>
      <div class="kanban-column">
        <div class="kanban-sorting">
          <label>Sort by:</label>
          <ul class="kanban-sort">
            <li>
              category
            </li>
            <li>
              date
            </li>
          </ul>
        </div>
        <div class="kanban-title blue-black">
          <span>Payment required</span>
        </div>
        <draggable class="kanban-list" :list="arrPaymentreq" group="tasks">
          <div class="kanban-item" v-for="payment in arrPaymentreq" :key="payment.name">
            <div class="kanban-col">
              <label>Name:</label> 
              <span>{{ payment.name }}</span>
            </div>
            <div class="kanban-col">
              <label>Category:</label> 
              <span>{{ payment.category }}</span>
            </div>
          </div>
        </draggable>
      </div>
      <Modal class="kanban-lead" name="modal" :draggable='true' :width="300" :height="380">
        <div class="lead">
          <div class="lead__title">
            <div class="lead__close" />
            <span>Lead</span>
          </div>
          <div class="lead__content">
            <span class="lead__name">{{ leadname }}</span>
            <ul class="lead__control">
              <li>
                <img src="/src/assets/images/notification.svg" alt="notification">
              </li>
              <li>
                <img src="/src/assets/images/mail.svg" alt="notification">
              </li>
              <li>
                <img src="/src/assets/images/sms.svg" alt="notification">
              </li>
              <li>
                <img src="/src/assets/images/phone.svg" alt="notification">
              </li>
              <li>
                <img src="/src/assets/images/whatsapp.svg" alt="notification">
              </li>
              <li>
                <img src="/src/assets/images/telegram.svg" alt="notification">
              </li>
            </ul>
            <ul class="lead__info">
              <li>
                <label>Contact time:</label>
                <span>from 15:00 to 18:00</span>
              </li>
              <li>
                <label>Interface lang:</label>
                <span>{{ leadlang }}</span>
              </li>
              <li>
                <label>Sourse:</label>
                <span>{{ leadsourse }}</span>
              </li>
              <li>
                <label>Geolocation:</label>
                <span>{{ leadgeolocation }}</span>
              </li>
            </ul>
            <div class="lead__btn">
              <div class="btn btn__orange">Remarketing</div>
              <div class="btn btn__blue">Temporary dealer</div>
              <div class="btn btn__blueb">Delete</div>
            </div>
          </div>
        </div>
      </Modal>
    </Index>
</template>

<script>
import Index from "~/pages/B2C/Funnel/Index.vue"
import draggable from 'vuedraggable'
export default {
  components: {
    Index,
    draggable
  },
  data() {
    return{
      leadname: '',
      leadname: '',
      leadcategory: '', 
      leadCode: '',
      leadphone: '',
      leadsourse: '',
      leadlang: '',
      leadgeolocation: '',
      newLead: "",
      arrLead: [
        {
          name: "Tash Sultana",
          category: "Accomodation",
          countrtyCode: "+38",
          phoneNumber: "123456789",
          email: "mail@yandex.ru",
          date: "7 days ago",
          lang: "Italy",
          source: "UTM tag",
          geolocation: "Milano"
        },
        {
          name: "Monica Belluci",
          category: "Atraction",
          countrtyCode: "+38",
          phoneNumber: "123456789",
          email: "mail@yandex.ru",
          date: "7 days ago",
          lang: "Italy",
          source: "UTM tag",
          geolocation: "Milano"
        },
        {
          name: "Mario Rossi",
          category: "Accomodation",
          countrtyCode: "+38",
          phoneNumber: "123456789",
          email: "mail@yandex.ru",
          date: "7 days ago",
          lang: "Italy",
          source: "UTM tag",
          geolocation: "Milano"
        },
        {
          name: "Luisa Rossi",
          category: "Accomodation",
          countrtyCode: "+38",
          phoneNumber: "123456789",
          email: "mail@yandex.ru",
          date: "7 days ago",
          lang: "Italy",
          source: "UTM tag",
          geolocation: "Milano"
        }
      ],
      arrDealerCard: [],
      arrModerararea: [],
      arrInwait: [],
      arrPaymentreq: []
    }
  },
  methods: {
    add() {
      if(this.newLead) {
        this.arrLead.push({name: this.newLead})
        this.newLead="";
      }
    },
    kanbandata(lead) {
      this.leadname = lead.name
      this.leadcategory = lead.category
      this.leadCode = lead.countrtyCode
      this.leadphone = lead.phoneNumber
      this.leadsourse = lead.source
      this.leadlang = lead.lang
      this.leadgeolocation = lead.geolocation
      this.$modal.show('modal');
    }
  },
  mounted () {
  }
}
</script>

<style>
</style>