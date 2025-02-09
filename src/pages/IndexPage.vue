<template>
  <q-page class="q-pa-md flex flex-center bg-grey-2">
    <q-card class="survey-card q-pa-sm" style="max-width: 800px; width: 100%">
      <!-- Header Section -->
      <q-card-section>
        <div class="text-h5 text-bold text-center q-mb-md">سلام دوست عزیز! 👋</div>
        <div class="text-body1 q-mb-md">
          پرسش‌نامه زیر بخشی از پایان‌نامه پژوهشی من در خصوص اثرات احتمالی خواب بر انگیزه‌ی تحصیلی ما دانشجویان عزیز
          است.
          این سوالات به صورتی طرح شده که کمترین زمان ممکن را برای جواب دادن نیاز داشته باشد.
          به همین خاطر خواهشمندم چند دقیقه از وقت عزیزتان را در اختیار بگذارید.
        </div>
      </q-card-section>

      <q-form @submit.prevent="submitForm">
        <q-stepper v-model="step" ref="stepper" color="primary" flat animated header-class="q-mx-md"
          :vertical="$q.screen.lt.md">
          <!-- Step 1: Personal Information -->
          <q-step :name="1" title="اطلاعات شخصی" icon="person" class="q-pa-none" :done="step > 1">
            <!-- Personal Information Section -->
            <q-card-section>
              <q-list bordered separator class="rounded-borders">
                <!-- Gender -->
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-weight-medium">جنسیت:</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-option-group :options="genderOptions" type="radio" v-model="formData.gender" inline
                      color="primary" />
                  </q-item-section>
                </q-item>

                <!-- Marital Status -->
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-weight-medium">وضعیت تأهل:</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-option-group :options="maritalStatusOptions" type="radio" v-model="formData.maritalStatus" inline
                      color="primary" />
                  </q-item-section>
                </q-item>

                <!-- Education Level -->
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-weight-medium">مقطع تحصیلی:</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-option-group :options="educationLevelOptions" type="radio" v-model="formData.educationLevel"
                      inline color="primary" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>

            <!-- Sleep Status Questions -->
            <q-card-section>
              <q-list bordered separator class="rounded-borders">
                <!-- Sleep Medications -->
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-weight-medium">
                      آیا برای خواب راحت از داروهای خواب‌آور یا داروهای موثر بر خواب استفاده می‌کنید؟
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-option-group :options="yesNoOptions" type="radio" v-model="formData.sleepMeds" inline
                      color="primary" />
                  </q-item-section>
                </q-item>

                <!-- Drug Use -->
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-weight-medium">
                      آیا از مواد مخدر یا هر نوع مواد روانگردان استفاده می‌کنید؟
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-option-group :options="yesNoOptions" type="radio" v-model="formData.drugUse" inline
                      color="primary" />
                  </q-item-section>
                </q-item>

                <!-- Mental Disorder -->
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-weight-medium">
                      آیا سابقه‌ی اختلالات روانپزشکی داشته‌اید؟
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-option-group :options="yesNoOptions" type="radio" v-model="formData.mentalDisorder" inline
                      color="primary" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-step>

          <!-- Step 2: Sleep Status Evaluation -->
          <q-step :name="2" title="ارزیابی وضعیت خواب" icon="bedtime" :done="step > 2">
            <!-- step 2 starts -->
            <!-- Sleep Status Evaluation Section -->
            <q-card-section>
              <div class="text-subtitle1 text-weight-medium q-mb-md">
                سوالات زیر وضعیت حال حاضر شما رو بررسی می کند (لطفاً وضعیت خودتون رو علامت بزنید)
              </div>

              <!-- Responsive table for desktop and mobile -->
              <q-table :rows="sleepStatusRows" :columns="sleepStatusColumns" row-key="id" flat bordered hide-pagination
                :pagination="{ rowsPerPage: 0 }" class="sleep-status-table gt-xs q-mb-md">

                <template v-slot:header="props">
                  <q-tr :props="props">
                    <q-th class="text-center q-mb-none" style="min-width: 100px;">مقیاس</q-th>
                    <q-th class="text-right q-mb-none" style="min-width: 120px;">وضعیت</q-th>
                    <q-th class="text-center" style="width: 50px;"></q-th>
                  </q-tr>
                </template>

                <template v-slot:body="props">
                  <q-tr :props="props">
                    <q-td key="scale" :props="props" class="text-center">
                      {{ props.row.scale }}
                    </q-td>
                    <q-td key="status" :props="props" class="text-right">
                      {{ props.row.status }}
                    </q-td>
                    <q-td key="selection" :props="props" class="text-center">
                      <q-radio v-model="formData.sleepStatus" :val="props.row.scale.toString()" color="primary" />
                    </q-td>
                  </q-tr>
                </template>
              </q-table>

              <!-- Alternative for mobile devices -->
              <div class="q-gutter-md q-pa-md q-display-none lt-sm q-md-block">
                <div v-for="row in sleepStatusRows" :key="row.id" class="q-mb-md">
                  <q-radio v-model="formData.sleepStatus" :val="row.scale.toString()"
                    :label="row.scale + ' . ' + row.status" color="primary" />
                </div>
              </div>

            </q-card-section>
            <!-- step 2 ends -->
          </q-step>

          <!-- Step 3: Motivation Assessment -->
          <q-step :name="3" title="ارزیابی انگیزه" icon="psychology" :done="step > 3">
            <q-card-section>
              <div class="text-subtitle1 text-weight-medium q-mb-md">
                سوالات زیر در خصوص حس شما نسبت به پزشکی و بررسی انگیزه‌ی شما برای ادامه تحصیل این رشته می‌باشد.
                لطفا پاسخ موردنظرتان را با دقت علامت بزنید. ممنون.
              </div>

              <!-- Loop through motivation questions -->
              <q-list bordered separator class="rounded-borders">
                <q-item v-for="(question, index) in motivationRows" :key="index">
                  <q-item-section>
                    <q-item-label class="text-weight-medium">
                      {{ question.number }}. {{ question.question }}
                    </q-item-label>

                    <!-- Loop through the options for each question -->
                    <q-item-label class="gt-xs q-gutter-x-lg">
                      <q-radio v-for="option in motivationOptions" :key="option.value"
                        v-model="formData.motivationAnswers[question.id]" :label="option.label" :val="option.value"
                        color="primary" class="q-mb-xs text-body2" />
                    </q-item-label>

                    <q-radio v-for="option in motivationOptions" :key="option.value"
                      v-model="formData.motivationAnswers[question.id]" :label="option.label" :val="option.value"
                      color="primary" class="q-mb-xs lt-sm text-body2" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-step>

          <!-- Step 4: Sleep Quality Assessment -->
          <q-step :name="4" title="کیفیت خواب" icon="hotel">
            <q-card-section>
              <div class="text-subtitle1 text-primary q-mb-md">
                پرسشنامه زیر در خصوص کیفیت خواب شماست. لطفاً با دقت به سوالات پاسخ دهید.
              </div>
              <div class="text-body1 q-mb-md">
                لطفاً در خصوص وضعیت خوابتان در طی ماه گذشته به سوالات زیر پاسخ دهید.
              </div>

              <q-list bordered separator class="rounded-borders">
                <!-- Sleep Time -->
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-weight-medium">
                      1. معمولا شب‌ها چه ساعتی می‌خوابید؟
                    </q-item-label>
                    <q-item-label>
                      <q-input outlined v-model="formData.sleepTime" mask="time" bg-color="grey-2">
                        <template v-slot:append>
                          <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-time v-model="formData.sleepTime" mask="HH:mm" style="border-radius: 15px;">
                                <div class="row items-center justify-end">
                                  <q-btn v-close-popup label="تائید" color="primary" flat />
                                </div>
                              </q-time>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- Wake Up Time -->
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-weight-medium">
                      3. معمولا صبح‌ها چه ساعتی از خواب بیدار می‌شوید؟
                    </q-item-label>

                    <q-item-label>
                      <q-input outlined v-model="formData.wakeUpTime" mask="time" bg-color="grey-2">
                        <template v-slot:append>
                          <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-time v-model="formData.wakeUpTime" mask="HH:mm" style="border-radius: 15px;">
                                <div class="row items-center justify-end">
                                  <q-btn v-close-popup label="تائید" color="primary" flat />
                                </div>
                              </q-time>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- Numerical Inputs -->
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-weight-medium">
                      2. مدت زمان به خواب رفتن (دقیقه):
                    </q-item-label>
                    <q-input v-model.number="formData.timeToFallAsleep" type="number" outlined min="0" step="1"
                      suffix="دقیقه" bg-color="grey-2" />
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>
                    <q-item-label class="text-weight-medium">
                      4. مدت زمان خواب شبانه (ساعت):
                    </q-item-label>
                    <q-input v-model.number="formData.sleepDuration" type="number" outlined min="0" step="0.5"
                      suffix="ساعت" bg-color="grey-2" />
                  </q-item-section>
                </q-item>

                <!-- Question 5 (Grid Selection) -->
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-weight-medium">
                      5. چند بار به خاطر موارد زیر در خوابیدن مشکل داشته‌اید؟
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section class="q-pl-none">
                    <q-item-label class="q-mb-none">الف. با گذشت 31 دقیقه نیز نتوانستید بخوابید.</q-item-label>
                    <q-item-label class="row">
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.cantFallAsleep" label="هیچ" val="none" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.cantFallAsleep" label="یک بار در هفته" val="onceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.cantFallAsleep" label="دوبار در هفته" val="twiceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.cantFallAsleep" label="سه بار یا بیشتر در هفته"
                          val="threeOrMore" />
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- ب -->
                <q-item>
                  <q-item-section class="q-pl-none">
                    <q-item-label class="q-mb-none">ب. نیمه‌های شب یا صبح زود از خواب بیدار شده‌اید.</q-item-label>
                    <q-item-label class="row">
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.wakeUpInTheNight" label="هیچ" val="none" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.wakeUpInTheNight" label="یک بار در هفته"
                          val="onceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.wakeUpInTheNight" label="دوبار در هفته"
                          val="twiceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.wakeUpInTheNight" label="سه بار یا بیشتر در هفته"
                          val="threeOrMore" />
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- پ -->
                <q-item>
                  <q-item-section class="q-pl-none">
                    <q-item-label class="q-mb-none">پ. وسط خواب شبانه مجبور شدید برای رفتن به توالت از رختخواب خارج
                      شوید.</q-item-label>
                    <q-item-label class="row">
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.getUpForToilet" label="هیچ" val="none" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.getUpForToilet" label="یک بار در هفته" val="onceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.getUpForToilet" label="دوبار در هفته" val="twiceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.getUpForToilet" label="سه بار یا بیشتر در هفته"
                          val="threeOrMore" />
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- ت -->
                <q-item>
                  <q-item-section class="q-pl-none">
                    <q-item-label class="q-mb-none">ت. عدم توانایی نفس کشیدن راحت طی خواب.</q-item-label>
                    <q-item-label class="row">
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.breathingIssue" label="هیچ" val="none" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.breathingIssue" label="یک بار در هفته" val="onceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.breathingIssue" label="دوبار در هفته" val="twiceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.breathingIssue" label="سه بار یا بیشتر در هفته"
                          val="threeOrMore" />
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- ث -->
                <q-item>
                  <q-item-section class="q-pl-none">
                    <q-item-label class="q-mb-none">ث. در خواب با صدای بلند خروپف کردید.</q-item-label>
                    <q-item-label class="row">
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.snoring" label="هیچ" val="none" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.snoring" label="یک بار در هفته" val="onceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.snoring" label="دوبار در هفته" val="twiceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.snoring" label="سه بار یا بیشتر در هفته"
                          val="threeOrMore" />
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- ج -->
                <q-item>
                  <q-item-section class="q-pl-none">
                    <q-item-label class="q-mb-none">ج. احساس سرمای زیاد (هنگام بخواب رفتن و یا طی مدت خواب که باعث بیدار
                      شدن
                      شما شود.)</q-item-label>
                    <q-item-label class="row">
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.cold" label="هیچ" val="none" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.cold" label="یک بار در هفته" val="onceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.cold" label="دوبار در هفته" val="twiceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.cold" label="سه بار یا بیشتر در هفته"
                          val="threeOrMore" />
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- چ -->
                <q-item>
                  <q-item-section class="q-pl-none">
                    <q-item-label class="q-mb-none">چ. احساس گرمای شدید (هنگام بخواب رفتن و یا طی مدت خواب که باعث بیدار
                      شدن
                      شما شود.)</q-item-label>
                    <q-item-label class="row">
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.hot" label="هیچ" val="none" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.hot" label="یک بار در هفته" val="onceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.hot" label="دوبار در هفته" val="twiceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.hot" label="سه بار یا بیشتر در هفته" val="threeOrMore" />
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- ح -->
                <q-item>
                  <q-item-section class="q-pl-none">
                    <q-item-label class="q-mb-none">ح. خواب‌های بد دیدن.</q-item-label>
                    <q-item-label class="row">
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.badDreams" label="هیچ" val="none" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.badDreams" label="یک بار در هفته" val="onceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.badDreams" label="دوبار در هفته" val="twiceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.badDreams" label="سه بار یا بیشتر در هفته"
                          val="threeOrMore" />
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- خ -->
                <q-item>
                  <q-item-section class="q-pl-none">
                    <q-item-label class="q-mb-none">خ. شکایت از درد طی مدت خواب.</q-item-label>
                    <q-item-label class="row">
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.pain" label="هیچ" val="none" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.pain" label="یک بار در هفته" val="onceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.pain" label="دوبار در هفته" val="twiceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepIssues.pain" label="سه بار یا بیشتر در هفته"
                          val="threeOrMore" />
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- د -->
                <q-item>
                  <q-item-section class="q-pl-none">
                    <q-item-label class="q-mb-none">د. سایر دلایل (لطفاً نوع مشکل را بنویسید.)</q-item-label>
                    <q-input v-model="formData.sleepIssues.other" dir="rtl" outlined class="q-my-sm" autogrow input-style="min-height: 130px;"
                      bg-color="grey-2" />
                  </q-item-section>
                </q-item>

                <!-- Question 6 -->
                <q-item>
                  <q-item-section class="q-pl-none">
                    <q-item-label class="q-mb-none">6. چند بار برای خوابیدن مجبور به استفاده از دارو (خودسرانه و یا با
                      تجویز
                      پزشک) شده‌اید؟</q-item-label>
                    <q-item-label class="row">
                      <div class="col-6">
                        <q-radio v-model="formData.medicationUsage" label="هیچ" val="none" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.medicationUsage" label="یک بار در هفته" val="onceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.medicationUsage" label="دوبار در هفته" val="twiceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.medicationUsage" label="سه بار یا بیشتر در هفته" val="threeOrMore" />
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- Question 7 -->
                <q-item>
                  <q-item-section class="q-pl-none">
                    <q-item-label class="q-mb-none">7. چند بار حین رانندگی، خوردن غذا یا شرکت در فعالیت‌های اجتماعی در
                      بیدار
                      ماندن مشکل داشته‌اید؟ (به سختی بیدار مانده‌اید)</q-item-label>
                    <q-item-label class="row">
                      <div class="col-6">
                        <q-radio v-model="formData.stayAwake" label="هیچ" val="none" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.stayAwake" label="یک بار در هفته" val="onceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.stayAwake" label="دوبار در هفته" val="twiceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.stayAwake" label="سه بار یا بیشتر در هفته" val="threeOrMore" />
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- Question 8 -->
                <q-item>
                  <q-item-section class="q-pl-none">
                    <q-item-label class="q-mb-none">8. چند بار این احساس را داشته‌اید که دیگر شور و ذوقی برای بدست آوردن
                      چیزی را ندارید؟</q-item-label>
                    <q-item-label class="row">
                      <div class="col-6">
                        <q-radio v-model="formData.motivationLoss" label="هیچ" val="none" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.motivationLoss" label="یک بار در هفته" val="onceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.motivationLoss" label="دوبار در هفته" val="twiceAWeek" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.motivationLoss" label="سه بار یا بیشتر در هفته" val="threeOrMore" />
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- Question 9 -->
                <q-item>
                  <q-item-section class="q-pl-none">
                    <q-item-label class="q-mb-none">9. در کل، کیفیت خواب خود طی ماه گذشته را چگونه توصیف
                      می‌کنید؟</q-item-label>
                    <q-item-label class="row">
                      <div class="col-6">
                        <q-radio v-model="formData.sleepQuality" label="بد" val="bad" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepQuality" label="خیلی بد" val="veryBad" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepQuality" label="خوب" val="good" />
                      </div>
                      <div class="col-6">
                        <q-radio v-model="formData.sleepQuality" label="خیلی خوب" val="veryGood" />
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-step>

          <!-- Stepper Navigation -->
          <template v-slot:navigation>
            <q-stepper-navigation>
              <div class="row justify-center q-gutter-md">
                <q-btn v-if="step > 1" flat color="primary" @click="previousStep" label="قبلی" />
                <q-btn v-if="step < 4" color="primary" @click="nextStep" label="بعدی" />
                <q-btn v-if="step === 4" color="primary" @click="submitForm" label="ارسال" :loading="submitting" />
              </div>
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';

