<script setup lang="ts">
import { ref } from 'vue'

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
}

interface Testimonial {
  id: number
  name: string
  company: string
  quote: string
  image: string
}

const teamMembers = ref<TeamMember[]>([
  {
    id: 1,
    name: 'Sophia Reynolds',
    role: 'Founder & Creative Director',
    bio: 'With over 15 years in the event industry, Sophia brings creative vision and leadership to every project, ensuring each event exceeds expectations.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Event Planning Manager',
    bio: 'Marcus excels at logistics and coordination, ensuring that every event runs smoothly from planning through execution.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9671e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
  },
  {
    id: 3,
    name: 'Isabella Martinez',
    role: 'Design Specialist',
    bio: 'With an eye for aesthetics and detail, Isabella transforms spaces into stunning environments that perfectly complement each event theme.',
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1289&q=80'
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Client Relations Manager',
    bio: 'James is dedicated to ensuring client satisfaction, maintaining communication throughout the planning process and beyond.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
  }
])

const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    name: 'Emily & David',
    company: 'Wedding Clients',
    quote: 'Xafladia transformed our wedding day into an absolute dream. Every detail was perfect, and we could actually relax and enjoy our special day knowing everything was in their capable hands.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1289&q=80'
  },
  {
    id: 2,
    name: 'Michael Thompson',
    company: 'Corporate Client',
    quote: 'Our annual conference was flawlessly executed by the Xafladia team. The attention to detail and professionalism impressed both our team and our attendees. We will definitely work with them again.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    company: 'Charity Gala Organizer',
    quote: 'Xafladia helped us raise more funds than ever before at our annual gala. Their creativity and organization made the event memorable, which resulted in increased donations and sponsor interest.',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
  }
])

// Milestone data
const milestones = [
  {
    year: '2010',
    title: 'Founded',
    description: 'Xafladia was established with a vision to create exceptional events.'
  },
  {
    year: '2013',
    title: 'Expansion',
    description: 'Expanded services to include corporate events and galas.'
  },
  {
    year: '2016',
    title: 'Award Winner',
    description: 'Named "Best Event Management Company" by Industry Leaders.'
  },
  {
    year: '2019',
    title: 'International',
    description: 'Began coordinating events in international locations.'
  },
  {
    year: '2022',
    title: 'Digital Innovation',
    description: 'Launched virtual and hybrid event capabilities.'
  }
]

// For testimonial carousel
const currentTestimonial = ref(0)

function nextTestimonial() {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length
}

