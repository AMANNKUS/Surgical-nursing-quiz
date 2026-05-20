const questions = [

{
  question: "A 10-year-old child has undergone surgery and has been received into the ward with severe pain. Which immediate post-operative pain relief medication would be effective for this child?",
  options: {
    A: "Demerol",
    B: "Morphine",
    C: "Paracetamol"
  },
  correctAnswer: "B",
  rationaleCorrect: "Morphine is a strong opioid analgesic used for severe post-operative pain. Since the child has just returned from surgery and is experiencing severe pain, morphine would provide effective pain relief when prescribed and administered safely.",
  rationalesIncorrect: {
    A: "Demerol, also known as pethidine, is not usually preferred because it has more adverse effects and is less commonly recommended for children compared with morphine.",
    C: "Paracetamol is useful for mild to moderate pain, but it may not be strong enough alone for severe post-operative pain."
  }
},
{
  question: "A 12-year-old Master Setor has been admitted to your ward with a diagnosis of tonsillitis. Which manifestation indicates a systemic response to the inflammatory process?",
  options: {
    A: "Dysphagia",
    B: "Fever",
    C: "Weakness"
  },
  correctAnswer: "B",
  rationaleCorrect: "Fever is a systemic response because it affects the whole body. In tonsillitis, inflammatory mediators can raise the body temperature, showing that the body is responding to infection or inflammation.",
  rationalesIncorrect: {
    A: "Dysphagia means difficulty swallowing. It is a local symptom caused by swollen and painful tonsils.",
    C: "Weakness may occur during infection, but fever is the clearer and more direct systemic sign of inflammation."
  }
},
{
  question: "A 15-year-old boy was sent to the medical ward with a history of poor quality of life since birth. After several investigations, he was diagnosed with congenital megacolon. Which diagnostic investigation could confirm the condition?",
  options: {
    A: "Barium enema",
    B: "CT scan of abdomen",
    C: "Full thickness biopsy of colon"
  },
  correctAnswer: "C",
  rationaleCorrect: "Congenital megacolon, also called Hirschsprung’s disease, is confirmed by biopsy. A full-thickness biopsy of the colon helps identify the absence of ganglion cells, which is the main pathological problem in the condition.",
  rationalesIncorrect: {
    A: "A barium enema may suggest the diagnosis by showing a narrowed segment and dilated bowel, but it does not confirm the disease.",
    B: "A CT scan may show bowel dilatation, but it cannot confirm the absence of ganglion cells."
  }
},
{
  question: "A 16-year-old boy has been booked for laparotomy following a diagnosis of intestinal obstruction. Which measure would help allay his anxiety prior to surgery?\n\nI. Allow patient to express his fears and anxiety.\nII. Encourage patient to start grieving before the surgery.\nIII. Ensure relative stay with patient 24 hours.",
  options: {
    A: "I only",
    B: "I and II",
    C: "I and III"
  },
  correctAnswer: "A",
  rationaleCorrect: "Allowing the patient to express his fears and anxiety is therapeutic. It helps the nurse understand what the patient is worried about and gives the nurse the opportunity to reassure, educate and emotionally support him.",
  rationalesIncorrect: {
    B: "This is incorrect because encouraging the patient to start grieving before surgery is inappropriate and may increase fear and anxiety.",
    C: "This is incorrect because although family support is helpful, insisting that a relative stays for 24 hours is not always practical and is not the key nursing measure for reducing pre-operative anxiety."
  }
},
{
  question: "A 17-year-old student has been booked for laparotomy following a diagnosis of intestinal obstruction. Which measures would you put in place to allay the patient’s anxiety prior to surgery?\n\nI. Allow patient to express fears and anxieties.\nII. Encourage patient to start grieving before the surgery.\nIII. Ensure relatives stay with patient 24 hours.\nIV. Provide a relaxed and non-threatening atmosphere.",
  options: {
    A: "I and II",
    B: "I, III and IV",
    C: "I and IV"
  },
  correctAnswer: "C",
  rationaleCorrect: "The best ways to reduce anxiety are to allow the patient to express fears and provide a calm, relaxed and non-threatening environment. These actions promote trust and emotional comfort before surgery.",
  rationalesIncorrect: {
    A: "This is incorrect because statement II is not therapeutic. Encouraging grieving before surgery may increase the patient’s anxiety.",
    B: "This is incorrect because although I and IV are correct, relatives do not necessarily need to stay with the patient for 24 hours."
  }
},
{
  question: "A 19-year-old female complains of a tender fluctuating left subareolar breast mass noticed 4 months after giving birth. She denies fever, skin changes, trauma and breastfeeding. Ultrasound-guided aspiration reveals an echogenic cystic structure with milk-like fluid, and fat globules are seen in the aspirate. What is the next best step in management?",
  options: {
    A: "Excisional biopsy with wide margins of the cyst",
    B: "Initiate a short course of bromocriptine",
    C: "Follow-up ultrasound to ensure cyst has not recurred"
  },
  correctAnswer: "C",
  rationaleCorrect: "The features suggest a galactocele, which is a milk-filled cyst that may occur after pregnancy or lactation. Aspiration helps remove the fluid, and follow-up ultrasound is done to make sure the cyst has resolved and has not returned.",
  rationalesIncorrect: {
    A: "This is too aggressive for a typical benign galactocele. Wide excision is more suitable when malignancy is suspected.",
    B: "Bromocriptine suppresses lactation, but in this case aspiration has already been done and follow-up imaging is the better next step."
  }
},
{
  question: "A 19-year-old female who bites her nails presents with pain related to a hangnail. On examination, there is a painful, fluctuant area with erythema at the proximal nail bed. She has full painless range of motion of the finger joints and intact sensation. What is the patient’s diagnosis?",
  options: {
    A: "Herpetic whitlow",
    B: "Onychomycosis",
    C: "Paronychia"
  },
  correctAnswer: "C",
  rationaleCorrect: "Paronychia is an infection around the nail fold. It commonly occurs after nail biting, trauma or hangnails. Pain, redness and a fluctuant swelling around the nail bed strongly point to paronychia.",
  rationalesIncorrect: {
    A: "Herpetic whitlow usually presents with painful vesicles caused by herpes infection, not a fluctuant pus-filled swelling.",
    B: "Onychomycosis is a fungal nail infection. It causes thickened, brittle or discoloured nails, not acute painful swelling."
  }
},
{
  question: "A 20-year-old level 100 student was brought to the OPD by her roommate with complaints of inability to sleep and concentrate in class. During history taking, she says she will start menstruation in the next 2 days and usually feels this way before menstruation. What is the possible diagnosis?",
  options: {
    A: "Dysmenorrhoea",
    B: "Endometriosis",
    C: "Premenstrual dysphoric disorder"
  },
  correctAnswer: "C",
  rationaleCorrect: "Premenstrual dysphoric disorder involves emotional, behavioural and cognitive symptoms before menstruation. Inability to sleep and poor concentration occurring repeatedly before menstruation fit this condition.",
  rationalesIncorrect: {
    A: "Dysmenorrhoea means painful menstruation. The question does not mention menstrual cramps or lower abdominal pain.",
    B: "Endometriosis usually causes chronic pelvic pain, painful menstruation, painful intercourse or infertility. The symptoms here are mainly premenstrual psychological and concentration problems."
  }
},
{
  question: "A 20-year-old dispatch rider was rushed to the emergency unit with difficulty in breathing, restlessness, chest pain, facial lacerations and a lost tooth after a fight. He was diagnosed with pneumothorax. Which position would help improve respiration?",
  options: {
    A: "Fowler’s position",
    B: "Supine position",
    C: "Prone position"
  },
  correctAnswer: "A",
  rationaleCorrect: "Fowler’s position allows the lungs to expand better and reduces pressure on the diaphragm. This helps improve breathing in a patient with pneumothorax.",
  rationalesIncorrect: {
    B: "Lying flat can make breathing more difficult because it limits chest expansion.",
    C: "Prone position is not the usual position for improving breathing in pneumothorax."
  }
},
{
  question: "A 21-year-old SHS graduate reported to your facility with a swollen neck and was diagnosed with simple goitre. Which signs and symptoms would indicate the need for surgical treatment?\n\nI. Dysphagia.\nII. Dyspnoea.\nIII. Hoarseness of voice.\nIV. Cosmetic disfigurement.",
  options: {
    A: "I, II, III and IV",
    B: "I and II",
    C: "II, III and IV"
  },
  correctAnswer: "A",
  rationaleCorrect: "Surgery may be needed in simple goitre when the swelling causes pressure symptoms or cosmetic problems. Dysphagia, dyspnoea, hoarseness of voice and cosmetic disfigurement are all indications that the goitre is causing significant problems.",
  rationalesIncorrect: {
    B: "Dysphagia and dyspnoea are correct, but this option leaves out hoarseness and cosmetic disfigurement.",
    C: "Dyspnoea, hoarseness of voice and cosmetic disfigurement are correct, but this option leaves out dysphagia, which is also an important pressure symptom."
  }
},
{
  question: "A 23-year-old lady with a 3-day-old newborn noticed that the baby had not passed stools since birth. The baby was examined and found to have no anus. The mother and baby have been referred for emergency surgery. Which operation is likely to be performed first?",
  options: {
    A: "Anorectoplasty",
    B: "Colostomy",
    C: "Ileostomy"
  },
  correctAnswer: "B",
  rationaleCorrect: "The baby likely has an imperforate anus. In many emergency cases, a temporary colostomy is done first to allow stool to pass and relieve obstruction before definitive corrective surgery is performed later.",
  rationalesIncorrect: {
    A: "Anorectoplasty is the definitive repair, but in an emergency newborn case with obstruction, a colostomy is commonly performed first.",
    C: "Ileostomy diverts stool from the ileum, but for anorectal malformation, colostomy is more commonly used."
  }
},
{
  question: "A 23-year-old patient is admitted to the surgical ward with suspected appendicitis. The patient complains of pain around the umbilicus that extends to the lower abdomen, about one-third of the distance between the anterior superior iliac spine and the umbilicus. The pain is likely to be emanating from which point?",
  options: {
    A: "Rovsing’s point",
    B: "Hamman’s point",
    C: "McBurney’s point"
  },
  correctAnswer: "C",
  rationaleCorrect: "McBurney’s point is located about one-third of the distance from the anterior superior iliac spine to the umbilicus. Tenderness at this point is a classic sign of appendicitis.",
  rationalesIncorrect: {
    A: "Rovsing’s sign is pain in the right lower abdomen when the left lower abdomen is palpated. It is not the anatomical point described.",
    B: "Hamman’s sign is associated with mediastinal emphysema, not appendicitis."
  }
},
{
  question: "A 23-year-old patient is admitted to the surgical ward with suspected appendicitis. The patient complains of pain around the umbilicus that extends to the right lower quadrant. Which of the following is NOT a clinical manifestation of appendicitis?",
  options: {
    A: "Abdominal rebound tenderness",
    B: "Abdominal flaccidity",
    C: "Umbilical pain that extends to the right lower quadrant"
  },
  correctAnswer: "B",
  rationaleCorrect: "Abdominal flaccidity is not a typical feature of appendicitis. In appendicitis, the abdomen may show tenderness, guarding, rigidity or rebound tenderness due to irritation of the peritoneum.",
  rationalesIncorrect: {
    A: "Abdominal rebound tenderness is a common sign of peritoneal irritation and can occur in appendicitis.",
    C: "Umbilical pain that extends to the right lower quadrant is a classic presentation of appendicitis."
  }
},
{
  question: "A 23-year-old female with a history of smoking is on admission for the removal of uterine fibroids. Which of the following is NOT a risk factor for post-operative nausea and vomiting?",
  options: {
    A: "Smoking history",
    B: "Female sex",
    C: "Gynaecological surgery"
  },
  correctAnswer: "A",
  rationaleCorrect: "Smoking history is not a risk factor for post-operative nausea and vomiting. Rather, non-smoking status is commonly associated with increased risk of post-operative nausea and vomiting.",
  rationalesIncorrect: {
    B: "Female patients have a higher risk of post-operative nausea and vomiting.",
    C: "Gynaecological surgery is associated with increased risk of post-operative nausea and vomiting."
  }
},
{
  question: "A 24-year-old woman comes to the clinic after spilling hot tea on her hand. The affected area is red with a few blisters and blanches with pressure. She reports worsening pain when the burn is exposed to cold wind. How would you classify this burn?",
  options: {
    A: "Superficial partial-thickness",
    B: "Deep partial-thickness",
    C: "Full thickness"
  },
  correctAnswer: "A",
  rationaleCorrect: "A superficial partial-thickness burn is red, painful, blanches with pressure and may have blisters. The presence of pain, redness, blanching and blistering makes this the correct classification.",
  rationalesIncorrect: {
    B: "Deep partial-thickness burns may appear pale or mottled and may have reduced sensation and poor blanching.",
    C: "Full thickness burns are usually leathery, non-blanching and may be painless because nerve endings are destroyed."
  }
},
{
  question: "A 25-year-old man undergoes 3-column excisional haemorrhoidectomy for combined internal and external haemorrhoids unresponsive to medical therapy. Later that evening, he develops suprapubic discomfort and inability to urinate. Which factor most likely contributed to this complication?",
  options: {
    A: "Prolonged duration of haemorrhoid symptoms",
    B: "Performing 3-quadrant haemorrhoidectomy instead of 2",
    C: "Limiting intravenous fluids in the post-operative recovery unit"
  },
  correctAnswer: "B",
  rationaleCorrect: "The patient has developed post-operative urinary retention. A more extensive haemorrhoidectomy can cause more pain and reflex spasm, which can contribute to difficulty passing urine after surgery.",
  rationalesIncorrect: {
    A: "The length of time the patient had haemorrhoids before surgery is not the main cause of immediate urinary retention.",
    C: "Excessive IV fluids may contribute to urinary retention. Limiting fluids is less likely to be the cause."
  }
},
{
  question: "A 25-year-old university student reports with a small painless lump in her left breast. She is anxious that it might be cancer because her mother died of cervical cancer. The nurse’s response should be based on the knowledge that the most likely cause of a breast lump in this patient is:",
  options: {
    A: "Fibroadenoma",
    B: "Breast abscess",
    C: "Fibrocystic complex"
  },
  correctAnswer: "A",
  rationaleCorrect: "Fibroadenoma is a common benign breast lump in young women. It is usually painless, mobile, firm and well-circumscribed.",
  rationalesIncorrect: {
    B: "A breast abscess is usually painful, warm, red and may be associated with fever, especially in breastfeeding women.",
    C: "Fibrocystic breast changes are often associated with cyclical breast pain and lumpiness related to the menstrual cycle."
  }
},
{
  question: "A 25-year-old woman presents to the Emergency Unit with burns sustained after dropping a pan of hot oil. The nurse notices bright red skin with bullae on the anterior trunk and the right arm. The patient rates her pain as 9 out of 10. What is the total body surface area of the burns?",
  options: {
    A: "18%",
    B: "27%",
    C: "9%"
  },
  correctAnswer: "B",
  rationaleCorrect: "Using the adult Rule of Nines, the anterior trunk is 18% and one upper limb is 9%. Therefore, anterior trunk 18% plus right arm 9% gives 27%.",
  rationalesIncorrect: {
    A: "This accounts for only the anterior trunk and ignores the right arm.",
    C: "This accounts for only one arm and ignores the anterior trunk."
  }
},
{
  question: "A 30-year-old female undergoes CT scan for minor trauma and is found incidentally to have a 2 cm cystic mass in the presacral space. She is otherwise healthy, with no family history. Rectal examination confirms a small posterior mass, and MRI confirms a cystic lesion without invasion. What do you recommend next?",
  options: {
    A: "Stool softeners and fibre",
    B: "Observation",
    C: "Flexible sigmoidoscopy"
  },
  correctAnswer: "C",
  rationaleCorrect: "A presacral cystic mass requires proper evaluation. Flexible sigmoidoscopy helps assess the rectum and rule out mucosal involvement before deciding on definitive management.",
  rationalesIncorrect: {
    A: "Stool softeners and fibre may help constipation, but they do not evaluate or treat a presacral mass.",
    B: "Observation alone is not the best choice because presacral lesions may enlarge, become infected or rarely become malignant."
  }
},
{
  question: "A 30-year-old male patient complains of diffuse low back pain without radicular symptoms. His pain is worse in the morning and usually improves with ibuprofen. Radiographic studies reveal a bamboo appearance of the spine. Which condition is most likely causing the back pain?",
  options: {
    A: "Ankylosing spondylitis",
    B: "Herniated disc",
    C: "Rheumatoid arthritis"
  },
  correctAnswer: "A",
  rationaleCorrect: "Ankylosing spondylitis causes inflammatory back pain that is worse in the morning and improves with activity or NSAIDs. The bamboo spine appearance is a classic radiological feature.",
  rationalesIncorrect: {
    B: "A herniated disc usually causes radicular symptoms such as pain radiating down the leg, numbness or weakness.",
    C: "Rheumatoid arthritis mainly affects peripheral joints such as the hands and wrists, not typically causing bamboo spine."
  }
},
{
  question: "A 30-year-old Microsoft developer reported to the Out Patient Department with blurred vision after pepper splashed into his right eye. After visual tests and examinations, a diagnosis of glaucoma was made. Which of the following are possible nursing diagnoses for the patient?\n\nI. Risk for injury related to visual acuity deficits.\nII. Deficient fluid volume related to visual acuity deficits.\nIII. Self-care deficits related to visual acuity deficits.",
  options: {
    A: "II and III",
    B: "I and II",
    C: "I and III"
  },
  correctAnswer: "C",
  rationaleCorrect: "Glaucoma can reduce vision. A patient with reduced visual acuity is at risk for injury because they may not see hazards clearly. The patient may also have self-care deficits if poor vision affects daily activities.",
  rationalesIncorrect: {
    A: "This is incorrect because it includes deficient fluid volume, which is not directly related to visual acuity deficits.",
    B: "This is incorrect because it includes deficient fluid volume and excludes self-care deficit, which may occur due to reduced vision."
  }
},
{
  question: "A 30-year-old patient reported to the Out Patient Department with blurred vision after pepper splashed into the right eye. After visual tests and examinations, a diagnosis of glaucoma was made. Visual acuity can be measured using a Snellen chart placed at how many metres from the patient?",
  options: {
    A: "5",
    B: "3",
    C: "6"
  },
  correctAnswer: "C",
  rationaleCorrect: "The Snellen chart is usually placed 6 metres from the patient when testing distance visual acuity.",
  rationalesIncorrect: {
    A: "Five metres is not the standard distance for the Snellen chart.",
    B: "Three metres is too short for the usual Snellen visual acuity test."
  }
},
{
  question: "A 32-year-old known hypertensive patient is admitted for abdominal surgery. During assessment, you discover that he uses diuretics to manage his hypertension. Which finding would you report to the surgeon?",
  options: {
    A: "Serum potassium of 3.3 mmol/L",
    B: "Blood pressure of 140/80 mmHg",
    C: "Pulse rate of 105 beats per minute"
  },
  correctAnswer: "A",
  rationaleCorrect: "A potassium level of 3.3 mmol/L is low. Diuretics can cause potassium loss, and hypokalaemia can lead to dangerous cardiac dysrhythmias during surgery and anaesthesia. This must be reported.",
  rationalesIncorrect: {
    B: "This blood pressure is mildly elevated but not as urgent as low potassium before surgery.",
    C: "This pulse rate is slightly elevated and should be monitored, but the potassium abnormality is the priority to report."
  }
},
{
  question: "A 32-year-old mason has been referred with a diagnosis of spinal injury secondary to a fall from height two days ago. During ward rounds, the doctor says the healthcare team should immobilise the patient’s neck. As a nurse, which technique would you avoid in stabilising the patient’s neck?",
  options: {
    A: "Backrest",
    B: "Soft cervical collar",
    C: "Towel roll"
  },
  correctAnswer: "A",
  rationaleCorrect: "A backrest should be avoided because it can alter spinal alignment and may worsen injury. In suspected spinal injury, the neck and spine must be kept in neutral alignment.",
  rationalesIncorrect: {
    B: "A cervical collar may be used to support the neck, although rigid collars provide better immobilisation in acute trauma.",
    C: "Towel rolls can be used carefully to help maintain neutral alignment and prevent unnecessary neck movement."
  }
},
{
  question: "A 32-year-old woman has been admitted for knee surgery. Which data obtained during pre-operative assessment should be reported to the surgeon before surgery?",
  options: {
    A: "Lack of knowledge of the procedure",
    B: "History of post-operative infection following a caesarean section",
    C: "Statement that her last menstrual period was 8 weeks ago"
  },
  correctAnswer: "C",
  rationaleCorrect: "A last menstrual period 8 weeks ago may suggest pregnancy. This must be reported before surgery because anaesthesia, medications and some investigations may affect pregnancy.",
  rationalesIncorrect: {
    A: "This requires patient education and clarification of consent, but possible pregnancy is more urgent to report.",
    B: "This is important history, but it is not as immediate as possible pregnancy before surgery."
  }
},
{
  question: "A 32-year-old food vendor is to be admitted for management of burns involving the face, anterior trunk, arms, perineum and both legs. She was unconscious on arrival. The cardiovascular complications she is most likely to experience are dysrhythmia and which type of shock?",
  options: {
    A: "Hypovolaemic shock",
    B: "Septic shock",
    C: "Neurogenic shock"
  },
  correctAnswer: "A",
  rationaleCorrect: "Major burns cause loss of plasma and fluid through damaged skin and increased capillary permeability. This can lead to reduced circulating blood volume and hypovolaemic shock, especially in the early stage.",
  rationalesIncorrect: {
    B: "Septic shock can occur later if burn wounds become infected, but the early cardiovascular shock is usually hypovolaemic.",
    C: "Neurogenic shock is associated with spinal cord injury, not the usual early shock from extensive burns."
  }
},
{
  question: "A 33-year-old banker reports with low appetite and fatigue. He has had anaemia for two years and lost his elder sister to acute leukaemia. The physician requests imaging to inspect blood flow, oxygen intake and metabolism of organs and tissues. The patient is anxious because his sister experienced claustrophobia after similar imaging. What education would you give to alleviate his fear?",
  options: {
    A: "It is normal to experience that as it is associated with the process",
    B: "It is situational and short-lived and it would no longer bother him",
    C: "It is not everyone who experiences this condition after the procedure"
  },
  correctAnswer: "C",
  rationaleCorrect: "This response reassures the patient without dismissing his fear. It helps him understand that claustrophobia may occur in some people, but it does not happen to everyone.",
  rationalesIncorrect: {
    A: "This may worsen the patient’s fear by making claustrophobia sound expected.",
    B: "This is too absolute. The nurse should avoid promising that it will not bother him."
  }
},
{
  question: "A 33-year-old accountant was trapped under debris after a factory fire and sustained second-degree burns with spinal injury. As a Registered Nurse working at the burns unit, which of the following would you consider the greatest threat to a patient with major burns?",
  options: {
    A: "Wound infection",
    B: "Disturbed body image",
    C: "Hypovolaemic shock"
  },
  correctAnswer: "C",
  rationaleCorrect: "The greatest early threat in major burns is hypovolaemic shock. This occurs because of massive fluid loss and capillary leakage after burn injury.",
  rationalesIncorrect: {
    A: "Wound infection is a serious complication, but it usually becomes more important later.",
    B: "Disturbed body image is an important psychosocial problem, but it is not the immediate life-threatening concern."
  }
},
{
  question: "A 34-year-old man has been brought into the ward from theatre after an appendectomy. His blood pressure has dropped from 140/80 mmHg to 110/60 mmHg, and his pulse has changed from 68 bpm to 84 bpm. Which nursing actions would you include?\n\nI. Increase oxygen rate.\nII. Reduce IV infusion rate.\nIII. Check vital signs.\nIV. Assess for bleeding.",
  options: {
    A: "I and II",
    B: "I, III and IV",
    C: "II and III"
  },
  correctAnswer: "B",
  rationaleCorrect: "A falling blood pressure with a rising pulse after surgery may indicate bleeding or developing shock. The nurse should increase oxygen, check vital signs frequently and assess for bleeding.",
  rationalesIncorrect: {
    A: "This is incorrect because it includes reducing IV fluids. The patient may need fluids, not reduced IV fluids.",
    C: "This is incorrect because it includes reducing IV fluids and excludes assessment for bleeding."
  }
},
{
  question: "A 34-year-old woman has been diagnosed with an obstructed fallopian tube due to an infection. What will you anticipate teaching this patient about?",
  options: {
    A: "Use of hormonal therapy",
    B: "Possible difficulty in getting pregnant",
    C: "Irregularities of menstrual cycle"
  },
  correctAnswer: "B",
  rationaleCorrect: "An obstructed fallopian tube can prevent the ovum and sperm from meeting. This can make conception difficult and may increase the risk of infertility or ectopic pregnancy.",
  rationalesIncorrect: {
    A: "Hormonal therapy does not correct a blocked fallopian tube caused by infection.",
    C: "A blocked fallopian tube does not usually affect menstruation because menstrual flow comes from the uterus, not the fallopian tube."
  }
},
{
  question: "A 34-year-old woman who is 24 weeks pregnant arrives at a level one trauma centre after being struck by an all-terrain vehicle. She is stable with mild mid-epigastric pain on palpation. Electronic fetal monitoring is started. Her respiratory rate is 16 cpm, heart rate is 88 bpm, and BP is 130/85 mmHg. Her CBC and urinalysis are normal, toxicology screen is negative, trauma radiographs are unremarkable, and Kleihauer-Betke test is negative. Obstetrics has been consulted. What is the next best step in evaluation?",
  options: {
    A: "Perform a speculum exam to look for signs of abruption",
    B: "Perform a diagnostic peritoneal lavage",
    C: "Perform a Focused Assessment with Sonography in Trauma examination at the bedside"
  },
  correctAnswer: "C",
  rationaleCorrect: "In a pregnant trauma patient, the mother must be assessed first. A FAST scan is a quick bedside ultrasound used to check for internal bleeding, especially in the abdomen.",
  rationalesIncorrect: {
    A: "Abruption is usually assessed by clinical findings, fetal monitoring and ultrasound support, not mainly by speculum examination.",
    B: "Diagnostic peritoneal lavage is invasive and is not usually the first choice when bedside ultrasound is available."
  }
},
{
  question: "A 35-year-old tiller has been referred with a diagnosis of spinal injury secondary to a fall from height two days ago. On arrival, he is dehydrated and his clothes are soaked with urine. Which nursing interventions would be most appropriate for managing his urinary-related problem?\n\nI. Monitor patient’s fluid intake and output.\nII. Insert the correct size of urinary catheter and connect to a drainage bag.\nIII. Check patient’s vital signs and record.\nIV. Ensure patient has at least 3 L of fluid intake in 24 hours.",
  options: {
    A: "I, II and III",
    B: "I, II and IV",
    C: "I, III and IV"
  },
  correctAnswer: "A",
  rationaleCorrect: "Spinal injury can cause bladder dysfunction. The nurse should monitor intake and output, catheterise when indicated to drain the bladder, and check vital signs to detect complications such as infection or shock.",
  rationalesIncorrect: {
    B: "This is incorrect because it includes a fixed 3 L fluid intake, which is not always appropriate. Fluid intake should depend on the patient’s condition, prescription and renal status.",
    C: "This is incorrect because it excludes catheterisation, which is important in managing urinary retention or incontinence related to spinal injury."
  }
},
{
  question: "A 35-year-old man with known ileocaecal Crohn’s disease controlled with sulfasalazine presents with 1 week of severe pain and bright red bleeding after bowel movements. The pain lasts about 45 minutes and improves with sitz baths. Examination reveals a small superficial tear in the anoderm in the posterior midline, without other abnormalities. He cannot tolerate anoscopy due to pain. How do you proceed?",
  options: {
    A: "Lateral internal sphincterotomy",
    B: "Examination under anaesthesia and biopsy",
    C: "Fibre supplementation and sitz baths"
  },
  correctAnswer: "C",
  rationaleCorrect: "The patient has features of an acute anal fissure: severe pain during and after defaecation, bright red bleeding and a superficial tear in the posterior midline. Initial management is conservative with fibre, stool softening and sitz baths.",
  rationalesIncorrect: {
    A: "Lateral internal sphincterotomy is usually reserved for chronic fissures that fail conservative treatment. It is not the first step here.",
    B: "Examination under anaesthesia and biopsy may be considered if the fissure is atypical or suspicious, but this case describes a typical posterior midline fissure."
  }
},
{
  question: "A 35-year-old trader reports with difficulty in swallowing, hoarseness of voice and pain in the neck and throat. Assessment reveals swollen neck lymph nodes with a lump, and thyroid cancer is suspected. Which investigation is most appropriate to confirm the diagnosis?",
  options: {
    A: "Biopsy",
    B: "Physical examination",
    C: "Blood test"
  },
  correctAnswer: "A",
  rationaleCorrect: "Biopsy, commonly fine needle aspiration biopsy, is used to confirm whether a thyroid lump is malignant.",
  rationalesIncorrect: {
    B: "Physical examination can detect a lump and enlarged lymph nodes, but it cannot confirm cancer.",
    C: "Blood tests may assess thyroid function, but they do not confirm thyroid cancer."
  }
},
{
  question: "A 35-year-old woman is evaluated for a bulge at the umbilicus. Apart from morbid obesity, she denies any other medical history. The bulge has been present for a year and causes no discomfort. Her BMI is 45 kg/m², and there is a small bulge at the umbilicus during Valsalva with a fascial defect of about 5 mm. It is easily reducible and she has no previous scars. What do you recommend?",
  options: {
    A: "Observation",
    B: "CT scan",
    C: "Ultrasound"
  },
  correctAnswer: "A",
  rationaleCorrect: "This is a very small, painless and easily reducible umbilical hernia. In a morbidly obese patient, observation and weight reduction may be recommended before elective repair unless symptoms or complications develop.",
  rationalesIncorrect: {
    B: "A CT scan is not necessary when the diagnosis is clinically clear and the hernia is small and reducible.",
    C: "Ultrasound may help if the diagnosis is uncertain, but this case is already clinically obvious."
  }
},
{
  question: "A 35-year-old woman presents to the emergency department after syncope. Family members report acute right-sided chest pain and shortness of breath earlier that day. She had an appendectomy about 1 month ago. Examination shows heart rate 120 bpm, respiratory rate 26 cpm and BP 80/50 mmHg. CT pulmonary angiogram confirms large bilateral pulmonary emboli. Lower limb ultrasound is negative for deep vein thrombosis. She is started on unfractionated heparin and transferred to ICU. Four hours later, her BP is 70/50 mmHg and heart rate is 125 bpm. After fluid resuscitation, norepinephrine infusion is started. Which intervention is most appropriate at this time?",
  options: {
    A: "Continue anticoagulation and administer t-PA only if an echocardiogram confirms right ventricular strain",
    B: "Administer t-PA and discontinue anticoagulation with heparin during thrombolysis",
    C: "Change anticoagulation to low-molecular-weight heparin and administer t-PA"
  },
  correctAnswer: "B",
  rationaleCorrect: "This patient has massive pulmonary embolism with persistent hypotension despite resuscitation and vasopressor support. Thrombolytic therapy with t-PA is indicated to dissolve the clot quickly. Heparin is commonly held during thrombolysis to reduce bleeding risk.",
  rationalesIncorrect: {
    A: "The patient is already unstable with confirmed large pulmonary emboli. Treatment should not be delayed for echocardiographic confirmation.",
    C: "Low-molecular-weight heparin is not preferred in this unstable ICU patient who needs thrombolysis."
  }
},
{
  question: "A 36-week pregnant mother reports to the OPD with contractions. The term contraction of the uterus means:",
  options: {
    A: "Abdominal pain felt by the pregnant woman at term",
    B: "Temporary shortening and thickening of muscle fibres",
    C: "Permanent partial shortening of muscle fibres"
  },
  correctAnswer: "B",
  rationaleCorrect: "Uterine contraction refers to the temporary shortening and thickening of uterine muscle fibres. This helps push the baby downward during labour.",
  rationalesIncorrect: {
    A: "Pain may accompany contractions, but pain itself is not the definition of contraction.",
    C: "Permanent partial shortening of muscle fibres describes retraction, not contraction."
  }
},
{
  question: "A 36-year-old mother of two is to undergo hysterectomy due to bleeding fibroids. What is the main focus of psychological preparation of a patient for a surgical operation?",
  options: {
    A: "Knowing the culture of the patient",
    B: "Knowing what the patient knows about the operation",
    C: "Knowing the support system of the patient"
  },
  correctAnswer: "B",
  rationaleCorrect: "Psychological preparation begins by assessing the patient’s understanding of the operation. This helps the nurse identify fears, misconceptions and learning needs.",
  rationalesIncorrect: {
    A: "Culture is important in care, but it is not the main focus of psychological preparation for surgery.",
    C: "Support systems are important, but first the nurse must assess what the patient understands and fears about the operation."
  }
},
{
  question: "A 35-year-old teacher admitted with spinal injury is experiencing a sense of loss. She shows signs of depression such as sadness and refusal to participate in self-care. Which interventions would you avoid in managing her behaviour?\n\nI. Encourage family involvement in patient’s care.\nII. Give cheerful and willing assistance with activities of daily living.\nIII. Be sympathetic towards the patient.\nIV. Maintain a sense of humour.",
  options: {
    A: "I, II and IV",
    B: "II and IV",
    C: "I, II and III"
  },
  correctAnswer: "B",
  rationaleCorrect: "The nurse should avoid taking over activities of daily living in a way that promotes dependence. The patient should be supported and encouraged to participate in self-care as much as possible. The nurse should also avoid using humour in a way that may make the patient feel misunderstood or not taken seriously.",
  rationalesIncorrect: {
    A: "This is incorrect because family involvement should not be avoided. Family support can help the patient cope with loss and depression.",
    C: "This is incorrect because family involvement and supportive concern are useful in care."
  }
},
{
  question: "A 39-year-old tiller reports with abdominal pain, straining on urination and urine dribbling after urination. He also urinates frequently at night, affecting his sleep. He is diagnosed with benign prostatic hyperplasia and admitted to the ward. What actions would you take to reduce the risk of renal shutdown?\n\nI. Monitor vital signs and report any abnormality.\nII. Weigh patient daily.\nIII. Maintain adequate intake and output.\nIV. Observe for peripheral oedema.",
  options: {
    A: "I, II and III",
    B: "I, III and IV",
    C: "I, II, III and IV"
  },
  correctAnswer: "C",
  rationaleCorrect: "Benign prostatic hyperplasia can obstruct urine flow and lead to urinary retention, hydronephrosis and renal impairment. Monitoring vital signs, daily weight, intake and output, and peripheral oedema helps detect fluid overload and renal compromise early.",
  rationalesIncorrect: {
    A: "This option includes important interventions but omits observation for peripheral oedema, which can indicate fluid retention.",
    B: "This option includes important interventions but omits daily weight, which helps assess fluid retention and renal compromise."
  }
},
{
  question: "A 37-year-old driver involved in a road traffic accident is diagnosed with head injury and transferred to your ward. He has increased intracranial pressure and decreased level of consciousness. Which nursing interventions would help maintain a patent airway?\n\nI. Keep patient lying on the side.\nII. Elevate the head of the bed to 30 degrees.\nIII. Suction patient less frequently; each suction should last less than 10 seconds.\nIV. Insert nasogastric tube and aspirate stomach contents to prevent aspiration.",
  options: {
    A: "I, II, III and IV",
    B: "II, III and IV",
    C: "I, II and III"
  },
  correctAnswer: "C",
  rationaleCorrect: "Keeping the patient on the side helps drainage of secretions and reduces aspiration risk. Elevating the head of the bed to 30 degrees promotes venous drainage and helps reduce intracranial pressure. Suctioning should be done only when necessary and for less than 10 seconds to prevent hypoxia and increased ICP.",
  rationalesIncorrect: {
    A: "This is incorrect because it includes nasogastric tube insertion, which may be contraindicated in head injury, especially if basal skull fracture is suspected.",
    B: "This is incorrect because it includes nasogastric tube insertion and excludes side-lying."
  }
},
{
  question: "A 37-year-old exporter reports to the Out Patient Department with blurred vision after pepper splashed into the right eye. After visual tests and examinations, glaucoma is diagnosed. Which instructions would you include in post-operative teaching for the client to avoid?\n\nI. Driving for long distance.\nII. Lifting objects.\nIII. Bending.",
  options: {
    A: "II and III",
    B: "I and III",
    C: "I and II"
  },
  correctAnswer: "A",
  rationaleCorrect: "After glaucoma surgery, the patient should avoid lifting heavy objects and bending because these activities can increase intraocular pressure and interfere with healing.",
  rationalesIncorrect: {
    B: "This omits lifting, which is an important activity to avoid after glaucoma surgery.",
    C: "This omits bending, which is also important to avoid after glaucoma surgery."
  }
},
{
  question: "A 37-year-old female presents with nipple discharge noticed after waking up in the morning. The discharge is brownish and clear without frank blood. She denies pain, fever or tenderness. Examination reveals no palpable masses or cords, but a small amount of brownish discharge is expressed from the nipple. Laboratory tests are unremarkable, beta-HCG is negative, and thyroid panel is normal. Ultrasound shows a dilated duct in the left breast, and mammogram shows a small focus of calcification within the duct. What is the next best step in management?",
  options: {
    A: "Punch biopsy of the skin and percutaneous biopsy of any underlying lesion",
    B: "Aspirate the fluid, send for Gram stain and culture, and start intravenous antibiotics",
    C: "Single duct excision is preferred because it preserves nipple sensation and the ability to breastfeed"
  },
  correctAnswer: "C",
  rationaleCorrect: "Brownish nipple discharge with a dilated duct and intraductal calcification suggests a duct lesion such as intraductal papilloma. Single duct excision allows diagnosis and treatment while preserving breast function as much as possible.",
  rationalesIncorrect: {
    A: "This is more appropriate when there are skin changes or suspicion of Paget’s disease.",
    B: "This would be appropriate for a breast abscess, but this patient has no fever, tenderness or signs of infection."
  }
},
{
  question: "A 37-year-old mechanic with burns is to be admitted to your ward. On assessment, he has fluid-filled vesicles that are red and shiny, with moderate oedema on the face, anterior trunk, both arms and both legs. He is also in severe pain suspected to be caused by nerve injury. The patient is at risk for wound infection related to:",
  options: {
    A: "Nutritional deficit",
    B: "Altered skin integrity",
    C: "Poor wound care practices"
  },
  correctAnswer: "B",
  rationaleCorrect: "Burns destroy the protective function of the skin. Once the skin barrier is broken, microorganisms can easily enter the wound, increasing the risk of infection.",
  rationalesIncorrect: {
    A: "Poor nutrition can delay wound healing, but the direct cause of infection risk here is broken skin.",
    C: "Poor wound care may increase infection risk, but the patient’s main existing problem is altered skin integrity from the burn."
  }
},
{
  question: "A 37-year-old woman involved in a road traffic accident is rushed to the emergency department with BP 70/30 mmHg, heart rate 140 bpm and oxygen saturation 72%. She continues to deteriorate despite two litres of IV fluids. Blood samples are drawn for type and crossmatch. What is the most appropriate treatment?",
  options: {
    A: "Transfuse type AB fresh frozen plasma to replace volume while waiting for type-specific blood",
    B: "Continue crystalloids and wait for the blood bank to release type-specific blood",
    C: "Transfuse type O negative blood first until the patient’s blood type is determined"
  },
  correctAnswer: "C",
  rationaleCorrect: "This patient is in severe shock and is deteriorating despite IV fluids. Type O negative blood is used in emergencies when the patient’s blood type is not yet known.",
  rationalesIncorrect: {
    A: "Plasma is useful for clotting factor replacement, but the priority in severe blood loss is emergency red blood cell transfusion.",
    B: "Waiting can be dangerous because the patient is unstable and may die from ongoing shock."
  }
},
{
  question: "A 38-year-old mechanic reports with lower abdominal pain, burning sensation during urination and a feeling of incomplete bladder emptying after urination for the past 3 weeks. He is diagnosed with urethral stricture and admitted to the surgical ward. Which nursing interventions would promote urination?\n\nI. Allow the patient to listen to the sound of running water.\nII. Encourage regular intake of fluids if not contraindicated.\nIII. Provide privacy.\nIV. Serve prescribed medication.",
  options: {
    A: "I, III and IV",
    B: "I, II and IV",
    C: "I, II, III and IV"
  },
  correctAnswer: "C",
  rationaleCorrect: "All the interventions can help promote urination. Running water can stimulate voiding, fluids encourage urine production if not contraindicated, privacy reduces anxiety, and prescribed medicines may relieve symptoms or treat underlying causes.",
  rationalesIncorrect: {
    A: "This omits fluid intake, which is important if not contraindicated.",
    B: "This omits privacy, which is important because many patients cannot pass urine comfortably without privacy."
  }
},
{
  question: "A 38-year-old mechanic reports with lower abdominal pain, burning sensation during urination and a feeling of incomplete bladder emptying after urination for the past 3 weeks. He is diagnosed with urethral stricture and admitted to the surgical ward. Which of the following would you include in the patient’s plan of care EXCEPT?",
  options: {
    A: "Patient experiencing oliguria",
    B: "Restrict calcium intake",
    C: "Keep patient in a supine position"
  },
  correctAnswer: "B",
  rationaleCorrect: "Restricting calcium intake is not a routine nursing care plan for urethral stricture. It is more related to some urinary stone conditions, not narrowing of the urethra.",
  rationalesIncorrect: {
    A: "Reduced urine output can occur when urethral stricture obstructs urine flow, so it may be included as an assessment problem.",
    C: "Positioning may be used depending on the patient’s condition or post-procedure care, but calcium restriction is the clearest unrelated option."
  }
},
{
  question: "A 38-year-old woman reports to the reproductive health unit with complaints of faeces draining through the vagina. The gynaecologist would suspect a:",
  options: {
    A: "Fissure",
    B: "Infection",
    C: "Fistula"
  },
  correctAnswer: "C",
  rationaleCorrect: "Faeces passing through the vagina suggests an abnormal connection between the rectum and vagina, known as a rectovaginal fistula.",
  rationalesIncorrect: {
    A: "A fissure is a tear, commonly around the anus, and does not usually cause faeces to pass through the vagina.",
    B: "Infection may cause discharge or foul smell, but faecal drainage through the vagina indicates a fistula."
  }
},
{
  question: "A 3rd year midwifery student explains to a first-year student the hormone responsible for reduction of immune response in pregnancy. Which is the most appropriate answer?",
  options: {
    A: "Human chorionic gonadotrophin",
    B: "Oestrogen",
    C: "Progesterone"
  },
  correctAnswer: "C",
  rationaleCorrect: "Progesterone helps maintain pregnancy and contributes to reduced maternal immune response so that the mother’s body does not reject the fetus.",
  rationalesIncorrect: {
    A: "Human chorionic gonadotrophin maintains the corpus luteum early in pregnancy but is not the main hormone responsible for reducing immune response.",
    B: "Oestrogen supports uterine growth and breast changes, but progesterone is more associated with immune tolerance in pregnancy."
  }
},
{
  question: "A 40-year-old man sustained an injury in the left palm while at work and presents with severe bleeding. As the Charge Nurse, how would you stop the bleeding?",
  options: {
    A: "Sprinkle tablet salt on the wound to help stop bleeding",
    B: "Rinse the wound with water first",
    C: "Put clean absorbent bandages or fabric over the wound and keep applying pressure"
  },
  correctAnswer: "C",
  rationaleCorrect: "Direct pressure with a clean dressing is the first-line action to control external bleeding. Pressure helps compress the bleeding vessels and promotes clot formation.",
  rationalesIncorrect: {
    A: "Sprinkling salt on the wound is unsafe and can worsen tissue irritation and contamination.",
    B: "Cleaning is important later, but in severe bleeding, the priority is to stop bleeding first with direct pressure."
  }
},
{
  question: "A 40-year-old male is referred to a general surgeon for evaluation of an abdominal mass. He has a history of HIV infection. Physical examination reveals an abdominal mass and significant splenomegaly. CT scan reveals lymphoma, and an infectious disease panel is negative. Which diagnosis is most likely regarding the abdominal mass?",
  options: {
    A: "Immunoblastic lymphoma",
    B: "Marginal zone lymphoma",
    C: "Follicular lymphoma"
  },
  correctAnswer: "A",
  rationaleCorrect: "HIV infection increases the risk of aggressive non-Hodgkin lymphomas. Immunoblastic lymphoma is one of the lymphoma types strongly associated with HIV.",
  rationalesIncorrect: {
    B: "Marginal zone lymphoma is generally less strongly associated with HIV than aggressive lymphomas.",
    C: "Follicular lymphoma is usually an indolent lymphoma and is not the most typical HIV-associated lymphoma."
  }
},
{
  question: "A 40-year-old male is referred to a general surgeon for evaluation of an abdominal mass. He has a history of HIV infection. Physical examination reveals an abdominal mass and significant splenomegaly. An infectious disease panel is negative. Which diagnosis is most likely regarding the abdominal mass?",
  options: {
    A: "Marginal zone lymphoma",
    B: "Follicular lymphoma",
    C: "Diffuse large B cell lymphoma"
  },
  correctAnswer: "C",
  rationaleCorrect: "Diffuse large B cell lymphoma is one of the common aggressive non-Hodgkin lymphomas associated with HIV infection. It can present with abdominal masses and systemic involvement.",
  rationalesIncorrect: {
    A: "Marginal zone lymphoma is usually less aggressive and not the classic HIV-associated lymphoma in this context.",
    B: "Follicular lymphoma is usually indolent and is less typical in HIV-related aggressive lymphoma presentations."
  }
},
{
  question: "A 40-year-old woman sustained fracture of the distal shaft of the femur. Which of the following is commonly used in managing such fractures?",
  options: {
    A: "Use of Kuntscher rod",
    B: "Application of cast brace",
    C: "Intramedullary nailing"
  },
  correctAnswer: "C",
  rationaleCorrect: "Intramedullary nailing is commonly used for femoral shaft fractures because it provides strong internal fixation and allows earlier mobilisation.",
  rationalesIncorrect: {
    A: "A Kuntscher rod is an older type of intramedullary fixation and is less commonly used than modern intramedullary nails.",
    B: "Cast bracing is not the preferred management for most adult femoral shaft fractures because it provides less stable fixation."
  }
},
{
  question: "A 41-year-old patient reports to the hospital with swelling on the head. The doctor assesses and suspects meningioma. Which of the following is NOT a feature of meningioma?",
  options: {
    A: "Responds to only surgery",
    B: "Responds to radiotherapy only",
    C: "Growth of cells very fast"
  },
  correctAnswer: "C",
  rationaleCorrect: "Meningiomas are usually slow-growing tumours. Therefore, very fast growth is not a typical feature.",
  rationalesIncorrect: {
    A: "Surgery is a major treatment for meningioma, especially when it is accessible and symptomatic, so this option is closer to meningioma management than fast growth.",
    B: "Radiotherapy may be used in selected cases such as unresectable, recurrent or residual tumours, but the clearest option that is not a feature is very fast cell growth."
  }
},
{
  question: "A 42-year-old fashion designer has been admitted to the female surgical ward for removal of a painful lump on the neck. The surgery is mainly to improve the patient’s quality of life. This type of surgery is termed:",
  options: {
    A: "Palliative",
    B: "Reconstructive",
    C: "Curative"
  },
  correctAnswer: "A",
  rationaleCorrect: "Palliative surgery is done mainly to relieve symptoms, reduce discomfort and improve quality of life. Since the purpose is to improve the patient’s comfort and quality of life, it is palliative.",
  rationalesIncorrect: {
    B: "Reconstructive surgery restores appearance or function after injury, disease or deformity.",
    C: "Curative surgery aims to completely remove or cure the disease, not mainly to relieve symptoms or improve quality of life."
  }
},
{
  question: "A 42-year-old man reports to the eye clinic with blurred vision after pepper accidentally splashed into his right eye. After a series of eye examinations, he is diagnosed with glaucoma. How should a visual acuity finding of 20/50 be interpreted?",
  options: {
    A: "The patient sees at 20 feet what a person with normal vision sees at 50 feet",
    B: "The patient has normal distance vision",
    C: "The patient sees at 50 feet what a person with normal vision sees at 20 feet"
  },
  correctAnswer: "A",
  rationaleCorrect: "Visual acuity of 20/50 means the patient must stand at 20 feet to see clearly what a person with normal vision can see at 50 feet. This indicates reduced visual acuity.",
  rationalesIncorrect: {
    B: "Normal visual acuity is usually 20/20, not 20/50.",
    C: "This reverses the interpretation and would suggest better-than-normal vision, which is incorrect."
  }
},
{
  question: "A 43-year-old man is scheduled for a total laryngectomy. During pre-operative teaching, which information should the nurse prioritise?",
  options: {
    A: "The patient will lose his normal voice after the surgery",
    B: "The patient should take only soft foods permanently after surgery",
    C: "The patient’s ability to speak normally will remain unchanged"
  },
  correctAnswer: "A",
  rationaleCorrect: "In a total laryngectomy, the larynx or voice box is removed. Therefore, the patient will lose normal voice production and will need alternative methods of communication after surgery.",
  rationalesIncorrect: {
    B: "Soft foods may be needed temporarily, but this is not the main priority teaching.",
    C: "This is incorrect because removal of the larynx affects normal speech."
  }
},
{
  question: "A 43-year-old man sustains a fractured left femur following a road traffic accident. He complains of severe pain at the fracture site. Which description best explains the type of pain usually associated with a fresh fracture?",
  options: {
    A: "Sore and aching pain",
    B: "Dull, deep pain",
    C: "Sharp and piercing pain"
  },
  correctAnswer: "C",
  rationaleCorrect: "A fresh fracture usually causes severe, sharp and piercing pain because bone, periosteum, muscles and surrounding tissues are injured.",
  rationalesIncorrect: {
    A: "Sore and aching pain is more commonly associated with muscle strain or mild soft tissue injury.",
    B: "Dull, deep pain may occur in some bone conditions, but acute fracture pain is usually sharp and severe."
  }
},
{
  question: "A 43-year-old mechanic is admitted with partial-thickness burns involving the face, anterior trunk, both arms and both legs. The affected areas are red, shiny, blistered and oedematous, and the patient complains of severe pain. Which nursing action would be inappropriate in the management of the burn wound?",
  options: {
    A: "Scrubbing the burn wound daily with warm water",
    B: "Providing a high-protein, high-calorie diet",
    C: "Accurately recording fluid intake and output"
  },
  correctAnswer: "A",
  rationaleCorrect: "Burn wounds should be cleaned gently using aseptic technique. Scrubbing the wound can damage fragile tissue, increase pain, delay healing and introduce infection.",
  rationalesIncorrect: {
    B: "Providing a high-protein, high-calorie diet is appropriate because burn patients need extra nutrients for wound healing and tissue repair.",
    C: "Accurately recording fluid intake and output is appropriate because burn patients are at risk of fluid loss and shock."
  }
},
{
  question: "A 43-year-old miner is admitted with spinal injury after falling into a pit three days ago. He is being managed conservatively and has been immobilised in bed. Which nursing diagnosis best reflects his current risk?",
  options: {
    A: "Impaired skin integrity related to immobility",
    B: "Risk for impaired skin integrity related to immobility",
    C: "Risk for impaired skin integrity related to excessive mobility"
  },
  correctAnswer: "B",
  rationaleCorrect: "The patient is immobilised, so he is at risk of developing pressure sores. Since no bedsore has been stated, the correct diagnosis is risk for impaired skin integrity.",
  rationalesIncorrect: {
    A: "This would be correct only if the patient already had a wound or pressure sore.",
    C: "This is incorrect because the problem is immobility, not excessive movement."
  }
},
{
  question: "A 43-year-old patient reports to the surgical unit with a painless swelling on the right arm. The doctor suspects a tumour. Which investigation would best confirm the diagnosis?",
  options: {
    A: "Tumour marker test",
    B: "Biopsy of the swelling",
    C: "Full blood count"
  },
  correctAnswer: "B",
  rationaleCorrect: "A biopsy confirms whether a swelling is benign or malignant by allowing microscopic examination of the tissue.",
  rationalesIncorrect: {
    A: "Tumour markers may support diagnosis or monitor treatment, but they do not usually confirm a tumour alone.",
    C: "A full blood count may show anaemia or infection, but it cannot confirm a tumour."
  }
},
{
  question: "A 44-year-old accountant presents with blurred vision after pepper splashed into his right eye. After assessment and investigations, he is diagnosed with glaucoma. Which immediate treatment goal should guide nursing care?",
  options: {
    A: "Prevent injury from poor vision",
    B: "Assist in reducing intraocular pressure",
    C: "Relieve anxiety only"
  },
  correctAnswer: "B",
  rationaleCorrect: "Glaucoma is caused by increased intraocular pressure that can damage the optic nerve. The priority is to reduce intraocular pressure to prevent further visual loss.",
  rationalesIncorrect: {
    A: "Preventing injury from poor vision is important, but it is not the immediate treatment goal in glaucoma.",
    C: "Anxiety relief is supportive, but it does not address the main problem of raised intraocular pressure."
  }
},
{
  question: "A 45-year-old woman is admitted with sudden severe left flank pain. While awaiting CT scan results, the doctor prescribes a patient-controlled opioid infusion for pain relief. She has never received opioid medication before. Which nursing action is most appropriate?",
  options: {
    A: "Monitor her respiratory rate, sedation level and pain response closely",
    B: "Teach her that opioid doses must always be reduced by the second day",
    C: "Focus mainly on assessing whether she is becoming addicted to opioids"
  },
  correctAnswer: "A",
  rationaleCorrect: "For an opioid-naïve patient, the nurse must monitor for opioid side effects such as respiratory depression, excessive sedation, nausea and hypotension while also assessing pain relief.",
  rationalesIncorrect: {
    B: "Opioid doses are adjusted based on pain level and patient response, not automatically reduced by the second day.",
    C: "Addiction is not the main immediate concern in acute pain management. Safety monitoring is the priority."
  }
},
{
  question: "A 45-year-old man with a long history of smoking is diagnosed with a severe right lung abscess. The surgeon plans to perform a pneumonectomy. Which structure will be removed during this operation?",
  options: {
    A: "The entire affected lung",
    B: "One lobe of the affected lung",
    C: "One segment of the affected lung"
  },
  correctAnswer: "A",
  rationaleCorrect: "Pneumonectomy is the surgical removal of an entire lung. If the right lung is affected, the whole right lung is removed.",
  rationalesIncorrect: {
    B: "Removal of one lobe is called lobectomy.",
    C: "Removal of one segment is called segmentectomy."
  }
},
{
  question: "A 45-year-old woman is admitted with extensive burns involving the face, anterior trunk, arms, perineum and both legs. Circulation to the lower limbs becomes severely compromised because of tight burn tissue. Which procedure is most appropriate to prevent ischaemia, paraesthesia, necrosis and gangrene?",
  options: {
    A: "Dermabrasion",
    B: "Debridement",
    C: "Escharotomy"
  },
  correctAnswer: "C",
  rationaleCorrect: "Escharotomy is done when tight burn tissue restricts circulation or breathing. It releases pressure and restores blood flow to the affected part.",
  rationalesIncorrect: {
    A: "Dermabrasion is a skin resurfacing procedure and is not used to relieve circulatory compromise from burns.",
    B: "Debridement removes dead tissue, but it does not immediately relieve pressure caused by tight eschar."
  }
},
{
  question: "A 46-year-old miner with cervical spinal injury has been scheduled for cervical traction. He appears anxious and keeps asking whether the procedure will be painful. Which nursing interventions would help reduce his anxiety?\n\nI. Allow him to ask questions and express his concerns.\nII. Avoid giving explanations because too much information may increase fear.\nIII. Explain the pain control measures that will be used.\nIV. Introduce him to the relevant members of the care team involved in the procedure.",
  options: {
    A: "I, II, III and IV",
    B: "I, II and III",
    C: "I, III and IV"
  },
  correctAnswer: "C",
  rationaleCorrect: "Anxiety is reduced when the patient is allowed to ask questions, receives clear information about pain control and becomes familiar with the care team. This builds trust and reduces fear of the unknown.",
  rationalesIncorrect: {
    A: "This is incorrect because it includes statement II. Avoiding explanations may increase fear and anxiety.",
    B: "This is incorrect because it includes statement II and excludes introducing the care team."
  }
},
{
  question: "A 48-year-old woman undergoes open repair of a fractured femur after a motor vehicle accident. Three days after surgery, she develops low-grade fever, rapid breathing, pleuritic chest pain and cough. CT scan confirms pulmonary embolism. Which finding is most likely to be associated with this condition?",
  options: {
    A: "Reduced pulmonary arterial pressure",
    B: "Reduced alveolar-arterial oxygen gradient",
    C: "Positive D-dimer test"
  },
  correctAnswer: "C",
  rationaleCorrect: "Pulmonary embolism is associated with clot formation and breakdown. D-dimer may be positive because it reflects fibrin degradation from clot activity.",
  rationalesIncorrect: {
    A: "Pulmonary embolism usually increases pulmonary vascular resistance and may increase pulmonary arterial pressure.",
    B: "Pulmonary embolism commonly increases the alveolar-arterial oxygen gradient due to ventilation-perfusion mismatch."
  }
},
{
  question: "A 48-year-old woman presents with palpitations, hot flashes, excessive sweating, heat intolerance, weight loss and protruding eyes. She is diagnosed with Graves’ disease and started on methimazole. Which side effects may occur with this medication?\n\nI. Weight gain.\nII. Headache.\nIII. Skin discoloration.\nIV. Hair loss.",
  options: {
    A: "I, II and III",
    B: "I, II and IV",
    C: "II, III and IV"
  },
  correctAnswer: "B",
  rationaleCorrect: "Methimazole reduces thyroid hormone production. As hyperthyroidism improves, weight gain may occur. Headache and hair loss can also occur as possible side effects.",
  rationalesIncorrect: {
    A: "This is incorrect because it includes skin discoloration, which is not a typical side effect of methimazole.",
    C: "This is incorrect because it includes skin discoloration and excludes weight gain."
  }
},
{
  question: "A 49-year-old man sustains second-degree burns after being trapped in a burning building. During fluid and electrolyte assessment, which finding is NOT a typical sign of fluid volume deficit?",
  options: {
    A: "Thirst",
    B: "Cyanosis",
    C: "Low urine output"
  },
  correctAnswer: "B",
  rationaleCorrect: "Cyanosis is a bluish discolouration caused by poor oxygenation. It is not a typical direct sign of fluid volume deficit.",
  rationalesIncorrect: {
    A: "Thirst is a common sign of fluid volume deficit.",
    C: "Low urine output is an important sign of decreased circulating volume and poor renal perfusion."
  }
},
{
  question: "A 49-year-old man is diagnosed with advanced empyema after prolonged pleural infection. Which management option is most appropriate at this stage?",
  options: {
    A: "Decortication",
    B: "Antibiotics only",
    C: "Simple chest tube drainage only"
  },
  correctAnswer: "A",
  rationaleCorrect: "Advanced empyema can cause thick fibrous tissue to trap the lung. Decortication removes this fibrous layer, allowing the lung to re-expand.",
  rationalesIncorrect: {
    B: "Antibiotics alone may help early infection but are usually not enough for advanced empyema.",
    C: "Chest tube drainage may be useful earlier, but advanced organised empyema often requires decortication."
  }
},
{
  question: "A 5-year-old boy is diagnosed with tympanic membrane perforation and is scheduled for surgical repair. Which procedure is most appropriate?",
  options: {
    A: "Ossiculoplasty",
    B: "Tympanoplasty",
    C: "Myringotomy"
  },
  correctAnswer: "B",
  rationaleCorrect: "Tympanoplasty is the surgical repair of a perforated tympanic membrane. It helps restore the eardrum and improve hearing.",
  rationalesIncorrect: {
    A: "Ossiculoplasty repairs the small bones of the middle ear, not primarily the eardrum.",
    C: "Myringotomy involves making an incision in the tympanic membrane to drain fluid, not repairing a perforation."
  }
},
{
  question: "A 50-year-old man presents with severe left hip pain, fever, cough, raised white blood cell count and inability to bear weight. He is admitted with suspected osteomyelitis. Which factor most likely contributed to the development of the infection?",
  options: {
    A: "Recent systemic infection",
    B: "Being overweight",
    C: "Minor trauma alone"
  },
  correctAnswer: "A",
  rationaleCorrect: "Osteomyelitis may occur when microorganisms spread through the bloodstream from another infection site to the bone. Fever, cough and raised white blood cell count suggest recent or ongoing infection.",
  rationalesIncorrect: {
    B: "Being overweight may affect mobility and healing, but it is not the most direct cause of osteomyelitis here.",
    C: "Minor trauma can draw attention to pain, but infection is required for osteomyelitis to occur."
  }
},
{
  question: "A 50-year-old carpenter reports severe back pain after lifting a heavy load at work. Which lifting technique should be avoided to prevent back injury?",
  options: {
    A: "Bending the knees and hips before lifting",
    B: "Keeping the load close to the body",
    C: "Bending from the waist with the spine curved forward"
  },
  correctAnswer: "C",
  rationaleCorrect: "Bending from the waist places excessive strain on the back muscles and spine. This increases the risk of back injury.",
  rationalesIncorrect: {
    A: "Bending the knees and hips before lifting is a correct lifting technique because it allows the leg muscles to assist.",
    B: "Keeping the load close to the body is correct because it reduces strain on the back."
  }
},
{
  question: "A 50-year-old woman complains of morning stiffness in both wrists and hands, which improves gradually during the day. She also reports fatigue and generalised body aches. Which diagnosis is most likely?",
  options: {
    A: "Osteoarthritis",
    B: "Psoriatic arthritis",
    C: "Rheumatoid arthritis"
  },
  correctAnswer: "C",
  rationaleCorrect: "Rheumatoid arthritis commonly causes symmetrical joint pain and prolonged morning stiffness, especially in the hands and wrists. Fatigue and generalised aches may also occur because it is a systemic inflammatory disease.",
  rationalesIncorrect: {
    A: "Osteoarthritis usually worsens with activity and improves with rest. Morning stiffness is usually brief.",
    B: "Psoriatic arthritis is associated with psoriasis, nail changes and joint inflammation, which are not mentioned in the question."
  }
},
{
  question: "A 52-year-old man spills hot coffee on a small area of his thigh. The burn is painful, blistered and blanches on pressure. Which treatment is most appropriate?",
  options: {
    A: "Topical triamcinolone cream",
    B: "Antibiotic ointment with a non-adherent dressing",
    C: "Routine prophylactic systemic antibiotics"
  },
  correctAnswer: "B",
  rationaleCorrect: "The burn is likely superficial partial-thickness because it is painful, blistered and blanches. A topical antibiotic ointment with a non-adherent dressing protects the wound and promotes healing.",
  rationalesIncorrect: {
    A: "Steroid creams are not routine treatment for acute burns and may delay healing.",
    C: "Systemic antibiotics are not routinely given for minor burns unless there is evidence of infection."
  }
},
{
  question: "A 52-year-old trader diagnosed with Graves’ disease is prescribed methimazole 5 mg three times daily. During discharge teaching, which patient statement indicates the need for further education?",
  options: {
    A: "\"I will avoid excessive intake of iodine-rich foods.\"",
    B: "\"I will take the medication at the same time each day.\"",
    C: "\"I will take aspirin three times daily whenever I feel unwell.\""
  },
  correctAnswer: "C",
  rationaleCorrect: "This statement requires further education because the patient should not self-medicate with aspirin. Aspirin may worsen symptoms of hyperthyroidism and increase bleeding risk in some situations.",
  rationalesIncorrect: {
    A: "This statement is appropriate because high iodine intake can affect thyroid hormone production.",
    B: "This statement is correct because taking methimazole regularly helps maintain stable treatment effects."
  }
},
{
  question: "A 54-year-old farmer presents with palpitations, excessive sweating, heat intolerance, weight loss and protruding eyes. Which condition most likely explains these symptoms?",
  options: {
    A: "Hypothyroidism",
    B: "Graves’ disease",
    C: "Simple goitre"
  },
  correctAnswer: "B",
  rationaleCorrect: "Graves’ disease causes hyperthyroidism. Classic features include palpitations, sweating, heat intolerance, weight loss and exophthalmos or protruding eyes.",
  rationalesIncorrect: {
    A: "Hypothyroidism usually causes weight gain, cold intolerance, fatigue and slow pulse.",
    C: "Simple goitre is thyroid enlargement and may not cause hyperthyroid symptoms or protruding eyes."
  }
},
{
  question: "A 55-year-old man diagnosed with uric acid renal stones is preparing for discharge. Which group of foods should the nurse advise him to limit?",
  options: {
    A: "Tomatoes, cabbage and lettuce",
    B: "Rice, bread and potatoes",
    C: "Liver, beef and pork"
  },
  correctAnswer: "C",
  rationaleCorrect: "Uric acid stones are associated with high purine intake. Organ meats and red meats such as liver, beef and pork are high in purines and should be limited.",
  rationalesIncorrect: {
    A: "Tomatoes, cabbage and lettuce are not the major foods to avoid in uric acid stones.",
    B: "Rice, bread and potatoes are mainly carbohydrate foods and are not high-purine foods."
  }
},
{
  question: "A 55-year-old man with benign prostatic hyperplasia undergoes radical prostatectomy. Six hours after transfer from recovery to the surgical ward, which assessment data should the nurse obtain?\n\nI. Vital signs.\nII. Bleeding around the urethral catheter.\nIII. Urine volume and colour.",
  options: {
    A: "I and III",
    B: "I and II",
    C: "I, II and III"
  },
  correctAnswer: "C",
  rationaleCorrect: "After prostate surgery, the nurse must monitor vital signs for shock or infection, assess for bleeding around the catheter, and observe urine volume and colour for haematuria or obstruction.",
  rationalesIncorrect: {
    A: "This is incomplete because it excludes assessment for bleeding around the catheter.",
    B: "This is incomplete because it excludes urine volume and colour."
  }
},
{
  question: "A 58-year-old man with a colostomy is being taught about colostomy irrigation. What is the main purpose of irrigating a colostomy?",
  options: {
    A: "To prevent constipation permanently",
    B: "To dilute bowel contents",
    C: "To help regulate bowel movement"
  },
  correctAnswer: "C",
  rationaleCorrect: "Colostomy irrigation helps empty the bowel at planned times. This allows the patient to have better control and regulation of bowel movements.",
  rationalesIncorrect: {
    A: "Irrigation may help bowel emptying, but it does not permanently prevent constipation.",
    B: "Diluting stool is not the main purpose of colostomy irrigation."
  }
},
{
  question: "A 5-year-old girl is brought to the hospital with recurrent urinary tract infections. Assessment findings raise suspicion of possible sexual abuse. The mother, who lives with her boyfriend, insists that he could not have abused the child and asks that the matter be kept confidential. What is the most appropriate action?",
  options: {
    A: "Do not report because there is no confirmed evidence of abuse",
    B: "Arrange follow-up to see whether the mother protects the child",
    C: "Report the suspected abuse immediately to the appropriate child protection authority/DOVVSU"
  },
  correctAnswer: "C",
  rationaleCorrect: "Suspected child sexual abuse must be reported immediately to the appropriate authority. The nurse’s priority is the safety and protection of the child.",
  rationalesIncorrect: {
    A: "Nurses do not need to prove abuse before reporting. Suspicion is enough to initiate protection procedures.",
    B: "Waiting may expose the child to further harm."
  }
},
{
  question: "A patient who is six days post-abdominal surgery is being assessed before discharge. The nurse observes that internal structures are protruding through about two inches of the surgical incision. What is the most appropriate immediate intervention?",
  options: {
    A: "Cover the wound with sterile normal saline-moistened dressing",
    B: "Place the patient prone to apply pressure to the wound",
    C: "Encourage the patient to cough to push the tissues back inside"
  },
  correctAnswer: "A",
  rationaleCorrect: "This is wound evisceration. The nurse should cover the protruding organs with sterile normal saline-moistened dressing to prevent drying and contamination, then notify the surgeon urgently.",
  rationalesIncorrect: {
    B: "This is unsafe and can worsen the condition.",
    C: "This is dangerous. Coughing increases intra-abdominal pressure and may worsen evisceration."
  }
},
{
  question: "A 60-year-old man complains of a painless mass that protrudes from the anus during defaecation and reduces spontaneously. He also notices bright red blood on toilet paper and occasional mucoid staining of his underwear. What is the most likely diagnosis?",
  options: {
    A: "Mesenteric ischaemia",
    B: "Colon cancer",
    C: "Internal haemorrhoids"
  },
  correctAnswer: "C",
  rationaleCorrect: "Internal haemorrhoids can protrude during defaecation, reduce spontaneously, and cause painless bright red bleeding. Mucoid discharge may also occur.",
  rationalesIncorrect: {
    A: "Mesenteric ischaemia usually causes severe abdominal pain and is not associated with a reducible anal mass.",
    B: "Colon cancer may cause rectal bleeding, weight loss or change in bowel habits, but a painless protruding mass that reduces spontaneously is more typical of internal haemorrhoids."
  }
},
{
  question: "A 60-year-old man presents with two months of rectal bleeding. Examination reveals a 2.5 cm hard lesion located 3 cm outside the anal verge, with no sphincter involvement. Anoscopy shows no intra-anal lesion, and biopsy confirms squamous cell carcinoma. Which statement best describes the lesion and likely treatment?",
  options: {
    A: "This is anal canal cancer and should be treated mainly with chemoradiation",
    B: "This is perianal squamous cell carcinoma and may be treated with wide local excision because it is small and does not involve the sphincter",
    C: "This is rectal adenocarcinoma and should be treated with low anterior resection"
  },
  correctAnswer: "B",
  rationaleCorrect: "The lesion is outside the anal verge, making it a perianal lesion rather than an anal canal lesion. Since it is small and does not involve the sphincter, wide local excision may be appropriate.",
  rationalesIncorrect: {
    A: "The lesion is outside the anal verge and there is no intra-anal abnormality, so it is not best classified as anal canal cancer.",
    C: "The biopsy shows squamous cell carcinoma, not rectal adenocarcinoma."
  }
},
{
  question: "A 61-year-old Circuit Court Judge reports with abdominal pain, straining on urination, urine dribbling after urination and frequent urination at night. He is diagnosed with benign prostatic hyperplasia and admitted to the ward. Which nursing intervention would help reduce urine retention?",
  options: {
    A: "Palpate the suprapubic area",
    B: "Encourage the patient to void every 2–4 hours",
    C: "Monitor vital signs"
  },
  correctAnswer: "B",
  rationaleCorrect: "Encouraging the patient to void regularly every 2–4 hours helps prevent overdistension of the bladder and reduces urine retention.",
  rationalesIncorrect: {
    A: "Palpating the suprapubic area helps assess bladder distension, but it does not directly reduce urine retention.",
    C: "Monitoring vital signs is important, but it does not directly help the patient empty the bladder."
  }
},
{
  question: "A 62-year-old man is scheduled to undergo transurethral resection of the prostate under spinal anaesthesia. During pre-operative teaching, the nurse explains that the anaesthetic drug will be injected between which lumbar space?",
  options: {
    A: "L2–L3",
    B: "L4–L5",
    C: "L3–L4"
  },
  correctAnswer: "C",
  rationaleCorrect: "Spinal anaesthesia is commonly administered below the level of the spinal cord, often between the L3–L4 lumbar space. This helps reduce the risk of direct spinal cord injury.",
  rationalesIncorrect: {
    A: "L2–L3 is closer to the lower end of the spinal cord and is less commonly preferred for routine spinal anaesthesia.",
    B: "L4–L5 may also be used in some cases, but L3–L4 is the commonly taught answer for spinal anaesthesia."
  }
},
{
  question: "A 62-year-old farmer reports with lower abdominal pain, burning sensation during urination and a feeling of incomplete bladder emptying after urination for the past 3 weeks. He is diagnosed with urethral stricture and admitted to the surgical ward. Which investigation would be conducted for a definite diagnosis?",
  options: {
    A: "Urethroscopy",
    B: "CT scan",
    C: "Blood test"
  },
  correctAnswer: "A",
  rationaleCorrect: "Urethroscopy allows direct visualisation of the urethra. It helps confirm the presence, site and extent of urethral narrowing.",
  rationalesIncorrect: {
    B: "CT scan may show some urinary tract problems, but it is not the best test for directly confirming urethral stricture.",
    C: "Blood tests may help assess infection or kidney function, but they cannot confirm urethral narrowing."
  }
},
{
  question: "A 62-year-old female breast cancer survivor presents for routine follow-up. She had an excisional biopsy 4 years ago for lobular carcinoma in the right breast. Examination now reveals a mass in the left breast. Mammogram findings are suspicious and classified as BI-RADS category 4C. What is the next best step in management?",
  options: {
    A: "No further recommendation is needed",
    B: "Perform a percutaneous biopsy/tissue diagnosis",
    C: "Consent the patient for a modified radical mastectomy"
  },
  correctAnswer: "B",
  rationaleCorrect: "BI-RADS category 4 means the finding is suspicious and biopsy should be considered. Category 4C has a high suspicion for malignancy, so tissue diagnosis is needed before definitive treatment planning.",
  rationalesIncorrect: {
    A: "This is wrong because BI-RADS 4C is suspicious and requires further evaluation.",
    C: "Surgery should not be planned before confirming the diagnosis with tissue biopsy."
  }
},
{
  question: "A 62-year-old private legal practitioner admitted with cancer of the prostate gland is heard saying, “Life is hopeless and I will not talk to any nurse or doctor.” According to Kübler-Ross, which stage of the grieving process is this?",
  options: {
    A: "Bargaining",
    B: "Depression",
    C: "Acceptance"
  },
  correctAnswer: "B",
  rationaleCorrect: "The patient’s statement shows hopelessness, withdrawal and sadness. These are features of the depression stage of grief.",
  rationalesIncorrect: {
    A: "Bargaining involves trying to negotiate or make promises, such as saying, “If I get well, I will change my life.”",
    C: "Acceptance means the patient has come to terms with the illness, which is not shown here."
  }
},
{
  question: "A 63-year-old carpenter has spinal injury after falling from a height. He is dehydrated and his clothes are soaked with urine. He is likely to have constipation. The nursing objective is to ensure he maintains bowel movement every other day. Which nursing orders would you include?\n\nI. Increase fluid intake to tolerable limits.\nII. Encourage patient to improve upon mobility.\nIII. Serve diet high in fibre.\nIV. Monitor bowel movements.",
  options: {
    A: "I, II, III and IV",
    B: "I, III and IV",
    C: "I, II and III"
  },
  correctAnswer: "A",
  rationaleCorrect: "All the interventions can help prevent or manage constipation. Fluids soften stool, mobility stimulates bowel movement, fibre adds bulk to stool, and monitoring bowel movements helps evaluate progress.",
  rationalesIncorrect: {
    B: "This omits mobility, which is important because immobility worsens constipation.",
    C: "This omits monitoring bowel movements, which is needed to evaluate whether the care plan is working."
  }
},
{
  question: "A 63-year-old male with a history of tobacco use, diabetes and hypertension presents with severe claudication. His left lower limb is cool to touch, and his left big toe has shiny skin, absent hair and no palpable dorsalis pedis or posterior tibialis pulse. Arterial brachial index confirms peripheral arterial disease. What is the next step in management?",
  options: {
    A: "Supervised exercise programme",
    B: "Smoking cessation",
    C: "Surgical intervention"
  },
  correctAnswer: "C",
  rationaleCorrect: "This patient has severe peripheral arterial disease with poor circulation, absent pulses and trophic skin changes. These suggest advanced limb ischaemia, so vascular intervention may be required to restore blood flow.",
  rationalesIncorrect: {
    A: "Exercise is useful in stable claudication, but this patient has severe signs of compromised circulation.",
    B: "Smoking cessation is very important, but it is not enough as the immediate next step in severe limb ischaemia."
  }
},
{
  question: "A 65-year-old woman with rectal prolapse presents with 6 months of increasing symptoms. She has bowel incontinence, poor sphincter tone and a reducible rectal prolapse about 10 cm in length. She desires surgery. Which investigation should be done before proceeding with operative repair?",
  options: {
    A: "Defecography",
    B: "Cardiac stress test",
    C: "Colonoscopy"
  },
  correctAnswer: "C",
  rationaleCorrect: "Before rectal prolapse surgery, colonoscopy is commonly done to rule out colorectal cancer, polyps or inflammatory bowel disease that may affect surgical planning.",
  rationalesIncorrect: {
    A: "Defecography may be useful in selected cases to assess pelvic floor function, but colonoscopy is more important before surgery in this case.",
    B: "Cardiac stress test is only needed if there are cardiac symptoms or significant cardiac risk requiring further evaluation."
  }
},
{
  question: "A 67-year-old female patient falls on an outstretched hand and now complains of hand pain. On examination, she has tenderness over the anatomical snuffbox. There is no evident deformity and sensation and movement are intact. What is the likely lesion?",
  options: {
    A: "Scaphoid fracture",
    B: "Pisiform fracture",
    C: "Carpal tunnel syndrome"
  },
  correctAnswer: "A",
  rationaleCorrect: "A fall on an outstretched hand with tenderness in the anatomical snuffbox strongly suggests a scaphoid fracture.",
  rationalesIncorrect: {
    B: "Pisiform fracture usually causes tenderness on the ulnar side of the wrist, not the anatomical snuffbox.",
    C: "Carpal tunnel syndrome causes numbness, tingling and weakness in the median nerve distribution, not acute snuffbox tenderness after a fall."
  }
},
{
  question: "A 67-year-old High Court Judge reports with abdominal pain, straining on urination, urine dribbling after urination and frequent urination at night. He is diagnosed with benign prostatic hyperplasia. Based on the assessment data, which statements are appropriate nursing diagnoses?\n\nI. Urinary retention related to obstruction.\nII. Pain related to bladder distention.\nIII. Anxiety related to inadequate knowledge of BPH.\nIV. Difficulty urinating related to pain.",
  options: {
    A: "I, II, III and IV",
    B: "I, II and III",
    C: "I and II"
  },
  correctAnswer: "C",
  rationaleCorrect: "The assessment data clearly show urinary obstruction and abdominal pain, so urinary retention related to obstruction and pain related to bladder distention are appropriate nursing diagnoses.",
  rationalesIncorrect: {
    A: "This includes diagnoses that are not fully supported by the assessment data. Anxiety was not stated, and difficulty urinating is mainly due to obstruction, not pain.",
    B: "This includes anxiety, which was not stated in the scenario."
  }
},
{
  question: "A 68-year-old male on dialysis for end-stage renal disease undergoes kidney transplant. Five weeks later, biopsy confirms acute rejection of the graft. He is placed on rejection-dose methylprednisolone with no improvement. A new immunosuppressive agent is started, and he immediately develops flu-like symptoms, tremors and chest pain. What is the next course of management?",
  options: {
    A: "Start the patient on ganciclovir",
    B: "Plasmapheresis",
    C: "Diphenhydramine"
  },
  correctAnswer: "C",
  rationaleCorrect: "The symptoms suggest an infusion reaction to an immunosuppressive agent such as antithymocyte globulin. Diphenhydramine is used to manage or prevent allergic-type infusion reactions.",
  rationalesIncorrect: {
    A: "Ganciclovir is used for cytomegalovirus infection, not an immediate infusion reaction.",
    B: "Plasmapheresis may be used in antibody-mediated rejection, but the immediate problem described is an infusion reaction."
  }
},
{
  question: "A 69-year-old post-menopausal woman complains of leakage of urine when coughing and laughing. The problem has become worse over the past six months. Which intervention would be most beneficial?",
  options: {
    A: "Recommend fluid restriction to 1 litre per day",
    B: "Educate the patient about Kegel exercises",
    C: "Refer the patient to a urologist for cystoscopy"
  },
  correctAnswer: "B",
  rationaleCorrect: "Leakage of urine during coughing or laughing suggests stress urinary incontinence. Kegel exercises strengthen the pelvic floor muscles and help improve bladder control.",
  rationalesIncorrect: {
    A: "Severe fluid restriction may cause dehydration and urinary tract infection.",
    C: "Cystoscopy is not the first-line intervention for typical stress urinary incontinence."
  }
},
{
  question: "A 73-year-old patient diagnosed with benign prostatic hyperplasia is booked for transurethral resection of the prostate. As a nurse, which pre-operative nursing interventions would help reduce his anxiety?\n\nI. Reassure patient and family.\nII. Give prescribed antibiotics.\nIII. Provide bowel preparation.\nIV. Provide information about the surgery.",
  options: {
    A: "I and IV",
    B: "I, II and IV",
    C: "I, II, III and IV"
  },
  correctAnswer: "A",
  rationaleCorrect: "Anxiety is reduced by reassurance and clear information about the surgery. These interventions help the patient understand what to expect and reduce fear of the unknown.",
  rationalesIncorrect: {
    B: "This includes antibiotics, which may prevent infection but do not directly reduce anxiety.",
    C: "This includes interventions that are not specifically for anxiety reduction."
  }
},
{
  question: "A 75-year-old man with a history of type 1 von Willebrand disease and haemoglobin of 14.3 g/dL is scheduled for total hip replacement surgery. Which treatment is most appropriate to decrease his risk of severe bleeding during the procedure?",
  options: {
    A: "Prophylactic DDAVP",
    B: "Low-dose activated factor",
    C: "Prophylactic FFP transfusion"
  },
  correctAnswer: "A",
  rationaleCorrect: "DDAVP, also called desmopressin, is commonly used in type 1 von Willebrand disease because it increases the release of von Willebrand factor and factor VIII, reducing bleeding risk.",
  rationalesIncorrect: {
    B: "Low-dose activated factor is not the routine first-line prophylaxis for type 1 von Willebrand disease.",
    C: "Fresh frozen plasma is not preferred when DDAVP is appropriate and effective."
  }
},
{
  question: "A 75-year-old female with well-controlled diabetes is admitted with a right hip fracture. Her surgical repair is uncomplicated. Which post-operative measure can help prevent delirium?",
  options: {
    A: "Early ambulation and mobilisation",
    B: "Additional opioid pain medication before sedation wears off",
    C: "Giving lorazepam prophylactically to help with sleep"
  },
  correctAnswer: "A",
  rationaleCorrect: "Early mobilisation helps prevent post-operative complications such as delirium, pressure sores, pneumonia and venous thromboembolism. It also helps older adults regain orientation and independence.",
  rationalesIncorrect: {
    B: "Excess opioids may worsen sedation and increase delirium risk.",
    C: "Benzodiazepines such as lorazepam can increase confusion and delirium in older adults."
  }
},
{
  question: "A 78-year-old patient diagnosed with benign prostatic hyperplasia is admitted for surgery. On the day of surgery, what immediate care should be provided before sending the patient to theatre?\n\nI. Help patient wear identification bracelet.\nII. Help patient change into hospital gown.\nIII. Confirm patient has signed consent form.",
  options: {
    A: "I and II",
    B: "I, II and III",
    C: "II and III"
  },
  correctAnswer: "B",
  rationaleCorrect: "Before surgery, the nurse must ensure proper patient identification, assist the patient to wear a theatre gown and confirm that informed consent has been signed before transfer to theatre.",
  rationalesIncorrect: {
    A: "This omits consent, which must be confirmed before surgery.",
    C: "This omits the identification bracelet, which is important for patient safety."
  }
},
{
  question: "A 90-year-old patient falls while going to the bathroom unassisted. The patient appears to have sustained a fracture of the left leg and is unable to move the affected leg. The patient is alert and oriented but in severe pain. What is the first nursing intervention?",
  options: {
    A: "Immobilise the fracture with a splint",
    B: "Elevate the extremity above chest level",
    C: "Apply an ice pack covered with towel to the site"
  },
  correctAnswer: "A",
  rationaleCorrect: "The first action is to immobilise the suspected fracture to prevent further injury, reduce pain and protect blood vessels and nerves.",
  rationalesIncorrect: {
    B: "Elevation may help swelling, but it should not be done before immobilisation.",
    C: "Ice can reduce swelling and pain, but immobilisation is the priority."
  }
},
{
  question: "A cylinder containing a gas can be identified by colour. The oxygen cylinder body has a white neck with what body colour?",
  options: {
    A: "Black",
    B: "Blue",
    C: "Grey"
  },
  correctAnswer: "A",
  rationaleCorrect: "In the traditional colour-coding system used in many settings, an oxygen cylinder has a white shoulder or neck and a black body.",
  rationalesIncorrect: {
    B: "Blue is not the standard body colour for oxygen cylinders in this system.",
    C: "Grey is not the expected oxygen cylinder body colour in the traditional coding system."
  }
},
{
  question: "A decision of skin grafting was taken for a patient who sustained a burn injury. Which skin graft is least likely to be rejected by the patient’s immune system?",
  options: {
    A: "Heterograft",
    B: "Autograft",
    C: "Allograft"
  },
  correctAnswer: "B",
  rationaleCorrect: "An autograft uses the patient’s own skin. Because the tissue comes from the same person, it is least likely to be rejected by the immune system.",
  rationalesIncorrect: {
    A: "A heterograft comes from another species, such as pig skin, and is more likely to be rejected.",
    C: "An allograft comes from another human donor and can still be rejected because it is genetically different."
  }
},
{
  question: "A diabetic patient who has undergone abdominal surgery is observed to be experiencing wound evisceration. What is the most appropriate immediate nursing action?",
  options: {
    A: "Cover the wound with sterile saline-moistened gauze",
    B: "Cover the wound with Savlon-soaked gauze",
    C: "Cover the wound with sterile dry gauze"
  },
  correctAnswer: "A",
  rationaleCorrect: "In wound evisceration, the exposed organs should be protected from drying and contamination by covering them with sterile normal saline-moistened gauze.",
  rationalesIncorrect: {
    B: "Antiseptics like Savlon can irritate exposed tissues and should not be placed on eviscerated organs.",
    C: "Dry gauze can stick to tissues and cause injury during removal."
  }
},
{
  question: "A Director in a law firm reports with bleeding haemorrhoids. He is shy and withdrawn. As a nurse assessing this patient, what is the possible cause of this condition?",
  options: {
    A: "Pruritus",
    B: "Constipation",
    C: "Prolonged sitting"
  },
  correctAnswer: "C",
  rationaleCorrect: "A law firm director may spend long hours sitting. Prolonged sitting increases pressure on rectal veins and can contribute to haemorrhoids.",
  rationalesIncorrect: {
    A: "Pruritus means itching. It may be a symptom of haemorrhoids, but it is not a cause.",
    B: "Constipation is also a known risk factor for haemorrhoids, but in this scenario, the patient’s occupation strongly points to prolonged sitting."
  }
},
{
  question: "A 55-year-old farmer sustains a dislocation of the right arm while weeding and reports to the emergency department with pain in the right shoulder joint. What is the most serious complication that can occur in this joint dislocation?",
  options: {
    A: "Infection of the joint",
    B: "Avascular necrosis",
    C: "Deep vein thrombosis"
  },
  correctAnswer: "B",
  rationaleCorrect: "Shoulder dislocation can compromise blood supply to the head of the humerus. If the blood supply is severely affected, avascular necrosis may occur.",
  rationalesIncorrect: {
    A: "Infection may occur after open injuries or procedures, but it is not the most serious common complication of shoulder dislocation.",
    C: "Deep vein thrombosis is more associated with immobility and lower limb conditions than shoulder dislocation."
  }
},
{
  question: "A female diabetic patient has been admitted for laparotomy. What nursing intervention would you include to promote wound healing?",
  options: {
    A: "Ensure adequate amount of dietary carbohydrate",
    B: "Maintain normal blood glucose range",
    C: "Apply dry, sterile dressing to wound daily"
  },
  correctAnswer: "B",
  rationaleCorrect: "Good blood glucose control promotes wound healing and reduces infection risk. Hyperglycaemia delays healing and increases the risk of wound complications.",
  rationalesIncorrect: {
    A: "Nutrition is important, but simply increasing carbohydrate may worsen blood glucose control.",
    C: "Dressing care is important, but glucose control is more specific and critical in a diabetic surgical patient."
  }
},
{
  question: "A female patient scheduled for surgery is extremely obese and has cardiac problems. As a theatre nurse, you understand that placing this patient in a supine position may cause the patient to experience:",
  options: {
    A: "Comfort without complications in that position",
    B: "Limited range of motion when placed in that position",
    C: "Orthopnoea or dyspnoea when placed in that position"
  },
  correctAnswer: "C",
  rationaleCorrect: "In an obese patient with cardiac problems, lying flat can reduce lung expansion and increase workload on the heart. This can cause difficulty breathing or orthopnoea.",
  rationalesIncorrect: {
    A: "This is incorrect because supine positioning may worsen breathing in this patient.",
    B: "Limited movement may occur, but the major concern is respiratory difficulty."
  }
},
{
  question: "A housewife sustains a deep knife laceration while cooking. The wound bleeds profusely, is aseptically cleaned and sutured. She returns to the clinic after two weeks with much improvement. Her wound has healed by:",
  options: {
    A: "Second intention",
    B: "Third intention",
    C: "First intention"
  },
  correctAnswer: "C",
  rationaleCorrect: "A clean wound that is closed by suturing heals by first intention. The wound edges are brought together, allowing faster healing with minimal scarring.",
  rationalesIncorrect: {
    A: "Second intention occurs when a wound is left open to heal by granulation, contraction and epithelialisation.",
    B: "Third intention is delayed primary closure, where the wound is left open initially and closed later."
  }
},
{
  question: "A junior colleague asks you to brief him on surgical scrubbing before an operation. Your response may include the following EXCEPT:",
  options: {
    A: "Allow water from rinsed hands to drip from the elbow",
    B: "The hands should be raised above the elbow at all times after washing",
    C: "The second wash during the scrubbing should cover the whole length of the forearm"
  },
  correctAnswer: "C",
  rationaleCorrect: "During surgical scrubbing, the hands are kept above the elbows so water flows from the cleanest area to the less clean area. The statement about the second wash covering the whole length of the forearm is not the best standard step in the sequence.",
  rationalesIncorrect: {
    A: "This is appropriate because water should flow from fingertips toward the elbows, not from elbows back to the hands.",
    B: "This is correct because it prevents contaminated water from running back to the hands."
  }
},
{
  question: "A long leg cast is applied to a 22-year-old man after a fracture of the right tibia. The nurse observes that his exposed toes are swollen and he complains of numbness in the toes. Which nursing diagnosis is most appropriate?",
  options: {
    A: "Fluid volume excess related to vascular compression by cast",
    B: "Peripheral dysfunction related to vascular insufficiency and nerve compression by cast",
    C: "Fluid volume excess related to oedema"
  },
  correctAnswer: "B",
  rationaleCorrect: "Swollen toes and numbness after cast application suggest impaired circulation and nerve compression. This may indicate a tight cast or developing compartment syndrome.",
  rationalesIncorrect: {
    A: "The problem is local neurovascular compromise, not whole-body fluid excess.",
    C: "This does not explain the numbness and vascular compression caused by the cast."
  }
},
{
  question: "A 50-year-old male patient has undergone a major surgical procedure and has been transferred to the recovery room. During immediate post-operative assessment, the patient suddenly becomes cyanotic. What is the most appropriate nursing action?",
  options: {
    A: "Administer oxygen through a nasal cannula at 6 lpm",
    B: "Reposition the patient’s head and determine airway patency",
    C: "Call for assistance and begin cardiopulmonary resuscitation"
  },
  correctAnswer: "B",
  rationaleCorrect: "Sudden cyanosis after surgery suggests airway obstruction or poor ventilation. The nurse should first assess and open the airway by repositioning the head and checking airway patency.",
  rationalesIncorrect: {
    A: "Oxygen may be needed, but it will not help if the airway is obstructed.",
    C: "CPR is only indicated if the patient has no pulse or is not breathing effectively after airway assessment."
  }
},
{
  question: "A 67-year-old male diagnosed with benign prostate enlargement is expected to report for prostatectomy. Laboratory reports and investigations have all been completed and reviewed. Which is the most appropriate pre-operative nursing care for this patient?",
  options: {
    A: "High oral fluid intake should be encouraged",
    B: "Check for correct placement of urethral catheter",
    C: "Maintain nil per os a day prior to surgery"
  },
  correctAnswer: "A",
  rationaleCorrect: "Before the required fasting period begins, adequate fluid intake helps maintain hydration and urinary flow. This is useful in patients with prostate enlargement unless contraindicated.",
  rationalesIncorrect: {
    B: "This is more relevant if a catheter has already been inserted, especially post-operatively.",
    C: "Keeping the patient nil by mouth for a whole day is usually unnecessary and may cause dehydration."
  }
},
{
  question: "A male patient presents with sudden onset of scrotal pain that radiates to his abdomen after playing tennis. He denies sexual activity. He is afebrile with normal vital signs. His left testicle is tender and high-riding, and he has no penile discharge or lesion. Which treatment is most appropriate?",
  options: {
    A: "Detorsion and fixation",
    B: "Elevation of the affected testes and ice packs",
    C: "Ceftriaxone 250 mg IM and azithromycin 1 gram PO"
  },
  correctAnswer: "A",
  rationaleCorrect: "Sudden severe scrotal pain with a high-riding tender testicle should be treated as testicular torsion until proven otherwise. Testicular torsion is a surgical emergency, and treatment is urgent detorsion with fixation to prevent testicular loss.",
  rationalesIncorrect: {
    B: "Elevation and ice packs may be used for minor trauma or less urgent scrotal conditions, but they are not enough for suspected torsion.",
    C: "This treats sexually transmitted epididymitis, but the patient denies sexual activity and has no discharge, fever or infective symptoms."
  }
},
{
  question: "A male patient scheduled for surgery complains of increased respiratory secretions. Which drug is likely to be administered by the anaesthetist?",
  options: {
    A: "Neostigmine",
    B: "Atropine",
    C: "Pilocarpine"
  },
  correctAnswer: "B",
  rationaleCorrect: "Atropine is an anticholinergic drug. It reduces salivary and respiratory secretions before surgery, helping to keep the airway clearer during anaesthesia.",
  rationalesIncorrect: {
    A: "Neostigmine is mainly used to reverse the effects of some muscle relaxants after surgery. It does not reduce secretions.",
    C: "Pilocarpine increases secretions, so it would worsen the problem rather than reduce respiratory secretions."
  }
},
{
  question: "A male patient starts shivering uncontrollably after surgery. As part of immediate post-operative care, what nursing intervention would be the priority?",
  options: {
    A: "Apply warm blankets and continue oxygen therapy",
    B: "Consult the doctor for further orders",
    C: "Adjust the temperature in the room"
  },
  correctAnswer: "A",
  rationaleCorrect: "Post-operative shivering increases oxygen demand. Applying warm blankets helps restore body temperature, while oxygen therapy supports the increased oxygen need.",
  rationalesIncorrect: {
    B: "The doctor may be informed if shivering persists, but the nurse should first provide warmth and maintain oxygen.",
    C: "Adjusting the room temperature may help gradually, but it is not the immediate priority compared with warming the patient directly."
  }
},
{
  question: "A man sustains a cut while gardening. Why would he be given anti-tetanus immunoglobulin?",
  options: {
    A: "For increased active immunity",
    B: "For immediate protection by antibodies",
    C: "To provide a target for lymphocytes"
  },
  correctAnswer: "B",
  rationaleCorrect: "Anti-tetanus immunoglobulin provides passive immunity. It contains ready-made antibodies that give immediate protection against tetanus.",
  rationalesIncorrect: {
    A: "Active immunity is produced by vaccines, where the body makes its own antibodies over time.",
    C: "This does not explain the purpose of immunoglobulin. Immunoglobulin gives direct antibody protection."
  }
},
{
  question: "Which manifestation of cancer of the cervix would commonly bring the patient to the gynaecologist?",
  options: {
    A: "Heaviness in the abdomen",
    B: "Bloody spotting after intercourse",
    C: "Foul-smelling discharge"
  },
  correctAnswer: "B",
  rationaleCorrect: "Postcoital bleeding, or bleeding after sexual intercourse, is a common warning sign of cervical cancer and should be reported for gynaecological assessment.",
  rationalesIncorrect: {
    A: "Heaviness in the abdomen is vague and is not a classic early warning sign of cervical cancer.",
    C: "Foul-smelling discharge may occur in advanced disease or infection, but postcoital bleeding is the more typical presentation."
  }
},
{
  question: "A medical procedure in which an olive-shaped device is placed in the vagina with the help of laparoscopy in the treatment of vaginal hypoplasia is known as:",
  options: {
    A: "Vaginal dilatation",
    B: "Vecchietti procedure",
    C: "Vaginoplasty"
  },
  correctAnswer: "B",
  rationaleCorrect: "The Vecchietti procedure is used to create or lengthen the vagina in vaginal hypoplasia. It involves traction using an olive-shaped device placed in the vaginal dimple with laparoscopic assistance.",
  rationalesIncorrect: {
    A: "Vaginal dilatation uses dilators gradually, but it does not specifically involve laparoscopic placement of an olive-shaped device.",
    C: "Vaginoplasty is a general term for surgical reconstruction of the vagina, but the procedure described is specifically the Vecchietti procedure."
  }
},
{
  question: "A middle-aged man diagnosed with colon cancer uses opioids to control his pain at level 8 on a 0–10 scale and requests something more potent. The best way to document this is:",
  options: {
    A: "Neuropathic pain",
    B: "Somatic pain",
    C: "Breakthrough pain"
  },
  correctAnswer: "C",
  rationaleCorrect: "Breakthrough pain is pain that occurs despite regular pain medication. Since the patient is already on opioids but still reports severe pain and requests stronger relief, this is best documented as breakthrough pain.",
  rationalesIncorrect: {
    A: "Neuropathic pain is caused by nerve damage and is often described as burning, shooting or tingling.",
    B: "Somatic pain arises from skin, muscles, bones or connective tissues. The question focuses on pain breaking through opioid control."
  }
},
{
  question: "A middle-aged man with a compound fracture of the right arm is rushed to the emergency unit. What nursing intervention should be adopted for this type of fracture?",
  options: {
    A: "Cover the fracture with a sterile dressing",
    B: "Place a light compression bandage over the fracture",
    C: "Place the arm below the heart level"
  },
  correctAnswer: "A",
  rationaleCorrect: "A compound fracture is an open fracture where the bone communicates with the outside environment. Covering it with a sterile dressing helps reduce contamination and infection.",
  rationalesIncorrect: {
    B: "Compression over an open fracture may worsen tissue damage and bleeding.",
    C: "Placing the arm below heart level may increase swelling. The priority is to cover the wound and immobilise the limb."
  }
},
{
  question: "A middle-aged woman is admitted with left-sided hemiparesis, dizziness and severe headache. Which nursing measure is inappropriate when providing oral hygiene?",
  options: {
    A: "Cleaning the mouth with a toothbrush and toothpaste",
    B: "Keeping portable suctioning machine nearby",
    C: "Placing the patient on the back with pillow under the head"
  },
  correctAnswer: "C",
  rationaleCorrect: "A patient with hemiparesis and possible neurological impairment is at risk of aspiration. Placing the patient flat on the back during oral care is unsafe. Side-lying or turning the head to the side is safer.",
  rationalesIncorrect: {
    A: "Cleaning the mouth with a toothbrush and toothpaste may be appropriate if the patient can tolerate it safely.",
    B: "Keeping suction nearby is appropriate because suction may be needed to remove secretions and prevent aspiration."
  }
},
{
  question: "A midwife teaches a student nurse about the partograph and mentions that the following are part of the progress of labour EXCEPT:",
  options: {
    A: "Cervical dilatation",
    B: "Moulding",
    C: "Contractions"
  },
  correctAnswer: "B",
  rationaleCorrect: "Cervical dilatation and uterine contractions are indicators of progress of labour. Moulding is part of fetal condition assessment, not progress of labour.",
  rationalesIncorrect: {
    A: "Cervical dilatation is a major indicator of labour progress.",
    C: "Frequency and duration of contractions are used to assess the progress of labour."
  }
},
{
  question: "A newly married couple wants to know when ovulation usually takes place so they can plan their family. The nurse explains that ovulation occurs about 14 days ______ the start of the next menstrual period.",
  options: {
    A: "Before",
    B: "Between",
    C: "After"
  },
  correctAnswer: "A",
  rationaleCorrect: "Ovulation usually occurs about 14 days before the start of the next menstrual period in a regular menstrual cycle.",
  rationalesIncorrect: {
    B: "Between is too vague and does not correctly complete the statement.",
    C: "Ovulation does not usually occur 14 days after the next menstrual period. It occurs before the next period begins."
  }
},
{
  question: "Non-Steroidal Anti-Inflammatory Drugs, commonly known as NSAIDs, are classified under non-narcotic analgesics. Which of the following is widely used to manage post-operative pain?",
  options: {
    A: "Tramadol",
    B: "Ibuprofen",
    C: "Paracetamol"
  },
  correctAnswer: "B",
  rationaleCorrect: "Ibuprofen is an NSAID and a non-narcotic analgesic. It helps relieve pain and inflammation and may be used for mild to moderate post-operative pain where not contraindicated.",
  rationalesIncorrect: {
    A: "Tramadol is an opioid-like analgesic, not an NSAID.",
    C: "Paracetamol is a non-narcotic analgesic, but it is not classified as an NSAID because it has weak anti-inflammatory action."
  }
},
{
  question: "A normal reproductive function that may be altered in a patient who has undergone prostatectomy is:",
  options: {
    A: "Production of testosterone",
    B: "Production of seminal fluid",
    C: "Release of sperm from the epididymis"
  },
  correctAnswer: "B",
  rationaleCorrect: "The prostate gland contributes fluid to semen. After prostatectomy, production and ejaculation of seminal fluid may be affected.",
  rationalesIncorrect: {
    A: "Testosterone is produced mainly by the testes, not the prostate.",
    C: "Sperm maturation and release involve the epididymis and reproductive ducts, not the prostate gland directly."
  }
},
{
  question: "A nurse assessing a patient’s eye identifies involuntary rhythmic movements of the eyes. This can be documented as:",
  options: {
    A: "Vertigo",
    B: "Nystagmus",
    C: "Astigmatism"
  },
  correctAnswer: "B",
  rationaleCorrect: "Nystagmus refers to involuntary rhythmic movement of the eyes. It may occur in neurological, vestibular or ocular disorders.",
  rationalesIncorrect: {
    A: "Vertigo is a sensation of spinning or dizziness, not eye movement.",
    C: "Astigmatism is a refractive error caused by irregular curvature of the cornea or lens."
  }
},
{
  question: "A nurse caring for a patient after thoracic surgery is concerned that the patient’s midsternal wound is at risk for dehiscence. Which intervention is best to prevent this complication?",
  options: {
    A: "Use appropriate sterile technique to change dressing",
    B: "Place a pillow over the incision site when the client is attempting to cough",
    C: "Administer antibiotics"
  },
  correctAnswer: "B",
  rationaleCorrect: "Splinting the incision with a pillow during coughing reduces tension on the wound edges. This helps prevent wound separation or dehiscence.",
  rationalesIncorrect: {
    A: "Sterile technique helps prevent infection, but it does not directly reduce mechanical stress on the wound.",
    C: "Antibiotics may prevent or treat infection but do not directly prevent wound separation during coughing."
  }
},
{
  question: "A nurse is dressing an abdominal wound and the wound drain has to be removed. The nurse understands that the decision to remove the drain mostly depends on:",
  options: {
    A: "Extent of the incision",
    B: "Absence of infection",
    C: "Amount of drainage"
  },
  correctAnswer: "C",
  rationaleCorrect: "A wound drain is usually removed when the drainage has reduced to an acceptable amount. The volume and nature of drainage guide the decision.",
  rationalesIncorrect: {
    A: "The size of the incision alone does not determine when a drain should be removed.",
    B: "Absence of infection is important, but drain removal mainly depends on the amount of drainage."
  }
},
{
  question: "A nurse is evaluating the plan of care for a client with acute abdominal pain at the male surgical ward. Which outcomes would be expected?\n\nI. Resolution of cause.\nII. Relief of abdominal pain.\nIII. Freedom from complications.\nIV. Normal fluid and electrolytes.",
  options: {
    A: "I and II",
    B: "I, II, III and IV",
    C: "I, II and III"
  },
  correctAnswer: "B",
  rationaleCorrect: "Expected outcomes for acute abdominal pain include treating the cause, relieving pain, preventing complications and maintaining normal fluid and electrolyte balance.",
  rationalesIncorrect: {
    A: "This is incomplete because it excludes prevention of complications and fluid and electrolyte balance.",
    C: "This is incomplete because it excludes fluid and electrolyte balance, which is important in abdominal conditions."
  }
},
{
  question: "A nurse is obtaining history from a patient who complains of toothache and inability to taste food. Which finding would alert the nurse that the infection has spread?",
  options: {
    A: "Headache and chills",
    B: "Facial swelling and headache",
    C: "Yellow secretions"
  },
  correctAnswer: "B",
  rationaleCorrect: "Facial swelling with headache suggests that a dental infection may have spread beyond the tooth into surrounding facial tissues.",
  rationalesIncorrect: {
    A: "Chills may suggest systemic infection, but facial swelling is a stronger sign that the local dental infection has spread.",
    C: "Yellow discharge may indicate local infection, but it does not necessarily show spread to surrounding tissues."
  }
},
{
  question: "A nurse prepares Mrs Oti for discharge after thyroidectomy. Which sign of surgically induced hypothyroidism should she be told to report?",
  options: {
    A: "Dry skin and fatigue",
    B: "Progressive weight loss",
    C: "Intolerance to heat"
  },
  correctAnswer: "A",
  rationaleCorrect: "Hypothyroidism occurs when thyroid hormone levels are low. Common features include fatigue, dry skin, cold intolerance, weight gain and sluggishness.",
  rationalesIncorrect: {
    B: "Progressive weight loss is more commonly associated with hyperthyroidism.",
    C: "Heat intolerance is a feature of hyperthyroidism, not hypothyroidism."
  }
},
{
  question: "A nurse assesses a 50-year-old woman with advanced ovarian cancer. Which of the following is NOT a typical symptom of the disease?",
  options: {
    A: "Diarrhoea",
    B: "Abdominal pain",
    C: "Abdominal bleeding"
  },
  correctAnswer: "C",
  rationaleCorrect: "Advanced ovarian cancer commonly causes abdominal pain, bloating, early satiety and bowel changes. Abdominal bleeding is not a typical symptom described by patients.",
  rationalesIncorrect: {
    A: "Bowel changes such as diarrhoea or constipation may occur due to pressure from the tumour.",
    B: "Abdominal or pelvic pain is a common symptom of ovarian cancer."
  }
},
{
  question: "A nursing diagnosis of impaired physical mobility related to fractured hip is made for Maame Gyama. Which action would the nurse include when moving the patient in bed? Place a pillow:",
  options: {
    A: "Under the waist",
    B: "Under the knee",
    C: "In between the legs"
  },
  correctAnswer: "C",
  rationaleCorrect: "Placing a pillow between the legs helps maintain proper alignment of the hip and prevents adduction or rotation that may worsen injury or discomfort.",
  rationalesIncorrect: {
    A: "Placing a pillow under the waist does not properly support the fractured hip.",
    B: "Placing a pillow under the knee may promote flexion and does not provide the needed hip alignment support."
  }
},
{
  question: "A nursing diagnosis of self-esteem disturbance related to perception of scars is identified for a patient with Buruli ulcer. Which goal will take the utmost priority?",
  options: {
    A: "Promoting wound haemostasis",
    B: "Gaining confidence",
    C: "Preventing further injury"
  },
  correctAnswer: "B",
  rationaleCorrect: "The nursing diagnosis focuses on disturbed self-esteem due to scars. Therefore, the priority goal should be to help the patient regain confidence and improve self-image.",
  rationalesIncorrect: {
    A: "Haemostasis relates to bleeding control, not self-esteem.",
    C: "Preventing further injury is important generally, but it does not directly address the patient’s disturbed self-esteem."
  }
},
{
  question: "Which nursing intervention is most appropriate to decrease post-operative oedema and pain following inguinal herniorrhaphy?",
  options: {
    A: "Applying scrotal support with ice bag",
    B: "Applying a truss to the hernia",
    C: "Supporting the incision during coughing"
  },
  correctAnswer: "A",
  rationaleCorrect: "After inguinal herniorrhaphy, scrotal support and ice packs help reduce swelling, oedema and pain.",
  rationalesIncorrect: {
    B: "A truss is used before surgery to support a reducible hernia, not after surgical repair.",
    C: "Supporting the incision during coughing helps prevent strain on the wound, but it does not specifically reduce scrotal oedema and pain."
  }
},
{
  question: "Which nursing intervention would assist a pre-operative patient in coping with fear of pain?",
  options: {
    A: "Explain the availability of pain medication",
    B: "Describe the degree of pain expected",
    C: "Divert the patient when talking about pain"
  },
  correctAnswer: "A",
  rationaleCorrect: "Explaining that pain medication will be available reassures the patient and reduces fear of uncontrolled pain after surgery.",
  rationalesIncorrect: {
    B: "Describing the degree of pain expected may increase fear if not handled carefully.",
    C: "Avoiding the topic prevents the patient from expressing fears and receiving reassurance."
  }
},
{
  question: "A 32-year-old patient has just had a caesarean section for her third child. To avoid returning for suture removal, the surgeon should use which type of suture?",
  options: {
    A: "Synthetic non-absorbable suture",
    B: "Synthetic absorbable suture",
    C: "Natural absorbable suture"
  },
  correctAnswer: "B",
  rationaleCorrect: "Absorbable sutures are broken down by the body and do not require removal. Synthetic absorbable sutures are commonly used because they provide reliable wound support and predictable absorption.",
  rationalesIncorrect: {
    A: "Non-absorbable sutures usually require removal later.",
    C: "Natural absorbable sutures may be absorbed, but synthetic absorbable sutures are more commonly preferred due to predictable absorption and lower tissue reaction."
  }
},
{
  question: "A 47-year-old patient had a procedure that detected minor problems with his heart’s blood vessels before surgery. The procedure can be classified as which type of study?",
  options: {
    A: "Invasive pre-operative",
    B: "Non-invasive intra-operative",
    C: "Invasive intra-operative"
  },
  correctAnswer: "A",
  rationaleCorrect: "A procedure that examines the heart’s blood vessels, such as cardiac catheterisation or angiography, is invasive. If it is done to assess the patient before surgery, it is classified as an invasive pre-operative study.",
  rationalesIncorrect: {
    B: "This is incorrect because studying heart blood vessels usually involves an invasive procedure.",
    C: "Intra-operative means during the actual operation. The question suggests the procedure was done as an assessment study before surgery, not during surgery."
  }
},
{
  question: "A patient at the female surgical ward has undergone colostomy surgery. In planning post-operative care, which major aspects should be considered?\n\nI. Emotional support.\nII. Teaching about stoma care.\nIII. Teaching about colostomy.\nIV. Sexual activities.",
  options: {
    A: "I and II",
    B: "I, II and III",
    C: "I, II, III and IV"
  },
  correctAnswer: "C",
  rationaleCorrect: "Post-colostomy care should be holistic. The nurse should provide emotional support, teach stoma care, explain colostomy management and discuss sexual concerns when appropriate.",
  rationalesIncorrect: {
    A: "This is incomplete because it excludes general colostomy education and sexual health concerns.",
    B: "This is also incomplete because sexual activity and body image concerns are important after colostomy."
  }
},
{
  question: "A patient being prepared for major abdominal surgery is instructed to keep nothing by mouth for how many hours before surgery?",
  options: {
    A: "6 to 8",
    B: "2 to 4",
    C: "8 to 12"
  },
  correctAnswer: "A",
  rationaleCorrect: "For major surgery, patients are commonly kept nil by mouth for about 6–8 hours before surgery to reduce the risk of aspiration during anaesthesia.",
  rationalesIncorrect: {
    B: "This may be too short for solid foods before major surgery.",
    C: "This is longer than necessary in many cases and may increase discomfort, dehydration and hypoglycaemia risk."
  }
},
{
  question: "A patient complains of feeling dizzy while walking in the ward on the second post-operative day. As the nurse on duty, what nursing actions should you take?\n\nI. Sit patient down.\nII. Take patient full history.\nIII. Check patient BP.\nIV. Administer analgesics.",
  options: {
    A: "II, III and IV",
    B: "I and II",
    C: "I and III"
  },
  correctAnswer: "C",
  rationaleCorrect: "The nurse should first sit the patient down to prevent falls, then check the blood pressure to assess for postural hypotension or circulatory problems.",
  rationalesIncorrect: {
    A: "This delays immediate safety action and includes analgesics, which are not indicated for dizziness.",
    B: "This omits checking blood pressure, which is important in a dizzy post-operative patient."
  }
},
{
  question: "A patient complains of severe pain two days following surgery. What should the nurse do first?",
  options: {
    A: "Administer the p.r.n. analgesic",
    B: "Ensure the patient is having enough rest",
    C: "Find out when the last analgesic was given"
  },
  correctAnswer: "C",
  rationaleCorrect: "Before giving another analgesic, the nurse should assess when the last dose was given to avoid overdose and determine whether the medication schedule is appropriate.",
  rationalesIncorrect: {
    A: "This may be appropriate after assessment, but the nurse must first check the last dose and timing.",
    B: "Rest is helpful, but it does not replace proper pain assessment and safe pain management."
  }
},
{
  question: "A patient convalescing from abdominal surgery develops thrombophlebitis. Which sign would indicate that this complication has occurred?",
  options: {
    A: "Severe pain on exertion of the extremity",
    B: "Intermittent claudication",
    C: "Localised warmth and tenderness of the leg"
  },
  correctAnswer: "C",
  rationaleCorrect: "Thrombophlebitis involves inflammation of a vein with clot formation. It commonly presents with localised warmth, redness, tenderness and swelling along the affected vein.",
  rationalesIncorrect: {
    A: "Severe pain on exertion is not the classic sign of thrombophlebitis.",
    B: "Intermittent claudication is cramping leg pain during walking due to peripheral arterial disease, not thrombophlebitis."
  }
},
{
  question: "A patient develops a 5 cm erythema on the sacrum which becomes a blister two days later, with surrounding bruising extending bilaterally over the buttocks. What is the most likely diagnosis?",
  options: {
    A: "Stage I pressure ulcer",
    B: "Stage III pressure ulcer",
    C: "Stage II pressure ulcer"
  },
  correctAnswer: "C",
  rationaleCorrect: "A stage II pressure ulcer involves partial-thickness skin loss and may appear as a blister or shallow open ulcer. Since the area has progressed from redness to blistering, stage II is most likely.",
  rationalesIncorrect: {
    A: "Stage I presents as non-blanchable redness with intact skin, not blistering.",
    B: "Stage III involves full-thickness skin loss with damage into subcutaneous tissue, which is not described here."
  }
},
{
  question: "A patient diagnosed with first stage cancer of the colon is scheduled for colostomy. Post-operative care of the stoma following colostomy includes the following EXCEPT:",
  options: {
    A: "Changing the colostomy bag every 3 hours",
    B: "Changing dressing as and when soiled",
    C: "Cleaning the stoma when changing dressing and bag"
  },
  correctAnswer: "A",
  rationaleCorrect: "A colostomy bag does not need to be changed every 3 hours routinely. It is emptied or changed based on the amount of stool, leakage, odour or the type of appliance used.",
  rationalesIncorrect: {
    B: "Changing dressing when soiled is appropriate because soiled dressings increase infection risk and irritate the skin.",
    C: "Cleaning the stoma when changing dressing and bag is appropriate because it keeps the stoma and surrounding skin clean and healthy."
  }
},
{
  question: "A patient diagnosed with peptic ulcer may be booked for surgery when she presents with which signs and symptoms?",
  options: {
    A: "Vomiting and pain",
    B: "Fever and indigestion",
    C: "Haemorrhage and fever"
  },
  correctAnswer: "C",
  rationaleCorrect: "Surgery may be required when peptic ulcer disease develops complications such as haemorrhage, perforation or obstruction. Fever may suggest serious complications such as perforation or peritonitis.",
  rationalesIncorrect: {
    A: "Vomiting and pain can occur in uncomplicated peptic ulcer disease and do not always require surgery.",
    B: "Fever and indigestion alone are not clear indications for surgery."
  }
},
{
  question: "A patient diagnosed with thyroid gland cancer undergoes total thyroidectomy. Which hormone is expected to increase in the blood?",
  options: {
    A: "Thyroid hormone",
    B: "Thyroid tumour markers",
    C: "Thyroid stimulating hormone"
  },
  correctAnswer: "C",
  rationaleCorrect: "After total thyroidectomy, thyroid hormone levels fall unless replacement therapy is given. In response, the pituitary gland increases thyroid stimulating hormone to try to stimulate the thyroid, although the gland has been removed.",
  rationalesIncorrect: {
    A: "Thyroid hormone is expected to decrease after removal of the thyroid gland.",
    B: "Thyroid tumour markers may be monitored after thyroid cancer treatment, but they are not the expected hormone to increase."
  }
},
{
  question: "A patient enters the emergency department with a lower leg injury. There is visible deformity to the lower aspect of the leg, and it appears shorter than the other leg. The patient complains of pain and swelling, with signs of bruising. The patient is likely to be diagnosed with:",
  options: {
    A: "Fracture",
    B: "Contusion",
    C: "Sprain"
  },
  correctAnswer: "A",
  rationaleCorrect: "Visible deformity, limb shortening, pain, swelling and bruising strongly suggest a fracture.",
  rationalesIncorrect: {
    B: "A contusion is a bruise from soft tissue injury. It does not usually cause deformity or shortening of the limb.",
    C: "A sprain is an injury to ligaments around a joint. It may cause pain and swelling, but deformity and shortening suggest fracture."
  }
},
{
  question: "A patient had jejunal graft with NG tube in situ. To reduce the risk of pulmonary aspiration in a patient with NG tube in situ, what should the nurse do?\n\nI. Place the tube beyond the pylorus.\nII. Put patient in a semi-Fowler’s position.\nIII. Give more fluids with the feeds.\nIV. Raise head end of the bed.",
  options: {
    A: "II, III and IV",
    B: "I, II and III",
    C: "I, II and IV"
  },
  correctAnswer: "C",
  rationaleCorrect: "To reduce aspiration risk in a patient with an NG tube, the tube may be placed beyond the pylorus, the patient should be nursed in semi-Fowler’s position, and the head end of the bed should be elevated. These measures reduce the chance of gastric contents flowing back into the airway.",
  rationalesIncorrect: {
    A: "This is wrong because it includes giving more fluids with feeds, which may increase gastric volume and raise the risk of regurgitation and aspiration.",
    B: "This is wrong because it includes giving more fluids and excludes raising the head end of the bed."
  }
},
{
  question: "A patient has a fracture of the right femur and is in skeletal traction. Which appropriate bed accessory would help relieve pressure on the buttocks?",
  options: {
    A: "Trapeze",
    B: "Side rails",
    C: "Sand bag"
  },
  correctAnswer: "A",
  rationaleCorrect: "A trapeze allows the patient to lift the upper body and buttocks slightly while in bed. This helps relieve pressure, promotes repositioning and reduces the risk of pressure sores.",
  rationalesIncorrect: {
    B: "Side rails help prevent falls, but they do not relieve pressure on the buttocks.",
    C: "Sandbags may help maintain limb position, but they do not help the patient lift the body to relieve pressure."
  }
},
{
  question: "A patient has been admitted to your ward for planned abdominal surgery. Which of the following would be most appropriate to include in your pre-operative teaching?",
  options: {
    A: "Effective deep breathing and coughing",
    B: "Medication during surgery",
    C: "Care of incision site"
  },
  correctAnswer: "A",
  rationaleCorrect: "Deep breathing and coughing exercises are important before abdominal surgery because they help prevent post-operative lung complications such as atelectasis and pneumonia.",
  rationalesIncorrect: {
    B: "The patient may be educated generally about anaesthesia, but detailed intra-operative medication is not the main pre-operative nursing teaching.",
    C: "Incision care is important after surgery, but before abdominal surgery, teaching breathing and coughing exercises is a key priority."
  }
},
{
  question: "A patient has been brought back to the surgical ward after a prostatectomy operation. Manual irrigation of the urethral catheter following prostatectomy is necessary to:",
  options: {
    A: "Remove blood clots",
    B: "Relieve abdominal pain",
    C: "Maintain patency"
  },
  correctAnswer: "A",
  rationaleCorrect: "After prostatectomy, bleeding may occur and blood clots can block the catheter. Manual irrigation is done mainly to remove clots and restore urine drainage.",
  rationalesIncorrect: {
    B: "Pain may reduce after the bladder drains properly, but the direct purpose of irrigation is not pain relief.",
    C: "Maintaining catheter patency is important, but manual irrigation specifically achieves this by removing blood clots."
  }
},
{
  question: "A patient has been diagnosed with diverticular disease. As the attending nurse, you understand that this condition commonly occurs in which part of the colon?",
  options: {
    A: "Transverse colon",
    B: "Descending colon",
    C: "Ascending colon"
  },
  correctAnswer: "B",
  rationaleCorrect: "Diverticular disease most commonly affects the left side of the colon, especially the sigmoid and descending colon.",
  rationalesIncorrect: {
    A: "Diverticular disease can occur anywhere in the colon, but the transverse colon is not the commonest site.",
    C: "The ascending colon may be affected in some patients, but it is less common than the left colon."
  }
},
{
  question: "A patient has been on your ward for the past 4 days. She was booked for diagnostic surgery. Which of the following is likely to be performed on her?",
  options: {
    A: "Exploratory laparotomy",
    B: "Gastro-jejunostomy",
    C: "Cholecystectomy"
  },
  correctAnswer: "A",
  rationaleCorrect: "Exploratory laparotomy is a diagnostic surgical procedure where the abdomen is opened to identify the cause of disease or symptoms when the diagnosis is uncertain.",
  rationalesIncorrect: {
    B: "Gastro-jejunostomy is a therapeutic procedure used to create a connection between the stomach and jejunum.",
    C: "Cholecystectomy is removal of the gallbladder and is mainly a therapeutic surgery, not primarily diagnostic."
  }
},
{
  question: "A patient has been received into the operating room for thyroidectomy. Which of the following is not applicable to the intended procedure?",
  options: {
    A: "Sand bag",
    B: "Foot rest",
    C: "Tracheostomy set"
  },
  correctAnswer: "B",
  rationaleCorrect: "A foot rest is not specifically required for thyroidectomy. Thyroidectomy requires proper neck extension, usually with support under the shoulders, and emergency airway equipment should be available.",
  rationalesIncorrect: {
    A: "A sandbag or shoulder support may be used to extend the neck and expose the thyroid area.",
    C: "A tracheostomy set should be available because airway obstruction may occur due to bleeding, swelling or laryngeal complications."
  }
},
{
  question: "A patient has reported to the OPD with a diagnosis of primary hyperparathyroidism. Which of these indicators would require surgical intervention?",
  options: {
    A: "Serum calcium level greater than 0.25 mmol/L",
    B: "Urinary calcium of 10 mmol/L",
    C: "Urinary calcium of 8 mmol/L"
  },
  correctAnswer: "A",
  rationaleCorrect: "In primary hyperparathyroidism, surgery may be indicated when serum calcium is significantly above the normal upper limit. The question likely refers to serum calcium being more than 0.25 mmol/L above the upper limit of normal, which is a recognised indication for parathyroid surgery.",
  rationalesIncorrect: {
    B: "Urinary calcium is usually interpreted over 24 hours, not simply as mmol/L. This option is less precise.",
    C: "This is lower than option B and does not clearly indicate the need for surgery."
  }
},
{
  question: "A patient is evaluated by Nurse Joloto after a fall. Nurse Joloto is likely to use the varus stress test of the knee in the evaluation. This action of the nurse is referred to as:",
  options: {
    A: "Force that moves the joint away from the midline",
    B: "Stress on the vagus nerve",
    C: "Movement of joint toward the midline of the body"
  },
  correctAnswer: "C",
  rationaleCorrect: "Varus refers to inward angulation or movement toward the midline. A varus stress test of the knee is used to assess the lateral collateral ligament.",
  rationalesIncorrect: {
    A: "This describes valgus movement, not varus.",
    B: "Varus has nothing to do with the vagus nerve."
  }
},
{
  question: "A patient is finding it difficult to void after an indwelling catheter has been removed. This may be due to:",
  options: {
    A: "Fluid imbalance",
    B: "Nervous tension following the procedure",
    C: "An interruption in the normal voiding habits"
  },
  correctAnswer: "C",
  rationaleCorrect: "After catheter removal, the bladder may take time to return to its normal voiding pattern. Catheterisation can interrupt the normal urge and habit of urination.",
  rationalesIncorrect: {
    A: "Fluid imbalance may affect urine output, but it is not the common reason for difficulty voiding immediately after catheter removal.",
    B: "Anxiety can contribute, but the more direct explanation is interruption of normal voiding habits."
  }
},
{
  question: "A patient is on your ward with fractured right humerus. Testing for crepitus in a patient with fracture of the humerus should be avoided because it:",
  options: {
    A: "Can produce further tissue damage",
    B: "Will lead to gangrene formation",
    C: "Can lead to shortening of the limb"
  },
  correctAnswer: "A",
  rationaleCorrect: "Crepitus is the grating sound or sensation from broken bone ends rubbing together. Deliberately testing for it can cause further injury to muscles, blood vessels, nerves and surrounding tissues.",
  rationalesIncorrect: {
    B: "Gangrene is caused by loss of blood supply and tissue death, not directly by testing for crepitus.",
    C: "Limb shortening results from fracture displacement, not specifically from checking for crepitus."
  }
},
{
  question: "A patient is rushed to your emergency department after sustaining burn injuries to the arms and trunk. In assessing the patient, the severity of a burn injury depends on:\n\nI. Age of patient.\nII. Amount of surface area burnt.\nIII. Presence of inhalation injury.\nIV. Prompt treatment given.",
  options: {
    A: "I, II, III and IV",
    B: "II, III and IV",
    C: "I, II and III"
  },
  correctAnswer: "C",
  rationaleCorrect: "Burn severity depends on the patient’s age, the percentage of body surface area burnt, the depth and location of the burn, and whether inhalation injury is present. These factors determine risk of complications and survival.",
  rationalesIncorrect: {
    A: "This is wrong because prompt treatment affects outcome but is not used to classify the initial severity of the burn.",
    B: "This is wrong because it excludes age and includes prompt treatment."
  }
},
{
  question: "A patient is scheduled for wide local excision with axillary clearance in theatre. Which instrument will the anaesthetist use to aid intubation of the patient?",
  options: {
    A: "Laryngoscope",
    B: "Magill’s forceps",
    C: "Bougie"
  },
  correctAnswer: "A",
  rationaleCorrect: "A laryngoscope is used to visualise the vocal cords during endotracheal intubation. It is the common instrument used to aid placement of the endotracheal tube.",
  rationalesIncorrect: {
    B: "Magill’s forceps may be used to guide a tube during nasal intubation or remove foreign bodies, but it is not the main instrument for intubation.",
    C: "A bougie may assist difficult intubation, but the standard instrument used to aid intubation is the laryngoscope."
  }
},
{
  question: "A patient is suspected of having a basilar skull fracture if there is:\n\nI. Bleeding on the eye.\nII. Cerebrospinal fluid leaks through the nose.\nIII. Cerebrospinal fluid leaks through the ears.\nIV. Bruising over the mastoid.",
  options: {
    A: "I, II and IV",
    B: "I, II and III",
    C: "II and III"
  },
  correctAnswer: "C",
  rationaleCorrect: "Cerebrospinal fluid leaking from the nose or ears is a classic sign of basilar skull fracture. It indicates that the skull base and meninges may have been injured.",
  rationalesIncorrect: {
    A: "This excludes cerebrospinal fluid leakage through the ears and includes the poorly worded eye bleeding.",
    B: "This includes the poorly worded eye bleeding and excludes mastoid bruising."
  }
},
{
  question: "A patient is suspected of having diverticulitis. Which of the underlisted diagnostic investigations can be used to confirm the diagnosis?\n\nI. Colonoscopy.\nII. Barium enema.\nIII. Digital rectal examination.\nIV. WBC count.",
  options: {
    A: "I only",
    B: "I and II",
    C: "I, II, III and IV"
  },
  correctAnswer: "B",
  rationaleCorrect: "Colonoscopy and barium enema can help evaluate diverticular disease. They show diverticula and help assess the colon, although acute diverticulitis is often evaluated with imaging such as CT scan.",
  rationalesIncorrect: {
    A: "This is incomplete because barium enema may also demonstrate diverticular disease.",
    C: "This is wrong because digital rectal examination and WBC count do not confirm the diagnosis."
  }
},
{
  question: "A patient on admission in your ward is suspected to have cancer of the oral cavity and throat. Which history finding increases the risk of the patient’s condition?",
  options: {
    A: "A history of smoking",
    B: "Worked as a banker",
    C: "Adult onset of diabetes"
  },
  correctAnswer: "A",
  rationaleCorrect: "Smoking is a major risk factor for cancers of the oral cavity and throat. Tobacco exposes the mucosa to carcinogens that can lead to malignant changes.",
  rationalesIncorrect: {
    B: "Working as a banker is not a major risk factor for oral or throat cancer.",
    C: "Diabetes may affect general health and healing, but it is not a major direct risk factor for oral cavity and throat cancer."
  }
},
{
  question: "A patient on continuous bladder irrigation complains of lower abdominal discomfort. What is the nurse’s best action?",
  options: {
    A: "Assess the amount of urine in bag",
    B: "Monitor the vital signs",
    C: "Check the patency of the catheter"
  },
  correctAnswer: "C",
  rationaleCorrect: "Lower abdominal discomfort during continuous bladder irrigation may indicate bladder distension from catheter blockage. The nurse should first check whether the catheter is patent and draining properly.",
  rationalesIncorrect: {
    A: "This is useful, but the priority is to check whether the catheter is blocked.",
    B: "Vital signs are important, but they do not directly address the likely cause of abdominal discomfort during bladder irrigation."
  }
},
];