const $q = useQuasar();
const stepper = ref(null);
const step = ref(1);
const submitting = ref(false);

// Form Data Structure
const formData = reactive({
  // Step 1: Personal Information
  gender: '',
  maritalStatus: '',
  educationLevel: '',
  sleepMeds: '',
  drugUse: '',
  mentalDisorder: '',

  // Step 2: Sleep Status
  sleepStatus: '',

  // Step 3: Motivation Assessment
  motivationAnswers: {},

  // Step 4: Sleep Quality Assessment
  sleepTime: '',
  wakeUpTime: '',
  timeToFallAsleep: null,
  sleepDuration: null,
  sleepIssues: {
    cantFallAsleep: '',
    wakeUpInTheNight: '',
    getUpForToilet: '',
    breathingIssue: '',
    snoring: '',
    cold: '',
    hot: '',
    badDreams: '',
    pain: '',
    other: ''
  },
  medicationUsage: '',
  stayAwake: '',
  motivationLoss: '',
  sleepQuality: ''
});

// Options for radio groups
const genderOptions = [
  { label: 'مرد', value: 'male' },
  { label: 'زن', value: 'female' }
];

const maritalStatusOptions = [
  { label: 'مجرد', value: 'single' },
  { label: 'متأهل', value: 'married' }
];