function prevTestimonial() {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.value.length) % testimonials.value.length
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-xafladia-primary text-white py-20">
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">About Xafladia</h1>
        <p class="text-lg max-w-2xl mx-auto">
          Learn about our journey, our team, and our commitment to creating unforgettable events.
        </p>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2">
            <h2 class="text-3xl font-bold mb-6 text-xafladia-dark">Our Story</h2>
            <p class="mb-4 text-gray-700">
              Xafladia was born from a passion for creating memorable moments and celebrating life's special occasions. Founded in 2010, we began as a small team with big dreams, dedicated to transforming events from ordinary to extraordinary.
            </p>
            <p class="mb-4 text-gray-700">
              Our philosophy is simple: every event should tell a story and create lasting memories. We believe in the power of personalized experiences that reflect the unique vision and personality of each client.
            </p>
            <p class="mb-4 text-gray-700">
              Over the years, we've had the privilege of orchestrating a diverse range of events, from intimate weddings to large corporate galas, each with its own distinctive character and charm. Our commitment to excellence has allowed us to grow and evolve, but our core values remain unchanged: creativity, attention to detail, and exceptional service.
            </p>
          </div>
          <div class="md:w-1/2">
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Team collaboration"
                class="rounded-lg shadow-lg"
              />
              <div class="absolute -bottom-6 -right-6 bg-xafladia-secondary rounded-lg p-6 shadow-xl w-40 h-40 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="text-3xl font-bold">12+</div>
                  <div class="text-sm font-medium">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="section bg-xafladia-light">
      <div class="container">
        <h2 class="section-title">Our Journey</h2>

        <div class="relative max-w-4xl mx-auto mt-12">
          <!-- Timeline Line -->
          <div class="absolute left-0 md:left-1/2 h-full w-1 bg-xafladia-primary top-0 transform md:-translate-x-1/2"></div>

          <!-- Timeline Items -->
          <div class="space-y-12">
            <div
              v-for="(milestone, index) in milestones"
              :key="index"
              class="relative"
            >
              <!-- Year Marker -->
              <div
                class="absolute left-0 md:left-1/2 w-12 h-12 bg-xafladia-primary rounded-full flex items-center justify-center text-white font-bold -translate-x-1/2 z-10"
              >
                {{ milestone.year.substring(2) }}
              </div>

              <!-- Content -->
              <div
                class="ml-16 md:ml-0 md:w-5/12 p-4 bg-white rounded-lg shadow-md"
                :class="index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'"
              >
                <h3 class="text-xl font-bold text-xafladia-primary">{{ milestone.title }}</h3>
                <div class="text-sm text-xafladia-secondary font-medium mb-2">{{ milestone.year }}</div>
                <p class="text-gray-600">{{ milestone.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section bg-white">
      <div class="container">
        <h2 class="section-title">Meet Our Team</h2>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Our dedicated team of professionals brings expertise, creativity, and passion to every event we manage.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div class="h-64 overflow-hidden">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
              />
            </div>

            <div class="p-6">
              <h3 class="text-xl font-bold mb-1">{{ member.name }}</h3>
              <div class="text-xafladia-primary font-medium mb-3">{{ member.role }}</div>
              <p class="text-gray-600">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section bg-xafladia-dark text-white">
      <div class="container">
        <h2 class="section-title text-white">What Our Clients Say</h2>

        <div class="relative max-w-4xl mx-auto mt-12">
          <!-- Testimonial Carousel -->
          <div class="overflow-hidden">
            <div
              class="flex transition-transform duration-500"
              :style="{ transform: `translateX(-${currentTestimonial * 100}%)` }"
            >
              <div
                v-for="testimonial in testimonials"
                :key="testimonial.id"
                class="w-full flex-shrink-0 px-4"
              >
                <div class="bg-white text-xafladia-dark p-8 rounded-lg shadow-lg">
                  <div class="flex items-center mb-6">
                    <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        :src="testimonial.image"
                        :alt="testimonial.name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 class="text-xl font-bold">{{ testimonial.name }}</h3>
                      <div class="text-xafladia-primary font-medium">{{ testimonial.company }}</div>
                    </div>
                  </div>

                  <blockquote class="text-gray-600 italic">
                    "{{ testimonial.quote }}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-center mt-8 space-x-4">
            <button
              @click="prevTestimonial"
              class="w-12 h-12 rounded-full bg-white text-xafladia-primary flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              @click="nextTestimonial"
              class="w-12 h-12 rounded-full bg-white text-xafladia-primary flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Dots Indicator -->
          <div class="flex justify-center mt-4 space-x-2">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              @click="currentTestimonial = index"
              class="w-3 h-3 rounded-full transition-colors"
              :class="currentTestimonial === index ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'"
              :aria-label="`Go to testimonial ${index + 1}`"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section bg-white">
      <div class="container">
        <h2 class="section-title">Our Values</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="text-center p-6">
            <div class="w-20 h-20 bg-xafladia-primary rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>

            <h3 class="text-xl font-bold mb-2">Creativity</h3>
            <p class="text-gray-600">
              We approach each event with fresh eyes and innovative thinking to create unique, memorable experiences.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-20 h-20 bg-xafladia-secondary rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <h3 class="text-xl font-bold mb-2">Excellence</h3>
            <p class="text-gray-600">
              We are committed to delivering the highest quality service and attention to detail in every aspect of our work.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-20 h-20 bg-xafladia-accent rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>

            <h3 class="text-xl font-bold mb-2">Client Focus</h3>
            <p class="text-gray-600">
              We listen carefully to our clients' needs and preferences, making their vision our priority.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="bg-xafladia-accent text-white py-16">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          Contact our team today to start planning your next exceptional event.
        </p>
        <router-link to="/contact" class="btn bg-white text-xafladia-accent hover:bg-gray-100">
          Contact Us
        </router-link>
      </div>
    </section>
  </div>
</template>