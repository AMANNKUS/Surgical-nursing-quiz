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
];