const educationLevelOptions = [
  { label: 'کارآموز', value: 'intern' },
  { label: 'کارورز', value: 'extern' },
];

const yesNoOptions = [
  { label: 'بله', value: 'yes' },
  { label: 'خیر', value: 'no' }
];

// Sleep status evaluation data
const sleepStatusRows = [
  { scale: 1, status: 'کاملاً هوشیار', id: 1 },
  { scale: 2, status: 'بسیار هوشیار', id: 2 },
  { scale: 3, status: 'هوشیار', id: 3 },
  { scale: 4, status: 'نسبتاً هوشیار', id: 4 },
  { scale: 5, status: 'نه هوشیار، نه خواب آلوده', id: 5 },
  { scale: 6, status: 'دارای نشانه های خواب آلودگی', id: 6 },
  { scale: 7, status: 'خواب آلود اما قادر به بیدار ماندن، به خودم نمی آورم', id: 7 },
  { scale: 8, status: 'خواب آلود، تمایلی برای بیدار ماندن', id: 8 },
  { scale: 9, status: 'خواب آلود، ترجیح می دهم دراز بکشم (نه خواب)', id: 9 },
  { scale: 10, status: 'شدیداً خواب آلود، "نمی تونم بیدار بمانم"', id: 10 }
];

const sleepStatusColumns = [
  { name: 'scale', align: 'center', label: 'مقیاس', field: 'scale' },
  { name: 'status', align: 'right', label: 'وضعیت', field: 'status' },
  { name: 'selection', align: 'center', label: '', field: 'selection' }
];

