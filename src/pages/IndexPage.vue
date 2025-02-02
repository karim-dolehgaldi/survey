<template>
  <q-page class="q-pa-md flex flex-center bg-grey-2">
    <q-card class="survey-card q-pa-lg" style="max-width: 800px; width: 100%">
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

      <q-form @submit.prevent="submitForm" class="q-gutter-md">
        <!-- Personal Information Section -->
        <q-card-section>
          <div class="text-subtitle1 text-center text-primary q-mb-md">پیشاپیش بابت همکاری‌تون تشکر می‌کنم 🙏</div>
          <q-list bordered separator class="rounded-borders ">
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-medium">جنسیت:</q-item-label>
              </q-item-section>
              <q-item-section side>
                <div class="row q-gutter-sm">
                  <q-radio v-model="formData.gender" val="پسر" label="پسر" color="primary" />
                  <q-radio v-model="formData.gender" val="دختر" label="دختر" color="primary" />
                </div>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-medium">وضعیت تأهل:</q-item-label>
              </q-item-section>
              <q-item-section side>
                <div class="row q-gutter-sm">
                  <q-radio v-model="formData.maritalStatus" val="مجرد" label="مجرد" color="primary" />
                  <q-radio v-model="formData.maritalStatus" val="متأهل" label="متأهل" color="primary" />
                </div>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-medium">مقطع تحصیلی:</q-item-label>
              </q-item-section>
              <q-item-section side>
                <div class="row q-gutter-sm">
                  <q-radio v-model="formData.educationLevel" val="کارآموز" label="کارآموز" color="primary" />
                  <q-radio v-model="formData.educationLevel" val="کارورز" label="کارورز" color="primary" />
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <!-- Sleep Status Questions -->
        <q-card-section>
          <q-list bordered separator class="rounded-borders">
            <q-item class="gt-xs">
              <q-item-section>
                <q-item-label class="text-weight-medium">
                  آیا برای خواب راحت از داروهای خواب‌آور یا داروهای موثر بر خواب استفاده می‌کنید؟
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <div class="row q-gutter-sm">
                  <q-radio v-model="formData.sleepMeds" val="بلی" label="بلی" color="primary" />
                  <q-radio v-model="formData.sleepMeds" val="خیر" label="خیر" color="primary" />
                </div>
              </q-item-section>
            </q-item>
            <q-item class="lt-sm">
              <q-item-section>
                <q-item-label class="text-weight-medium">
                  آیا برای خواب راحت از داروهای خواب‌آور یا داروهای موثر بر خواب استفاده می‌کنید؟
                </q-item-label>
                <q-item-label class="row q-gutter-sm">
                  <q-radio v-model="formData.sleepMeds" val="بلی" label="بلی" color="primary" />
                  <q-radio v-model="formData.sleepMeds" val="خیر" label="خیر" color="primary" />
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="gt-xs">
              <q-item-section>
                <q-item-label class="text-weight-medium">
                  آیا از مواد مخدر یا هر نوع مواد روانگردان استفاده می‌کنید؟
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <div class="row q-gutter-sm">
                  <q-radio v-model="formData.drugUse" val="بلی" label="بلی" color="primary" />
                  <q-radio v-model="formData.drugUse" val="خیر" label="خیر" color="primary" />
                </div>
              </q-item-section>
            </q-item>
            <q-item class="lt-sm">
              <q-item-section>
                <q-item-label class="text-weight-medium">
                  آیا از مواد مخدر یا هر نوع مواد روانگردان استفاده می‌کنید؟
                </q-item-label>
                <q-item-label class="row q-gutter-sm">
                  <q-radio v-model="formData.drugUse" val="بلی" label="بلی" color="primary" />
                  <q-radio v-model="formData.drugUse" val="خیر" label="خیر" color="primary" />
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="gt-xs">
              <q-item-section>
                <q-item-label class="text-weight-medium">
                  آیا سابقه‌ی اختلالات روانپزشکی داشته‌اید؟
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <div class="row q-gutter-sm">
                  <q-radio v-model="formData.mentalDisorder" val="بلی" label="بلی" color="primary" />
                  <q-radio v-model="formData.mentalDisorder" val="خیر" label="خیر" color="primary" />
                </div>
              </q-item-section>
            </q-item>
            <q-item class="lt-sm">
              <q-item-section>
                <q-item-label class="text-weight-medium">
                  آیا سابقه‌ی اختلالات روانپزشکی داشته‌اید؟
                </q-item-label>
                <q-item-label class="row q-gutter-sm">
                  <q-radio v-model="formData.mentalDisorder" val="بلی" label="بلی" color="primary" />
                  <q-radio v-model="formData.mentalDisorder" val="خیر" label="خیر" color="primary" />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
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

        <!-- Motivation Assessment Section -->
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


        <q-card-section>
          <div class="text-subtitle1 text-primary q-mb-md">
            پرسشنامه زیر در خصوص کیفیت خواب شماست. لطفاً با دقت به سوالات پاسخ دهید.
          </div>
          <div class="text-body1 q-mb-md">
            لطفاً در خصوص وضعیت خوابتان در طی ماه گذشته به سوالات زیر پاسخ دهید.
          </div>

          <q-list bordered separator class="rounded-borders">
            <!-- Question 1 -->
            <q-item class="gt-xs">
              <q-item-section>
                <q-item-label class="text-weight-medium">1. معمولا شب‌ها چه ساعتی می‌خوابید؟</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-input v-model="formData.sleepTime" label="ساعت خوابیدن" />
              </q-item-section>
            </q-item>
            <q-item class="lt-sm">
              <q-item-section>
                <q-item-label class="text-weight-medium">1. معمولا شب‌ها چه ساعتی می‌خوابید؟</q-item-label>
                <q-item-label>
                  <q-input v-model="formData.sleepTime" label="ساعت خوابیدن" />
                </q-item-label>
              </q-item-section>
            </q-item>

            <!-- Question 2 (Text Input) -->
            <q-item class="gt-xs">
              <q-item-section>
                <q-item-label class="text-weight-medium">
                  2. از زمانی که به رختخواب می‌روید، چقدر (تقریبا چند دقیقه) طول می‌کشد تا به خواب بروید؟
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-input v-model="formData.timeToFallAsleep" type="text" label="دقیقه" />
              </q-item-section>
            </q-item>

            <q-item class="lt-sm">
              <q-item-section>
                <q-item-label class="text-weight-medium">
                  2. از زمانی که به رختخواب می‌روید، چقدر (تقریبا چند دقیقه) طول می‌کشد تا به خواب بروید؟
                </q-item-label>
                <q-item-label>
                  <q-input v-model="formData.timeToFallAsleep" type="text" label="دقیقه" />
                </q-item-label>
              </q-item-section>
            </q-item>

            <!-- Question 3 (Text Input) -->
            <q-item class="gt-xs">
              <q-item-section>
                <q-item-label class="text-weight-medium">3. معمولا صبح‌ها چه ساعتی از خواب بیدار می‌شوید؟</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-input v-model="formData.wakeUpTime" label="ساعت بیدار شدن" />
              </q-item-section>
            </q-item>


            <q-item class="lt-sm">
              <q-item-section>
                <q-item-label class="text-weight-medium">3. معمولا صبح‌ها چه ساعتی از خواب بیدار می‌شوید؟</q-item-label>
                <q-item-label>
                  <q-input v-model="formData.wakeUpTime" label="ساعت بیدار شدن" />
                </q-item-label>
              </q-item-section>
            </q-item>

            <!-- Question 4 (Text Input) -->
            <q-item class="gt-xs">
              <q-item-section>
                <q-item-label class="text-weight-medium">4. متوسط مدت خواب شما در شب چند ساعت بوده است؟</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-input v-model="formData.sleepDuration" label="ساعت" />
              </q-item-section>
            </q-item>

            <q-item class="lt-sm">
              <q-item-section>
                <q-item-label class="text-weight-medium">4. متوسط مدت خواب شما در شب چند ساعت بوده است؟</q-item-label>
                <q-item-label>
                  <q-input v-model="formData.sleepDuration" label="ساعت" />
                </q-item-label>
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
                <q-radio v-model="formData.sleepIssues.cantFallAsleep" label="هیچ" val="none" />
                <q-radio v-model="formData.sleepIssues.cantFallAsleep" label="یک بار در هفته" val="onceAWeek" />
                <q-radio v-model="formData.sleepIssues.cantFallAsleep" label="دوبار در هفته" val="twiceAWeek" />
                <q-radio v-model="formData.sleepIssues.cantFallAsleep" label="سه بار یا بیشتر در هفته"
                  val="threeOrMore" />
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="q-pl-none">
                <q-item-label class="q-mb-none">ب. نیمه‌های شب یا صبح زود از خواب بیدار شده‌اید.</q-item-label>
                <q-radio v-model="formData.sleepIssues.wakeUpInTheNight" label="هیچ" val="none" />
                <q-radio v-model="formData.sleepIssues.wakeUpInTheNight" label="یک بار در هفته" val="onceAWeek" />
                <q-radio v-model="formData.sleepIssues.wakeUpInTheNight" label="دوبار در هفته" val="twiceAWeek" />
                <q-radio v-model="formData.sleepIssues.wakeUpInTheNight" label="سه بار یا بیشتر در هفته"
                  val="threeOrMore" />
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="q-pl-none">
                <q-item-label class="q-mb-none">پ. وسط خواب شبانه مجبور شدید برای رفتن به توالت از رختخواب خارج
                  شوید.</q-item-label>
                <q-radio v-model="formData.sleepIssues.getUpForToilet" label="هیچ" val="none" />
                <q-radio v-model="formData.sleepIssues.getUpForToilet" label="یک بار در هفته" val="onceAWeek" />
                <q-radio v-model="formData.sleepIssues.getUpForToilet" label="دوبار در هفته" val="twiceAWeek" />
                <q-radio v-model="formData.sleepIssues.getUpForToilet" label="سه بار یا بیشتر در هفته"
                  val="threeOrMore" />
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="q-pl-none">
                <q-item-label class="q-mb-none">ت. عدم توانایی نفس کشیدن راحت طی خواب.</q-item-label>
                <q-radio v-model="formData.sleepIssues.breathingIssue" label="هیچ" val="none" />
                <q-radio v-model="formData.sleepIssues.breathingIssue" label="یک بار در هفته" val="onceAWeek" />
                <q-radio v-model="formData.sleepIssues.breathingIssue" label="دوبار در هفته" val="twiceAWeek" />
                <q-radio v-model="formData.sleepIssues.breathingIssue" label="سه بار یا بیشتر در هفته"
                  val="threeOrMore" />
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="q-pl-none">
                <q-item-label class="q-mb-none">ث. در خواب با صدای بلند خروپف کردید.</q-item-label>
                <q-radio v-model="formData.sleepIssues.snoring" label="هیچ" val="none" />
                <q-radio v-model="formData.sleepIssues.snoring" label="یک بار در هفته" val="onceAWeek" />
                <q-radio v-model="formData.sleepIssues.snoring" label="دوبار در هفته" val="twiceAWeek" />
                <q-radio v-model="formData.sleepIssues.snoring" label="سه بار یا بیشتر در هفته" val="threeOrMore" />
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="q-pl-none">
                <q-item-label class="q-mb-none">ج. احساس سرمای زیاد (هنگام بخواب رفتن و یا طی مدت خواب که باعث بیدار شدن
                  شما شود.)</q-item-label>
                <q-radio v-model="formData.sleepIssues.cold" label="هیچ" val="none" />
                <q-radio v-model="formData.sleepIssues.cold" label="یک بار در هفته" val="onceAWeek" />
                <q-radio v-model="formData.sleepIssues.cold" label="دوبار در هفته" val="twiceAWeek" />
                <q-radio v-model="formData.sleepIssues.cold" label="سه بار یا بیشتر در هفته" val="threeOrMore" />
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="q-pl-none">
                <q-item-label class="q-mb-none">چ. احساس گرمای شدید (هنگام بخواب رفتن و یا طی مدت خواب که باعث بیدار شدن
                  شما شود.)</q-item-label>
                <q-radio v-model="formData.sleepIssues.hot" label="هیچ" val="none" />
                <q-radio v-model="formData.sleepIssues.hot" label="یک بار در هفته" val="onceAWeek" />
                <q-radio v-model="formData.sleepIssues.hot" label="دوبار در هفته" val="twiceAWeek" />
                <q-radio v-model="formData.sleepIssues.hot" label="سه بار یا بیشتر در هفته" val="threeOrMore" />
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="q-pl-none">
                <q-item-label class="q-mb-none">ح. خواب‌های بد دیدن.</q-item-label>
                <q-radio v-model="formData.sleepIssues.badDreams" label="هیچ" val="none" />
                <q-radio v-model="formData.sleepIssues.badDreams" label="یک بار در هفته" val="onceAWeek" />
                <q-radio v-model="formData.sleepIssues.badDreams" label="دوبار در هفته" val="twiceAWeek" />
                <q-radio v-model="formData.sleepIssues.badDreams" label="سه بار یا بیشتر در هفته" val="threeOrMore" />
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="q-pl-none">
                <q-item-label class="q-mb-none">خ. شکایت از درد طی مدت خواب.</q-item-label>
                <q-radio v-model="formData.sleepIssues.pain" label="هیچ" val="none" />
                <q-radio v-model="formData.sleepIssues.pain" label="یک بار در هفته" val="onceAWeek" />
                <q-radio v-model="formData.sleepIssues.pain" label="دوبار در هفته" val="twiceAWeek" />
                <q-radio v-model="formData.sleepIssues.pain" label="سه بار یا بیشتر در هفته" val="threeOrMore" />
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="q-pl-none">
                <q-item-label class="q-mb-none">د. سایر دلایل (لطفاً نوع مشکل را بنویسید.)</q-item-label>
                <q-input v-model="formData.sleepIssues.other" dir="rtl" outlined class="q-my-sm" autogrow />
              </q-item-section>
            </q-item>

            <!-- Question 6 -->
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-medium">
                  6. چند بار برای خوابیدن مجبور به استفاده از دارو (خودسرانه و یا با تجویز پزشک) شده‌اید؟
                </q-item-label>
                <q-radio v-model="formData.medicationUsage" label="هیچ" val="none" />
                <q-radio v-model="formData.medicationUsage" label="یک بار در هفته" val="onceAWeek" />
                <q-radio v-model="formData.medicationUsage" label="دوبار در هفته" val="twiceAWeek" />
                <q-radio v-model="formData.medicationUsage" label="سه بار یا بیشتر در هفته" val="threeOrMore" />
              </q-item-section>
            </q-item>

            <!-- Question 7 -->
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-medium">
                  7. چند بار حین رانندگی، خوردن غذا یا شرکت در فعالیت‌های اجتماعی در بیدار ماندن مشکل داشته‌اید؟ (به
                  سختی بیدار مانده‌اید)
                </q-item-label>
                <q-radio v-model="formData.stayAwake" label="هیچ" val="none" />
                <q-radio v-model="formData.stayAwake" label="یک بار در هفته" val="onceAWeek" />
                <q-radio v-model="formData.stayAwake" label="دوبار در هفته" val="twiceAWeek" />
                <q-radio v-model="formData.stayAwake" label="سه بار یا بیشتر در هفته" val="threeOrMore" />
              </q-item-section>
            </q-item>

            <!-- Question 8 -->
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-medium">
                  8. چند بار این احساس را داشته‌اید که دیگر شور و ذوقی برای بدست آوردن چیزی را ندارید؟
                </q-item-label>
                <q-radio v-model="formData.motivationLoss" label="هیچ" val="none" />
                <q-radio v-model="formData.motivationLoss" label="یک بار در هفته" val="onceAWeek" />
                <q-radio v-model="formData.motivationLoss" label="دوبار در هفته" val="twiceAWeek" />
                <q-radio v-model="formData.motivationLoss" label="سه بار یا بیشتر در هفته" val="threeOrMore" />
              </q-item-section>
            </q-item>

            <!-- Question 9 -->
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-medium">
                  9. در کل، کیفیت خواب خود طی ماه گذشته را چگونه توصیف می‌کنید؟
                </q-item-label>
                <q-radio v-model="formData.sleepQuality" label="بد" val="bad" />
                <q-radio v-model="formData.sleepQuality" label="خیلی بد" val="veryBad" />
                <q-radio v-model="formData.sleepQuality" label="خوب" val="good" />
                <q-radio v-model="formData.sleepQuality" label="خیلی خوب" val="veryGood" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>


        <!-- Action Buttons -->
        <q-card-actions align="center" class="q-gutter-md">
          <q-btn label="ارسال" type="submit" color="primary" class="q-px-lg" style="min-width: 150px;" :loading="submitting" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      submitting: false,
      formData: {
        gender: '',
        maritalStatus: '',
        educationLevel: '',
        sleepMeds: '',
        drugUse: '',
        mentalDisorder: '',
        sleepStatus: '',
        motivationAnswers: {},
        sleepTime: '',
        timeToFallAsleep: '',
        wakeUpTime: '',
        sleepDuration: '',
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
          other: '' // This is the only optional field
        },
        medicationUsage: '',
        stayAwake: '',
        motivationLoss: '',
        sleepQuality: ''
      },
      sleepQualityOptions: [
        { label: 'بد', value: 'bad' },
        { label: 'خیلی بد', value: 'very_bad' },
        { label: 'خوب', value: 'good' },
        { label: 'خیلی خوب', value: 'very_good' }
      ],
      sleepStatusColumns: [
        {
          name: 'scale',
          label: 'مقیاس',
          align: 'center',
          field: 'scale'
        },
        {
          name: 'status',
          label: 'وضعیت',
          align: 'right',
          field: 'status'
        },
        {
          name: 'selection',
          align: 'center',
          field: 'selection'
        }
      ],
      sleepStatusRows: [
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
      ],
      motivationColumns: [
        {
          name: 'number',
          label: 'شماره',
          align: 'center',
          field: 'number'
        },
        {
          name: 'question',
          label: 'پرسش',
          align: 'right',
          field: 'question'
        },
        ...['never', 'rarely', 'sometimes', 'often', 'always'].map(key => ({
          name: key,
          align: 'center',
          field: key
        }))
      ],
      motivationOptions: [
        { label: 'هرگز', value: 'never' },
        { label: 'به ندرت', value: 'rarely' },
        { label: 'گاهی اوقات', value: 'sometimes' },
        { label: 'اغلب اوقات', value: 'often' },
        { label: 'همیشه', value: 'always' }
      ],
      motivationRows: [
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
      ]
    };
  },
  methods: {
    validateForm() {
      // Check all required fields except sleepIssues.other
      const requiredFields = [
        'gender',
        'maritalStatus',
        'educationLevel',
        'sleepMeds',
        'drugUse',
        'mentalDisorder',
        'sleepStatus',
        'sleepTime',
        'timeToFallAsleep',
        'wakeUpTime',
        'sleepDuration',
        'medicationUsage',
        'stayAwake',
        'motivationLoss',
        'sleepQuality'
      ];

      // Check main fields
      const mainFieldsValid = requiredFields.every(field =>
        this.formData[field] !== null && this.formData[field] !== undefined && this.formData[field] !== ''
      );

      // Check sleep issues (excluding 'other')
      const sleepIssuesValid = Object.entries(this.formData.sleepIssues)
        .filter(([key]) => key !== 'other')
        .every(([, value]) => value !== null && value !== undefined && value !== '');

      // Check motivation answers
      const motivationValid = Object.keys(this.formData.motivationAnswers).length === this.motivationRows.length;

      return mainFieldsValid && sleepIssuesValid && motivationValid;
    },

    async submitForm() {
      try {
        if (!this.validateForm()) {
          this.$q.notify({
            color: 'negative',
            message: 'لطفاً تمام فیلدهای اجباری را پر کنید',
            icon: 'warning'
          });
          return;
        }

        this.submitting = true;

        const googleScriptURL = "https://script.google.com/macros/s/AKfycbyGsmZR8df0SVEn8_lQkNs1kNDJDRqTlq1HeUxsKDWj-hD9SzNPwF2m52wv3JjU06s1/exec";

        // Replace with your actual API endpoint
        const response = await fetch(googleScriptURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.formData)
        });

        if (!response.ok) {
          throw new Error("خطا در ارسال فرم");
        }

        this.$q.notify({
          color: 'positive',
          message: 'فرم شما با موفقیت ارسال شد!',
          icon: 'check_circle'
        });

        // Optional: Reset form after successful submission
        // this.resetForm();

      } catch (error) {
        console.error('Error submitting form:', error);
        this.$q.notify({
          color: 'negative',
          message: 'خطا در ارسال فرم. لطفاً دوباره تلاش کنید.',
          icon: 'error'
        });
      } finally {
        this.submitting = false;
      }
    },

    resetForm() {
      // Reset all form fields to initial empty values
      Object.keys(this.formData).forEach(key => {
        if (typeof this.formData[key] === 'object') {
          Object.keys(this.formData[key]).forEach(subKey => {
            this.formData[key][subKey] = '';
          });
        } else {
          this.formData[key] = '';
        }
      });
    }
  }
};
</script>

<style scoped>
.survey-card {
  direction: rtl;
  text-align: right;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.q-list {
  width: 100%;
  background-color: #fff;
}

.q-item {
  min-height: 64px;
}

.text-weight-medium {
  font-weight: 500;
}

.q-item {
  transition: background-color 0.3s ease;
}

.q-item:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.q-radio {
  transition: transform 0.2s ease;
}

.q-radio:hover {
  transform: scale(1.05);
}

.q-btn {
  transition: all 0.3s ease;
}

.q-btn:hover {
  transform: translateY(-2px);
}

.sleep-status-table {
  border-radius: 8px;
  overflow: hidden;
}

.sleep-status-table .q-table__middle {
  max-height: none !important;
}

.q-table tbody td {
  font-size: 14px;
  padding: 8px 16px;
}

.q-table tr:hover {
  background-color: rgba(0, 0, 0, 0.02);
  transition: background-color 0.3s ease;
}

.q-table td:first-child {
  font-weight: 500;
  color: var(--q-primary);
}
</style>