// Motivation assessment questions
const motivationRows = [
  {
    id: 1,
    number: 1,
    question: 'هنگام یادگیری مطالب پزشکی آرامش زیادی دارم.'
  },
  {
    id: 2,
    number: 2,
    question: 'فکر می کنم در مقایسه با دیگر دانشجویان برای تحصیل در رشته پزشکی بسیار مناسب می باشم.'
  },
  {
    id: 3,
    number: 3,
    question: 'انرژی زیادی برای تحصیل در رشته پزشکی صرف نمی کنم.'
  },
  {
    id: 4,
    number: 4,
    question: 'فکر می کنم رشته پزشکی رشته کسل کننده ای است.'
  },
  {
    id: 5,
    number: 5,
    question: 'فکر می کنم برای تحصیل در رشته پزشکی خیلی مناسب هستم.'
  },
  {
    id: 6,
    number: 6,
    question: 'تحصیل در رشته پزشکی را به عنوان کاری جالب توصیف می کنم.'
  },
  {
    id: 7,
    number: 7,
    question: 'برای تحصیل در رشته پزشکی تلاش بسیاری می کنم.'
  },
  {
    id: 8,
    number: 8,
    question: 'هنگام یادگیری مطالب پزشکی احساس دلواپسی زیادی می کنم.'
  },
  {
    id: 9,
    number: 9,
    question: 'فکر می کنم تحصیل در رشته پزشکی بسیار لذت بخش است.'
  },
  {
    id: 10,
    number: 10,
    question: 'برای اینکه در تحصیل رشته پزشکی موفق باشم تلاش زیادی انجام می دهم.'
  },
  {
    id: 11,
    number: 11,
    question: 'من هنگام انجام وظایف پزشکی احساس می کنم که تحت فشار هستم.'
  },
  {
    id: 12,
    number: 12,
    question: 'من از تحصیل در رشته پزشکی لذت فراوان می برم.'
  },
  {
    id: 13,
    number: 13,
    question: 'رشته پزشکی کاری است که من نمی توانم به خوبی آنرا انجام دهم.'
  },
  {
    id: 14,
    number: 14,
    question: 'تحصیل در رشته پزشکی برای من مانند سرگرمی است.'
  },
  {
    id: 15,
    number: 15,
    question: 'من هنگام انجام وظایف پزشکی، مضطرب هستم.'
  }
];

const motivationOptions = [
  { label: 'کاملاً موافقم', value: '5' },
  { label: 'موافقم', value: '4' },
  { label: 'نظری ندارم', value: '3' },
  { label: 'مخالفم', value: '2' },
  { label: 'کاملاً مخالفم', value: '1' }
];

// Step-specific validation functions
const validateStep1 = () => {
  const requiredFields = ['gender', 'maritalStatus', 'educationLevel', 'sleepMeds', 'drugUse', 'mentalDisorder'];
  const isValid = requiredFields.every(field => formData[field] !== '');

  if (!isValid) {
    $q.notify({
      color: 'negative',
      message: 'لطفاً تمام فیلدهای مرحله اول را تکمیل کنید',
      position: 'top'
    });
  }
  return isValid;
};

const validateStep2 = () => {
  const isValid = formData.sleepStatus !== '';

  if (!isValid) {
    $q.notify({
      color: 'negative',
      message: 'لطفاً وضعیت خواب خود را انتخاب کنید',
      position: 'top'
    });
  }
  return isValid;
};

const validateStep3 = () => {
  const isValid = motivationRows.every(row => formData.motivationAnswers[row.id]);

  if (!isValid) {
    $q.notify({
      color: 'negative',
      message: 'لطفاً به تمام سوالات انگیزشی پاسخ دهید',
      position: 'top'
    });
  }
  return isValid;
};

const validateStep4 = () => {
  const requiredFields = ['sleepTime', 'wakeUpTime', 'timeToFallAsleep', 'sleepDuration',
    'medicationUsage', 'stayAwake', 'motivationLoss', 'sleepQuality'];

  const isValid = requiredFields.every(field => formData[field] !== '' && formData[field] !== null);

  if (!isValid) {
    $q.notify({
      color: 'negative',
      message: 'لطفاً تمام فیلدهای مربوط به کیفیت خواب را تکمیل کنید',
      position: 'top'
    });
  }
  return isValid;
};

// Navigation handlers
const nextStep = () => {
  const validationFunctions = {
    1: validateStep1,
    2: validateStep2,
    3: validateStep3,
    4: validateStep4
  };

  if (validationFunctions[step.value]()) {
    stepper.value.next();
  }
};

const previousStep = () => {
  stepper.value.previous();
};

// Form submission handler
const submitForm = async () => {
  try {
    if (!validateStep4()) {
      return;
    }

    submitting.value = true;

    // Prepare data for submission
    const submissionData = {
      ...formData,
      submissionDate: new Date().toISOString()
    };

    // Here you would typically make an API call to submit the data
    // For example:
    await api.post('api/submit-survey', submissionData);

    // Show success message
    $q.notify({
      color: 'positive',
      message: 'پرسشنامه با موفقیت ثبت شد',
      position: 'top'
    });

    // Reset form
    resetForm();

  } catch (error) {
    $q.notify({
      color: 'negative',
      message: error.message || 'خطا در ثبت پرسشنامه',
      position: 'top'
    });
  } finally {
    submitting.value = false;
  }
};

// Reset form data
const resetForm = () => {
  // Reset all form fields
  Object.keys(formData).forEach(key => {
    if (typeof formData[key] === 'object' && formData[key] !== null) {
      if (key === 'sleepIssues') {
        Object.keys(formData[key]).forEach(subKey => {
          formData[key][subKey] = '';
        });
      } else if (key === 'motivationAnswers') {
        formData[key] = {};
      }
    } else {
      formData[key] = '';
    }
  });

  // Reset step
  step.value = 1;
};
</script>

<style>
.survey-card {
  direction: rtl;
  text-align: right;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

/* Rest of your styles */
.q-list {
  width: 100%;
  background-color: #fff;
}

.q-item {
  min-height: 64px;
}

/* Improved accessibility */
.q-radio {
  transition: transform 0.2s ease;
  cursor: pointer;
}

.q-radio:focus-visible {
  outline: 2px solid var(--q-primary);
  outline-offset: 2px;
}

/* Improved mobile responsiveness */
@media (max-width: 599px) {
  .survey-card {
    margin: 0;
    border-radius: 0;
  }

  .q-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .q-item-section.side {
    width: 100%;
    padding-top: 8px;
  }
}

/* Print styles */
@media print {
  .survey-card {
    box-shadow: none;
  }

  .q-btn {
    display: none;
  }
}

.q-stepper--horizontal .q-stepper__label:after , .q-stepper--horizontal .q-stepper__dot:before {
  display: none !important;
}

.q-stepper--vertical .q-stepper__dot:after {
  display: none !important;
}

[dir="ltr"] .q-stepper--vertical .q-stepper__step-inner {
  padding: 4px !important;
}
</style>
