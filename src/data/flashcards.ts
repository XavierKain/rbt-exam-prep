import type { Flashcard } from '../types';

export const flashcards: Flashcard[] = [
  // ============================================================
  // A. Measurement
  // ============================================================

  // A-01: Prepare for data collection
  {
    id: 'fc001',
    category: 'A. Measurement',
    taskCode: 'A-01',
    term: 'Prepare for Data Collection',
    definition:
      'Before a session begins, the RBT must ensure all necessary data collection materials are ready. This includes having data sheets, writing instruments, timing devices, and any other tools specified in the behavior plan. Proper preparation prevents missed data and ensures accurate measurement of target behaviors from the start of the session.',
  },

  // A-02: Implement continuous measurement procedures
  {
    id: 'fc002',
    category: 'A. Measurement',
    taskCode: 'A-02',
    term: 'Continuous Measurement Procedures',
    definition:
      'Continuous measurement involves recording every instance of a target behavior during an observation period. Unlike discontinuous methods, no instances are intentionally missed. Common continuous measurement procedures include frequency/count, duration, and interresponse time (IRT).',
  },
  {
    id: 'fc003',
    category: 'A. Measurement',
    taskCode: 'A-02',
    term: 'Frequency (Event Recording)',
    definition:
      'Frequency recording involves counting each occurrence of a target behavior during an observation period. It is best used for behaviors that have a clear beginning and end and that do not occur at such high rates that counting becomes difficult. When the observation periods vary in length, frequency can be converted to rate (count divided by time) to allow meaningful comparison across sessions.',
  },
  {
    id: 'fc004',
    category: 'A. Measurement',
    taskCode: 'A-02',
    term: 'Duration Recording',
    definition:
      'Duration recording measures the total amount of time a person engages in a target behavior during an observation period. A timing device is started when the behavior begins and stopped when it ends. This procedure is most appropriate for behaviors where the concern is how long the behavior lasts, such as tantrums, on-task behavior, or time spent completing a task.',
  },
  {
    id: 'fc005',
    category: 'A. Measurement',
    taskCode: 'A-02',
    term: 'Interresponse Time (IRT)',
    definition:
      'Interresponse time (IRT) is the amount of time that elapses between two consecutive instances of the same behavior. It is measured from the end of one response to the beginning of the next response. IRT data can help identify patterns in behavior and is useful when the goal is to increase or decrease the time between responses.',
  },

  // A-03: Implement discontinuous measurement procedures
  {
    id: 'fc006',
    category: 'A. Measurement',
    taskCode: 'A-03',
    term: 'Discontinuous Measurement Procedures',
    definition:
      'Discontinuous measurement involves observing behavior during only part of the total observation period by dividing the session into smaller time intervals. Because not every moment is observed, these procedures provide an estimate rather than an exact count of behavior. They are useful when continuous recording is impractical due to high-rate behaviors or multiple behaviors being tracked simultaneously.',
  },
  {
    id: 'fc007',
    category: 'A. Measurement',
    taskCode: 'A-03',
    term: 'Partial Interval Recording',
    definition:
      'In partial interval recording, the observation period is divided into equal intervals, and the observer records whether the behavior occurred at any point during each interval. If the behavior occurs even briefly, the interval is scored as an occurrence. This method tends to overestimate the actual occurrence of behavior, especially for behaviors of longer duration.',
  },
  {
    id: 'fc008',
    category: 'A. Measurement',
    taskCode: 'A-03',
    term: 'Whole Interval Recording',
    definition:
      'In whole interval recording, the observation period is divided into equal intervals, and the observer records the behavior only if it occurred throughout the entire interval without stopping. If the behavior pauses at any point during the interval, that interval is not scored. This method tends to underestimate the actual occurrence of behavior.',
  },
  {
    id: 'fc009',
    category: 'A. Measurement',
    taskCode: 'A-03',
    term: 'Momentary Time Sampling',
    definition:
      'Momentary time sampling involves dividing the observation period into equal intervals and recording whether the behavior is occurring at the exact moment each interval ends. The observer only looks at the precise instant the interval concludes, not during the interval itself. This method provides an unbiased estimate of behavior and is the least demanding of the three interval-based methods for the observer.',
  },

  // A-04: Implement permanent product recording
  {
    id: 'fc010',
    category: 'A. Measurement',
    taskCode: 'A-04',
    term: 'Permanent Product Recording',
    definition:
      'Permanent product recording measures behavior by examining the tangible outcomes or products that result from the behavior after it has occurred. Examples include counting completed math worksheets, number of items assembled, or broken objects. This method does not require the observer to be present during the behavior and provides a lasting record that can be reviewed later for accuracy.',
  },

  // A-05: Enter data and update graphs
  {
    id: 'fc011',
    category: 'A. Measurement',
    taskCode: 'A-05',
    term: 'Enter Data and Update Graphs',
    definition:
      'After each session, the RBT is responsible for accurately entering collected data into the appropriate system and updating visual displays such as graphs. Timely and accurate data entry ensures that behavior analysts can make informed decisions about treatment. Errors in data entry or graphing can lead to incorrect conclusions about client progress.',
  },

  // A-06: Describe behavior and environment in observable and measurable terms
  {
    id: 'fc012',
    category: 'A. Measurement',
    taskCode: 'A-06',
    term: 'Describing Behavior in Observable and Measurable Terms',
    definition:
      'Behavior should be described using objective, clear language so that any observer could identify when the behavior occurs. Descriptions should refer to specific, observable actions rather than internal states or labels. For example, instead of saying a client is "angry," the RBT should describe what the client does, such as "clenches fists and raises voice above conversational level." This ensures consistency in data collection across observers.',
  },

  // A-07: Design, plot, and interpret data using equal-interval graphs
  {
    id: 'fc013',
    category: 'A. Measurement',
    taskCode: 'A-07',
    term: 'Equal-Interval Graphs (Line Graphs)',
    definition:
      'Equal-interval graphs display data points across sessions or time periods with equally spaced intervals on the x-axis and the measure of behavior on the y-axis. They typically include axis labels, a title, phase change lines, and data paths. RBTs should be able to plot data points accurately and recognize basic trends such as increasing, decreasing, or stable patterns. These graphs are the primary visual tool for monitoring client progress in ABA.',
  },

  // ============================================================
  // B. Skill Acquisition
  // ============================================================

  // B-01: Identify the essential components of a written skill acquisition plan
  {
    id: 'fc014',
    category: 'B. Skill Acquisition',
    taskCode: 'B-01',
    term: 'Essential Components of a Skill Acquisition Plan',
    definition:
      'A written skill acquisition plan typically includes the target behavior defined in observable and measurable terms, the current baseline level of performance, the mastery criteria, the teaching procedure to be used, the materials needed, the type of prompts and prompt-fading strategy, the reinforcement strategy, and a plan for generalization and maintenance. The RBT must understand each component to implement the plan with fidelity.',
  },

  // B-02: Prepare for the session as required by the skill acquisition plan
  {
    id: 'fc015',
    category: 'B. Skill Acquisition',
    taskCode: 'B-02',
    term: 'Session Preparation for Skill Acquisition',
    definition:
      'Before beginning a teaching session, the RBT must review the skill acquisition plan and gather all required materials, stimuli, data sheets, and reinforcers. The environment should be arranged as specified in the plan to minimize distractions and maximize learning opportunities. Proper preparation ensures that teaching trials can proceed smoothly and that valuable session time is not lost.',
  },

  // B-03: Use contingencies of reinforcement
  {
    id: 'fc016',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Contingencies of Reinforcement',
    definition:
      'A contingency of reinforcement describes the relationship between an antecedent, a behavior, and a consequence (the three-term contingency). The consequence is delivered contingent upon the behavior occurring in the presence of the antecedent. Positive reinforcement involves adding a stimulus to increase future behavior, while negative reinforcement involves removing an aversive stimulus to increase future behavior. The RBT must deliver reinforcement consistently as specified in the program to strengthen desired behaviors.',
  },

  // B-04: Implement discrete trial teaching (DTT)
  {
    id: 'fc017',
    category: 'B. Skill Acquisition',
    taskCode: 'B-04',
    term: 'Discrete Trial Teaching (DTT)',
    definition:
      'Discrete trial teaching is a structured, instructor-led teaching procedure in which each trial consists of an antecedent (discriminative stimulus or instruction), a prompt if needed, the learner\'s response, a consequence (reinforcement for correct responses or a correction procedure for errors), and a brief inter-trial interval. DTT allows for many learning opportunities in a short period and is especially effective for teaching new skills in a controlled setting. Data are collected on each trial to track progress toward mastery.',
  },

  // B-05: Implement naturalistic teaching procedures
  {
    id: 'fc018',
    category: 'B. Skill Acquisition',
    taskCode: 'B-05',
    term: 'Naturalistic Teaching (Incidental Teaching)',
    definition:
      'Naturalistic teaching, including incidental teaching, uses naturally occurring opportunities in the learner\'s environment to teach skills. The RBT follows the learner\'s motivation and interests to create teaching moments rather than using a highly structured format. For example, if a child reaches for a toy, the RBT may prompt the child to request it verbally before giving access. This approach promotes generalization because skills are taught in the contexts where they will naturally be used.',
  },

  // B-06: Implement task analysis procedures
  {
    id: 'fc019',
    category: 'B. Skill Acquisition',
    taskCode: 'B-06',
    term: 'Task Analysis',
    definition:
      'A task analysis breaks a complex skill into smaller, sequentially ordered steps that can be taught individually. Each step is clearly defined so the learner can master them one at a time. Task analyses can be taught using forward chaining (starting from the first step), backward chaining (starting from the last step), or total task presentation (practicing all steps each session). This procedure is commonly used for daily living skills such as handwashing, dressing, and tooth brushing.',
  },

  // B-07: Implement discrimination training
  {
    id: 'fc020',
    category: 'B. Skill Acquisition',
    taskCode: 'B-07',
    term: 'Discrimination Training',
    definition:
      'Discrimination training teaches a learner to respond differently in the presence of different stimuli. The learner is reinforced for responding correctly to the discriminative stimulus (S-D) and not reinforced for responding to the stimulus delta (S-delta). For example, a learner is reinforced for pointing to the color red when asked "Which one is red?" but not for pointing to blue. This procedure is fundamental to teaching labeling, sorting, and many academic and adaptive skills.',
  },

  // B-08: Implement stimulus control transfer procedures
  {
    id: 'fc021',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    term: 'Stimulus Control Transfer Procedures',
    definition:
      'Stimulus control transfer procedures shift control of a behavior from prompts or other supplementary stimuli to the naturally occurring discriminative stimuli. The goal is for the learner to eventually respond correctly without any additional help. Common methods include prompt fading (gradually reducing the intensity or type of prompt) and stimulus fading (gradually changing the physical characteristics of stimuli). These procedures are essential for promoting independence.',
  },
  {
    id: 'fc022',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    term: 'Prompt Fading',
    definition:
      'Prompt fading involves systematically reducing the level of assistance provided to a learner over successive trials until the learner responds independently. This can be done through most-to-least prompting (starting with full physical prompts and fading to less intrusive prompts) or least-to-most prompting (starting with minimal assistance and increasing only as needed). The goal is to avoid prompt dependency while still supporting the learner in acquiring the skill.',
  },
  {
    id: 'fc023',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    term: 'Stimulus Fading',
    definition:
      'Stimulus fading involves gradually changing a physical dimension of a stimulus (such as size, color, or position) to transfer stimulus control to the target discriminative stimulus. For example, when teaching a learner to identify the letter "A," the correct choice might initially be larger or bolder, then gradually made the same size as the other options. This helps the learner attend to the relevant features of the stimulus rather than relying on exaggerated cues.',
  },

  // B-09: Implement stimulus equivalence procedures
  {
    id: 'fc024',
    category: 'B. Skill Acquisition',
    taskCode: 'B-09',
    term: 'Stimulus Equivalence',
    definition:
      'Stimulus equivalence occurs when a learner demonstrates untrained relations between stimuli after being taught specific relations. It involves three properties: reflexivity (matching a stimulus to itself), symmetry (if A relates to B, then B relates to A without direct training), and transitivity (if A relates to B and B relates to C, then A relates to C without direct training). For example, after being taught that the spoken word "dog" goes with a picture of a dog, and the picture goes with the written word "DOG," the learner can match the spoken word to the written word without direct instruction.',
  },

  // B-10: Implement generalization and maintenance procedures
  {
    id: 'fc025',
    category: 'B. Skill Acquisition',
    taskCode: 'B-10',
    term: 'Generalization',
    definition:
      'Generalization occurs when a learned behavior is demonstrated across different settings, people, materials, or stimuli beyond the original training conditions. Strategies to promote generalization include training with multiple exemplars, teaching in varied environments, using common stimuli found in the natural environment, and reinforcing the behavior when it occurs in novel contexts. Without explicit programming for generalization, skills may remain limited to the training setting.',
  },
  {
    id: 'fc026',
    category: 'B. Skill Acquisition',
    taskCode: 'B-10',
    term: 'Maintenance',
    definition:
      'Maintenance refers to the continued performance of a learned behavior over time after training has been reduced or discontinued. Strategies to promote maintenance include thinning reinforcement schedules, transitioning from contrived to natural reinforcers, and conducting periodic probe sessions to check that the skill persists. If maintenance checks reveal a decline in performance, booster training sessions may be implemented.',
  },

  // B-11: Implement shaping procedures
  {
    id: 'fc027',
    category: 'B. Skill Acquisition',
    taskCode: 'B-11',
    term: 'Shaping',
    definition:
      'Shaping involves reinforcing successive approximations toward a target behavior that the learner does not yet perform. Each step brings the behavior closer to the final desired form, and reinforcement criteria are gradually raised as the learner progresses. For example, to teach a child to say "water," the RBT might first reinforce "wa," then "wah-ter," then "water." Shaping is used when the target behavior is not yet in the learner\'s repertoire and cannot be prompted directly.',
  },

  // B-12: Implement token economy procedures
  {
    id: 'fc028',
    category: 'B. Skill Acquisition',
    taskCode: 'B-12',
    term: 'Token Economy',
    definition:
      'A token economy is a reinforcement system in which tokens (such as stickers, points, or chips) are earned for demonstrating target behaviors and later exchanged for backup reinforcers (preferred items or activities). The system should clearly define which behaviors earn tokens, how many tokens are needed to exchange, and what backup reinforcers are available. Token economies help bridge the delay between a behavior and the delivery of a preferred reinforcer and can be used to manage behavior across extended periods.',
  },

  // B-13: Implement differential reinforcement procedures
  {
    id: 'fc029',
    category: 'B. Skill Acquisition',
    taskCode: 'B-13',
    term: 'Differential Reinforcement (Overview)',
    definition:
      'Differential reinforcement involves providing reinforcement for one class of behavior while withholding reinforcement for another class of behavior. It is used both to teach new skills and to reduce problem behaviors by strengthening appropriate alternatives. Common types include DRA (Differential Reinforcement of Alternative behavior), DRO (Differential Reinforcement of Other behavior), DRI (Differential Reinforcement of Incompatible behavior), and DRL (Differential Reinforcement of Low rates of behavior).',
  },
  {
    id: 'fc030',
    category: 'B. Skill Acquisition',
    taskCode: 'B-13',
    term: 'DRA (Differential Reinforcement of Alternative Behavior)',
    definition:
      'DRA involves reinforcing a specific, appropriate alternative behavior while placing the problem behavior on extinction. The alternative behavior should serve the same function as the problem behavior so it can effectively replace it. For example, if a child screams to get attention, the RBT reinforces the child for raising their hand instead while no longer providing attention for screaming.',
  },
  {
    id: 'fc031',
    category: 'B. Skill Acquisition',
    taskCode: 'B-13',
    term: 'DRO (Differential Reinforcement of Other Behavior)',
    definition:
      'DRO involves delivering reinforcement when the target problem behavior has not occurred for a specified period of time. It does not require a specific alternative behavior; the learner is reinforced for the absence of the problem behavior. For example, a learner receives a token for every 5-minute interval in which no hitting occurs. The interval is reset if the behavior occurs.',
  },
  {
    id: 'fc032',
    category: 'B. Skill Acquisition',
    taskCode: 'B-13',
    term: 'DRI (Differential Reinforcement of Incompatible Behavior)',
    definition:
      'DRI involves reinforcing a behavior that is physically incompatible with the problem behavior, meaning the two behaviors cannot occur at the same time. For example, if the problem behavior is being out of seat, the RBT reinforces the learner for sitting in their seat, since a person cannot be both seated and out of their seat simultaneously. DRI is a specific form of DRA where the alternative behavior is topographically incompatible with the target behavior.',
  },
  {
    id: 'fc033',
    category: 'B. Skill Acquisition',
    taskCode: 'B-13',
    term: 'DRL (Differential Reinforcement of Low Rates of Behavior)',
    definition:
      'DRL involves providing reinforcement when the target behavior occurs at or below a predetermined criterion level during a specified time period. It is used when the goal is to reduce, but not eliminate, the frequency of a behavior. For example, if a student raises their hand 20 times per class, the RBT might reinforce the student for raising their hand 10 or fewer times. The criterion can be gradually lowered over time.',
  },

  // B-14: Implement group contingency procedures
  {
    id: 'fc034',
    category: 'B. Skill Acquisition',
    taskCode: 'B-14',
    term: 'Group Contingency Procedures',
    definition:
      'Group contingencies involve delivering a consequence to an entire group based on the behavior of one individual (dependent), a select group of individuals (interdependent), or all individuals (independent). In an independent group contingency, each individual earns the reward based on their own behavior. In a dependent group contingency, the whole group earns a reward based on one member\'s performance. In an interdependent group contingency, the whole group must meet a criterion for everyone to earn the reward.',
  },

  // B-15: Implement stimulus preference assessment procedures
  {
    id: 'fc035',
    category: 'B. Skill Acquisition',
    taskCode: 'B-15',
    term: 'Stimulus Preference Assessments',
    definition:
      'Stimulus preference assessments are systematic procedures used to identify items, activities, or stimuli that a learner prefers, which can then be used as potential reinforcers. Common methods include free operant observation (observing what the client naturally approaches), single stimulus presentation (offering items one at a time), paired stimulus (forced-choice between two items), and multiple stimulus with or without replacement (MSWO/MSW). Results help RBTs select effective reinforcers for skill acquisition and behavior reduction programs.',
  },

  // B-16: Implement mand training
  {
    id: 'fc036',
    category: 'B. Skill Acquisition',
    taskCode: 'B-16',
    term: 'Mand Training',
    definition:
      'A mand is a verbal operant in which a person requests or asks for something they want or need, and it is controlled by a motivating operation (the person\'s current state of deprivation or desire). Mand training involves creating or capturing motivation for an item or activity and then prompting the learner to request it appropriately. For example, if a child wants a cookie, the RBT prompts the child to say "cookie" or use another communication modality before providing it. Mand training is often a high priority because it directly benefits the learner by giving them functional communication skills.',
  },

  // B-17: Implement tact training
  {
    id: 'fc037',
    category: 'B. Skill Acquisition',
    taskCode: 'B-17',
    term: 'Tact Training',
    definition:
      'A tact is a verbal operant in which a person labels or names something in their environment that they can see, hear, smell, taste, or touch. It is controlled by a nonverbal stimulus (the item or event being labeled) and maintained by generalized conditioned reinforcement such as praise. In tact training, the RBT presents a stimulus (e.g., shows a picture of a cat) and prompts the learner to label it. Tact training builds the learner\'s ability to communicate about the world around them.',
  },

  // B-18: Implement intraverbal training
  {
    id: 'fc038',
    category: 'B. Skill Acquisition',
    taskCode: 'B-18',
    term: 'Intraverbal Training',
    definition:
      'An intraverbal is a verbal operant in which a person responds to another person\'s verbal behavior without a point-to-point correspondence to the verbal stimulus. This includes answering questions, filling in the blank, and having conversations. For example, when asked "What do you drink?", responding "juice" is an intraverbal. Intraverbal training builds conversational skills and requires the learner to retrieve information without the presence of the nonverbal stimulus, making it one of the more advanced verbal operants to teach.',
  },

  // B-19: Implement listener responding training
  {
    id: 'fc039',
    category: 'B. Skill Acquisition',
    taskCode: 'B-19',
    term: 'Listener Responding Training',
    definition:
      'Listener responding involves following instructions or responding to the verbal behavior of others without producing a vocal or verbal response. Examples include following directions like "touch your nose," "give me the ball," or "sit down." The response is mediated by someone else\'s verbal behavior. Training typically involves presenting a verbal instruction and prompting the correct motor response, then fading prompts as the learner demonstrates understanding. Listener responding is a critical foundational skill for academic and daily living tasks.',
  },

  // B-20: Implement echoic training
  {
    id: 'fc040',
    category: 'B. Skill Acquisition',
    taskCode: 'B-20',
    term: 'Echoic Training',
    definition:
      'An echoic is a verbal operant in which a person repeats exactly what they hear another person say. It has a point-to-point correspondence with the verbal stimulus, meaning the response matches the spoken model. Echoic training involves the RBT providing a vocal model (e.g., saying "ball") and reinforcing the learner for accurately repeating the word. Echoic behavior is a foundational skill for developing other verbal operants such as mands and tacts.',
  },

  // B-21: Implement matching-to-sample procedures
  {
    id: 'fc041',
    category: 'B. Skill Acquisition',
    taskCode: 'B-21',
    term: 'Matching-to-Sample (MTS)',
    definition:
      'Matching-to-sample is a procedure in which the learner is presented with a sample stimulus and an array of comparison stimuli, and must select the comparison that matches the sample. For example, the RBT shows a picture of a dog (sample) and presents three pictures (dog, cat, bird) for the learner to choose from. MTS can involve identity matching (matching identical items), arbitrary matching (matching related but non-identical items), or matching across modalities. This procedure is used to build discrimination, categorization, and equivalence skills.',
  },

  // ============================================================
  // C. Behavior Reduction
  // ============================================================

  // C-01: Identify the essential components of a written behavior reduction plan
  {
    id: 'fc042',
    category: 'C. Behavior Reduction',
    taskCode: 'C-01',
    term: 'Essential Components of a Behavior Reduction Plan',
    definition:
      'A written behavior reduction plan typically includes an operational definition of the target behavior, baseline data, the hypothesized function of the behavior, prevention strategies (antecedent modifications), the replacement behavior to be taught, the consequence procedures for both the problem and replacement behaviors, crisis or safety procedures if applicable, and criteria for plan modification. The RBT must understand each component to implement the plan consistently and with fidelity.',
  },

  // C-02: Describe common functions of behavior
  {
    id: 'fc043',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    term: 'Functions of Behavior (Overview)',
    definition:
      'In applied behavior analysis, all behavior is believed to serve a function or purpose for the individual. There are four commonly identified functions: social positive reinforcement (attention), social negative reinforcement (escape/avoidance), access to tangible items or activities, and automatic reinforcement (sensory). Identifying the function of a behavior through functional behavior assessment is essential for designing effective interventions, because the intervention must address why the behavior is occurring.',
  },
  {
    id: 'fc044',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    term: 'Attention Function',
    definition:
      'When a behavior is maintained by attention, it occurs because it results in social responses from others such as eye contact, verbal reprimands, comfort, laughter, or any form of interaction. For example, a child may engage in disruptive behavior because a parent or teacher responds by talking to them or looking at them. Interventions for attention-maintained behaviors often involve providing attention for appropriate behavior and withholding attention for problem behavior.',
  },
  {
    id: 'fc045',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    term: 'Escape/Avoidance Function',
    definition:
      'When a behavior is maintained by escape, it occurs because it allows the individual to avoid or terminate an unpleasant or non-preferred activity, demand, person, or environment. For example, a student may have a tantrum during math class because the tantrum results in being removed from the task. Interventions for escape-maintained behaviors often involve modifying the difficulty of demands, teaching appropriate requesting, and ensuring that problem behavior does not result in escape.',
  },
  {
    id: 'fc046',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    term: 'Access to Tangibles Function',
    definition:
      'When a behavior is maintained by access to tangibles, it occurs because it results in the individual obtaining a preferred item or activity. For example, a child may scream in a store because screaming has previously resulted in receiving candy or a toy. Interventions typically involve teaching the individual to appropriately request desired items and not providing the tangible contingent on problem behavior.',
  },
  {
    id: 'fc047',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    term: 'Automatic Reinforcement Function',
    definition:
      'When a behavior is maintained by automatic reinforcement, it occurs because the behavior itself produces a reinforcing sensory consequence, independent of the social environment. The reinforcement is not mediated by another person. Examples include hand flapping that provides proprioceptive input or humming that produces auditory stimulation. These behaviors can be challenging to address because the reinforcement is built into the response itself and cannot be easily withheld by others.',
  },

  // C-03: Implement interventions based on modification of antecedents
  {
    id: 'fc048',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    term: 'Antecedent Modifications',
    definition:
      'Antecedent modifications are proactive strategies that alter the environment or conditions before a problem behavior occurs to prevent it from happening. Examples include providing choices, modifying task difficulty, using visual schedules, offering preferred items noncontingently (NCR), priming or pre-session instructions, and enriching the environment. These are also called antecedent interventions or prevention strategies and are typically the first line of intervention because they reduce the need for reactive consequence-based procedures.',
  },

  // C-04: Implement differential reinforcement procedures to reduce behavior
  {
    id: 'fc049',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    term: 'Differential Reinforcement to Reduce Behavior',
    definition:
      'Differential reinforcement can be used as a behavior reduction strategy by reinforcing appropriate or desired behaviors while withholding reinforcement for the problem behavior. This includes DRA (reinforcing a specific alternative), DRI (reinforcing an incompatible behavior), DRO (reinforcing the absence of the problem behavior), and DRL (reinforcing lower rates of the behavior). These procedures are considered less restrictive than punishment-based approaches and are preferred in behavior reduction plans because they strengthen positive behaviors while weakening problem behaviors.',
  },

  // ============================================================
  // D. Documentation & Reporting
  // ============================================================

  // D-01: Report other variables that might affect the client
  {
    id: 'fc050',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-01',
    term: 'Reporting Variables That Affect the Client',
    definition:
      'The RBT should report any changes or events that might influence the client\'s behavior or progress, even if they are not directly related to the treatment plan. This includes changes in medication, sleep patterns, illness, family events, staffing changes, or environmental disruptions. Communicating these variables to the supervisor helps the behavior analyst interpret data accurately and make appropriate adjustments to the intervention.',
  },

  // D-02: Generate objective session notes
  {
    id: 'fc051',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-02',
    term: 'Objective Session Notes',
    definition:
      'Session notes should be written using objective, measurable, and observable language that avoids subjective interpretations or emotional language. An objective session note describes what happened during the session, what programs were run, how the client responded, any notable behaviors, and relevant data. For example, writing "Client engaged in 3 instances of hitting during math task" is objective, while "Client was very upset and aggressive" is subjective. Accurate session notes are essential for legal documentation and clinical decision-making.',
  },

  // D-03: Effectively communicate with supervisor
  {
    id: 'fc052',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-03',
    term: 'Effective Communication with Supervisor (Documentation Context)',
    definition:
      'RBTs must communicate clearly and promptly with their supervisor about client progress, concerns, data trends, and any unusual events that occur during sessions. This includes asking clarifying questions when procedures are unclear, reporting when a program does not seem to be working, and sharing observations about the client\'s motivation or environmental changes. Effective communication ensures that the supervisor has the information needed to make sound clinical decisions.',
  },

  // D-04: Comply with applicable legal, regulatory, and workplace requirements
  {
    id: 'fc053',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-04',
    term: 'Compliance with Legal, Regulatory, and Workplace Requirements',
    definition:
      'RBTs must follow all applicable laws, regulations, and workplace policies relevant to their practice. This includes HIPAA regulations for protecting client health information, mandatory reporting requirements for suspected abuse or neglect, insurance documentation requirements, and organizational policies. Understanding and adhering to these requirements protects both the client and the practitioner.',
  },

  // D-05: Comply with requirements for data collection, storage, and transportation
  {
    id: 'fc054',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-05',
    term: 'Data Collection, Storage, and Transportation Requirements',
    definition:
      'RBTs must handle client data according to their organization\'s policies and relevant regulations. This includes properly securing data sheets and electronic records, not leaving client information in unsecured locations, using approved methods for transporting data between settings, and following procedures for data backup and disposal. Breaches of data security can compromise client confidentiality and violate legal requirements.',
  },

  // ============================================================
  // E. Professional Conduct & Scope of Practice
  // ============================================================

  // E-01: Effectively communicate with supervisor
  {
    id: 'fc055',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-01',
    term: 'Effective Communication with Supervisor (Professional Conduct)',
    definition:
      'RBTs must maintain open, honest, and professional communication with their supervisors at all times. This includes reporting session outcomes, sharing concerns, asking questions when uncertain, and accepting feedback gracefully. Timely communication about schedule changes, client emergencies, or procedural questions supports high-quality service delivery and helps maintain the supervisory relationship.',
  },

  // E-02: Actively seek clinical direction from supervisor
  {
    id: 'fc056',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-02',
    term: 'Seeking Clinical Direction from Supervisor',
    definition:
      'RBTs should proactively seek guidance from their supervisor rather than waiting to be told what to do or attempting to modify programs independently. This includes requesting clarification when protocols are unclear, asking for help when a client\'s behavior changes unexpectedly, and seeking direction before implementing any changes to a treatment plan. RBTs do not design or modify treatment plans independently; they implement plans under the direction of their supervising BCBA.',
  },

  // E-03: Report concerns about the right to effective treatment
  {
    id: 'fc057',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-03',
    term: 'Right to Effective Treatment',
    definition:
      'Every client has the right to receive effective, evidence-based treatment in the least restrictive environment. If an RBT has concerns that a client is not making progress, that procedures may be harmful, or that treatment is not being delivered appropriately, they are ethically obligated to report these concerns to their supervisor. If concerns are not addressed, the RBT should follow organizational procedures for escalating the issue to protect the client\'s welfare.',
  },

  // E-04: Maintain client dignity
  {
    id: 'fc058',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-04',
    term: 'Maintaining Client Dignity',
    definition:
      'RBTs must treat all clients with respect and dignity regardless of age, ability, background, or behavior. This includes using age-appropriate language and materials, respecting the client\'s preferences and privacy, avoiding public discussion of client information, and implementing interventions in a manner that preserves the client\'s self-respect. Maintaining dignity also means advocating for the client\'s autonomy and involving them in decision-making to the greatest extent possible.',
  },

  // E-05: Maintain professional boundaries with clients and their families
  {
    id: 'fc059',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-05',
    term: 'Professional Boundaries',
    definition:
      'RBTs must maintain clear professional boundaries with clients, their families, and caregivers. This includes avoiding dual relationships (such as becoming a personal friend, romantic partner, or business associate), not accepting gifts of significant value, maintaining appropriate communication channels, and keeping interactions focused on the client\'s treatment goals. Boundary violations can compromise the objectivity and effectiveness of treatment and may cause harm to the client.',
  },

  // E-06: Actively seek technical and professional development
  {
    id: 'fc060',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-06',
    term: 'Technical and Professional Development',
    definition:
      'RBTs have a responsibility to continually develop their professional skills and knowledge base. This includes completing required continuing education units (CEUs), attending trainings and workshops, reading relevant literature, participating in supervision sessions actively, and staying current with updates to the BACB\'s ethical guidelines and task list. Ongoing professional development ensures that the RBT provides competent, up-to-date services to clients.',
  },

  // E-07: Comply with applicable legal, regulatory, and workplace requirements for data
  {
    id: 'fc061',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-07',
    term: 'Legal and Regulatory Compliance for Data (Professional Conduct)',
    definition:
      'RBTs must adhere to all legal, regulatory, and organizational requirements related to the collection, storage, and transportation of client data. This includes following HIPAA guidelines, securing electronic and paper records, not sharing client information with unauthorized individuals, and properly disposing of documents containing protected information. Violations can result in disciplinary action, legal consequences, and harm to the client.',
  },

  // E-08: Identify and report situations involving the need for additional services
  {
    id: 'fc062',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-08',
    term: 'Reporting Need for Additional Services',
    definition:
      'If an RBT observes that a client may benefit from services outside the scope of ABA (such as speech therapy, occupational therapy, medical evaluation, or mental health counseling), they should communicate this to their supervisor. The RBT does not make referrals independently but plays an important role in identifying potential needs through their direct observation of the client. Timely reporting ensures the client receives comprehensive care.',
  },

  // E-09: Respond appropriately to feedback and maintain or improve performance
  {
    id: 'fc063',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-09',
    term: 'Responding to Feedback',
    definition:
      'RBTs should accept constructive feedback from supervisors professionally and use it to improve their practice. This means listening without becoming defensive, asking clarifying questions, implementing suggested changes, and following up to demonstrate improvement. Incorporating feedback is essential for maintaining treatment fidelity and providing the best possible services to clients. An RBT who resists or ignores feedback may compromise client outcomes.',
  },

  // E-10: Identify potential sources of harm to clients and communicate to supervisor
  {
    id: 'fc064',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-10',
    term: 'Identifying and Reporting Potential Harm',
    definition:
      'RBTs have an ethical and often legal obligation to identify and report any situation that may pose a risk of harm to a client. This includes signs of abuse, neglect, or exploitation; unsafe environmental conditions; potential side effects of interventions; and any actions by others that could jeopardize the client\'s well-being. The RBT should report these concerns immediately to their supervisor and follow mandatory reporting laws when applicable. Failure to report can result in continued harm to the client and professional consequences for the RBT.',
  },

  // ============================================================
  // Additional Flashcards (fc065–fc154)
  // ============================================================

  // A-02: Rate
  {
    id: 'fc065',
    category: 'A. Measurement',
    taskCode: 'A-02',
    term: 'Rate',
    definition:
      'Rate is a measurement calculated by dividing the count (frequency) of a behavior by the unit of time during which it was observed. This metric allows practitioners to compare behavior across sessions of different lengths, making it more useful than simple frequency counts when observation periods vary. For example, if a client engages in a behavior 10 times in a 20-minute session, the rate is 0.5 responses per minute.',
  },

  // A-02: Latency Recording
  {
    id: 'fc066',
    category: 'A. Measurement',
    taskCode: 'A-02',
    term: 'Latency Recording',
    definition:
      'Latency recording measures the elapsed time from the onset of a stimulus (such as an instruction) to the initiation of the target response. This measurement is particularly useful when the concern is how long it takes a learner to begin responding rather than the duration or frequency of the behavior. For example, measuring the time between a teacher\'s instruction to sit down and the moment the student begins to sit provides latency data.',
  },

  // A-01: ABC Data Collection
  {
    id: 'fc067',
    category: 'A. Measurement',
    taskCode: 'A-01',
    term: 'ABC Data Collection',
    definition:
      'ABC data collection is a descriptive assessment method in which the observer records the Antecedent (what happened immediately before the behavior), the Behavior (the target behavior itself), and the Consequence (what happened immediately after the behavior) for each occurrence. This method helps identify patterns and potential functions of behavior by revealing relationships between environmental events and the target behavior. ABC data is a key component of functional behavior assessment.',
  },

  // A-01: Scatterplot Assessment
  {
    id: 'fc068',
    category: 'A. Measurement',
    taskCode: 'A-01',
    term: 'Scatterplot Assessment',
    definition:
      'A scatterplot is a data collection tool that uses a grid format to record when a target behavior occurs across different time intervals throughout the day. By marking cells to indicate whether behavior occurred during each time block, practitioners can visually identify temporal patterns, such as times of day when behavior is most or least likely to occur. This information can guide hypotheses about environmental variables that may be influencing the behavior.',
  },

  // A-05: Interobserver Agreement (IOA)
  {
    id: 'fc069',
    category: 'A. Measurement',
    taskCode: 'A-05',
    term: 'Interobserver Agreement (IOA)',
    definition:
      'Interobserver agreement (IOA) is a measure of the degree to which two or more independent observers record the same data when simultaneously observing the same behavior. It is calculated by dividing the number of agreements by the sum of agreements and disagreements, then multiplying by 100 to obtain a percentage. IOA of 80% or higher is generally considered acceptable and demonstrates that the behavior has been clearly defined and that the measurement system is reliable.',
  },

  // A-06: Operational Definition
  {
    id: 'fc070',
    category: 'A. Measurement',
    taskCode: 'A-06',
    term: 'Operational Definition',
    definition:
      'An operational definition is a clear, objective, and complete description of a target behavior that enables any observer to accurately identify when the behavior is and is not occurring. It should include specific, observable, and measurable terms while avoiding vague language or subjective interpretations. A well-written operational definition includes examples and non-examples and passes the "stranger test"—a person unfamiliar with the client could reliably identify the behavior based on the definition alone.',
  },

  // A-07: Baseline
  {
    id: 'fc071',
    category: 'A. Measurement',
    taskCode: 'A-07',
    term: 'Baseline',
    definition:
      'Baseline refers to the data collected on a target behavior before any intervention is implemented, establishing the current level of performance under existing conditions. Baseline data serves as a point of comparison against which the effects of an intervention can be evaluated. A stable baseline with minimal variability and no trend in the direction of the intervention provides the strongest basis for demonstrating that changes in behavior are due to the intervention rather than other factors.',
  },

  // A-07: Trend
  {
    id: 'fc072',
    category: 'A. Measurement',
    taskCode: 'A-07',
    term: 'Trend',
    definition:
      'Trend refers to the general direction of a data path over time, which can be increasing (accelerating), decreasing (decelerating), or flat (zero trend). Analyzing trend is essential for making data-based decisions about whether an intervention is working, needs modification, or should be changed entirely. For example, an increasing trend in a skill acquisition program typically indicates progress, while a decreasing trend in a behavior reduction program suggests the intervention is effective.',
  },

  // A-07: Variability in Data
  {
    id: 'fc073',
    category: 'A. Measurement',
    taskCode: 'A-07',
    term: 'Variability in Data',
    definition:
      'Variability refers to the degree to which individual data points deviate from the overall trend or level of a data series. High variability means data points are widely scattered, making it difficult to determine a clear pattern or draw confident conclusions about intervention effects. Low variability indicates more consistent responding and allows for more confident decision-making. When variability is high, practitioners should investigate potential sources of inconsistency before making changes to the intervention.',
  },

  // B-03: Positive Reinforcement
  {
    id: 'fc074',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Positive Reinforcement',
    definition:
      'Positive reinforcement occurs when a stimulus is added to the environment immediately following a behavior, and that behavior increases in frequency, duration, or intensity in the future. The key defining feature is that something is presented (added) after the response and the behavior strengthens over time. Common examples include delivering praise, tokens, or preferred items contingent on a target behavior. Whether a stimulus functions as a positive reinforcer can only be confirmed by observing its effect on future behavior.',
  },

  // B-03: Negative Reinforcement
  {
    id: 'fc075',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Negative Reinforcement',
    definition:
      'Negative reinforcement occurs when an aversive or unpleasant stimulus is removed or reduced immediately following a behavior, and that behavior increases in future frequency. It is important to understand that negative reinforcement is NOT punishment—the word "negative" refers to the removal of a stimulus, not to something bad happening. An example is a child cleaning their room (behavior increases) because it results in a parent stopping nagging (aversive stimulus removed). Both positive and negative reinforcement increase behavior.',
  },

  // B-03: Positive Punishment
  {
    id: 'fc076',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Positive Punishment',
    definition:
      'Positive punishment occurs when a stimulus is added to the environment immediately following a behavior, and that behavior decreases in frequency, duration, or intensity in the future. The word "positive" refers to the addition of a stimulus, while "punishment" indicates the behavior decreases. An example is a verbal reprimand delivered after an inappropriate behavior that results in the behavior occurring less often. Punishment procedures should only be used when reinforcement-based strategies have been considered first and under close supervisory guidance.',
  },

  // B-03: Negative Punishment
  {
    id: 'fc077',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Negative Punishment',
    definition:
      'Negative punishment occurs when a preferred stimulus is removed immediately following a behavior, resulting in a decrease in that behavior over time. Common examples include response cost (removing tokens contingent on problem behavior) and time-out from positive reinforcement (temporarily removing access to reinforcing activities or environments). The word "negative" refers to the removal of the stimulus, not to the quality of the procedure. Negative punishment is generally considered less restrictive than positive punishment.',
  },

  // B-03: Fixed Ratio (FR) Schedule
  {
    id: 'fc078',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Fixed Ratio (FR) Schedule',
    definition:
      'A fixed ratio schedule delivers reinforcement after a set, predictable number of responses has been completed. For example, on an FR-5 schedule, reinforcement is delivered after every 5th response. This schedule typically produces a high rate of responding with a characteristic post-reinforcement pause—a brief period of no responding immediately after reinforcement is delivered before the individual resumes responding at a high rate. FR-1 is equivalent to continuous reinforcement (CRF).',
  },

  // B-03: Variable Ratio (VR) Schedule
  {
    id: 'fc079',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Variable Ratio (VR) Schedule',
    definition:
      'A variable ratio schedule delivers reinforcement after an unpredictable number of responses, with the number varying around a specified average. For example, a VR-5 schedule delivers reinforcement on average every 5 responses, but any individual instance might require 2, 7, 3, or 8 responses. This schedule produces the highest and steadiest rate of responding of all four basic schedules and is the most resistant to extinction. Slot machines operate on a variable ratio schedule.',
  },

  // B-03: Fixed Interval (FI) Schedule
  {
    id: 'fc080',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Fixed Interval (FI) Schedule',
    definition:
      'A fixed interval schedule delivers reinforcement for the first response that occurs after a fixed, predictable amount of time has elapsed since the last reinforcement. For example, on an FI-2 minute schedule, the first response after 2 minutes have passed is reinforced. This schedule produces a characteristic "scalloped" pattern of responding—low rates of responding immediately after reinforcement followed by an accelerating rate as the end of the interval approaches.',
  },

  // B-03: Variable Interval (VI) Schedule
  {
    id: 'fc081',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Variable Interval (VI) Schedule',
    definition:
      'A variable interval schedule delivers reinforcement for the first response after a variable, unpredictable amount of time has elapsed, with the time varying around a specified average. For example, a VI-3 minute schedule provides reinforcement for the first response after an average of 3 minutes, but any given interval might be 1, 5, 2, or 4 minutes. This schedule produces a moderate, steady rate of responding and is moderately resistant to extinction.',
  },

  // B-03: Continuous Reinforcement (CRF)
  {
    id: 'fc082',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Continuous Reinforcement (CRF)',
    definition:
      'Continuous reinforcement (CRF) is a schedule in which every single instance of the target behavior is reinforced. This schedule is most effective during the acquisition phase when a new behavior is being taught, as it provides the clearest and most immediate connection between the behavior and its consequence. However, CRF is the least resistant to extinction—if reinforcement is suddenly discontinued, the behavior will decrease rapidly. Once a behavior is established, the schedule should be thinned to intermittent reinforcement for maintenance.',
  },

  // B-03: Intermittent Reinforcement
  {
    id: 'fc083',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Intermittent Reinforcement',
    definition:
      'Intermittent reinforcement refers to any schedule in which some, but not all, instances of a target behavior are reinforced. This includes fixed ratio, variable ratio, fixed interval, and variable interval schedules. Intermittent reinforcement is best used for maintaining behaviors that have already been acquired, as it produces behavior that is more resistant to extinction compared to continuous reinforcement. Transitioning from continuous to intermittent reinforcement is a critical step in promoting durable behavior change.',
  },

  // B-03: Extinction
  {
    id: 'fc084',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Extinction',
    definition:
      'Extinction is a procedure in which reinforcement that was previously maintaining a behavior is withheld, resulting in a gradual decrease in the frequency, duration, or intensity of that behavior over time. The specific form of extinction depends on the function of the behavior: for attention-maintained behavior, attention is withheld; for escape-maintained behavior, escape is no longer permitted; for tangible-maintained behavior, the item is not delivered. Extinction should be used carefully and consistently, as inconsistent application can create intermittent reinforcement and make the behavior more resistant to change.',
  },

  // C-04: Extinction Burst
  {
    id: 'fc085',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    term: 'Extinction Burst',
    definition:
      'An extinction burst is a temporary increase in the frequency, duration, intensity, or variability of a behavior when reinforcement is first withheld during an extinction procedure. The individual may also exhibit novel behaviors or emotional responses (such as crying or aggression) that were not previously observed. This is a predictable and expected phenomenon that indicates the extinction procedure is being implemented correctly. It is critical that practitioners and caregivers are prepared for extinction bursts and continue to withhold reinforcement consistently through this phase.',
  },

  // C-04: Spontaneous Recovery
  {
    id: 'fc086',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    term: 'Spontaneous Recovery',
    definition:
      'Spontaneous recovery is the temporary reappearance of a previously extinguished behavior after a period of time has elapsed without the behavior occurring. This is a normal and expected phenomenon during the extinction process and does not mean that the extinction procedure has failed. When spontaneous recovery occurs, the behavior should continue to be placed on extinction (reinforcement withheld), and the recovered behavior typically decreases more quickly than during the initial extinction phase.',
  },

  // B-08: Prompt Hierarchy
  {
    id: 'fc087',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    term: 'Prompt Hierarchy',
    definition:
      'A prompt hierarchy is an ordered arrangement of prompts from most intrusive to least intrusive (or vice versa) used to help a learner perform a target behavior. A common hierarchy from most to least intrusive is: full physical, partial physical, model, gestural, verbal, and independent (no prompt). Most-to-least prompting starts with the most intrusive prompt and fades to less intrusive levels, while least-to-most prompting starts with the least intrusive and increases only as needed. The choice of hierarchy depends on the learner\'s needs and the skill being taught.',
  },

  // B-08: Response Prompts
  {
    id: 'fc088',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    term: 'Response Prompts',
    definition:
      'Response prompts are supplementary cues that operate directly on the learner\'s behavior to increase the likelihood of a correct response. The four main types are physical prompts (physically guiding the learner through the response), verbal prompts (providing spoken instructions or hints), model prompts (demonstrating the correct response for the learner to imitate), and gestural prompts (pointing, motioning, or using other gestures to indicate the correct response). Response prompts must be systematically faded to promote independent responding.',
  },

  // B-08: Stimulus Prompts
  {
    id: 'fc089',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    term: 'Stimulus Prompts',
    definition:
      'Stimulus prompts are modifications to the antecedent stimulus itself that increase the likelihood of a correct response. Common types include position prompts (placing the correct choice closest to the learner), movement prompts (moving or tapping the correct stimulus), and redundancy prompts (making the correct stimulus more salient by altering its size, color, or other features). Unlike response prompts, stimulus prompts alter the instructional materials rather than acting on the learner\'s response directly. They must also be systematically faded.',
  },

  // B-08: Time Delay
  {
    id: 'fc090',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    term: 'Time Delay',
    definition:
      'Time delay is a prompt fading strategy that involves inserting a delay between the presentation of the discriminative stimulus and the delivery of the prompt. In progressive time delay, the interval starts at 0 seconds (simultaneous prompt) and gradually increases over trials, giving the learner increasing opportunity to respond independently. In constant time delay, a fixed interval (e.g., 4 seconds) is used after initial 0-second delay trials. Time delay is effective because it transfers stimulus control from the prompt to the natural SD.',
  },

  // B-08: Prompt Dependency
  {
    id: 'fc091',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    term: 'Prompt Dependency',
    definition:
      'Prompt dependency occurs when a learner consistently waits for a prompt before initiating a response, even when they are capable of performing the behavior independently. This typically results from prompts being delivered too frequently, too quickly, or without a systematic fading plan. To prevent prompt dependency, practitioners should use the least intrusive prompt necessary, implement systematic prompt fading procedures, and build in time delay to give the learner an opportunity to respond independently before providing assistance.',
  },

  // B-06: Forward Chaining
  {
    id: 'fc092',
    category: 'B. Skill Acquisition',
    taskCode: 'B-06',
    term: 'Forward Chaining',
    definition:
      'Forward chaining is a method of teaching a behavior chain in which the first step is taught to mastery first, with the therapist or caregiver completing all remaining steps. Once the learner independently performs the first step, the second step is taught to mastery, and so on, progressing through the chain in sequential order. Reinforcement is delivered after the entire chain is completed. Forward chaining is beneficial when the learner can observe the completion of the chain and when initial steps are easier or more motivating.',
  },

  // B-06: Backward Chaining
  {
    id: 'fc093',
    category: 'B. Skill Acquisition',
    taskCode: 'B-06',
    term: 'Backward Chaining',
    definition:
      'Backward chaining is a method of teaching a behavior chain in which the therapist completes all steps except the last one, which the learner performs independently. Once the learner masters the final step, the therapist completes all steps except the last two, and so on, working backward through the chain. This approach allows the learner to contact reinforcement early in training because they complete the chain\'s final step, which is closest to the terminal reinforcer. Backward chaining is especially effective for learners who may become frustrated with longer tasks.',
  },

  // B-06: Total Task Chaining
  {
    id: 'fc094',
    category: 'B. Skill Acquisition',
    taskCode: 'B-06',
    term: 'Total Task Chaining',
    definition:
      'Total task chaining (also called total task presentation) is a method of teaching a behavior chain in which the learner attempts every step in the sequence during each training session, with prompts provided as needed at each step. As the learner demonstrates mastery of individual steps, prompts are faded for those steps while continuing to assist with steps not yet mastered. This method is most appropriate for learners who can already perform some of the steps independently and for chains that are not overly long or complex.',
  },

  // B-05: Behavior Momentum / High-P Request Sequence
  {
    id: 'fc095',
    category: 'B. Skill Acquisition',
    taskCode: 'B-05',
    term: 'Behavior Momentum / High-P Request Sequence',
    definition:
      'Behavior momentum, often implemented through a high-probability (high-p) request sequence, is an antecedent-based strategy in which a series of 3–5 easy or preferred demands that the learner is likely to comply with are presented in rapid succession immediately before presenting a more difficult or less preferred demand (low-p request). The momentum of compliance generated by the high-p requests increases the likelihood that the learner will comply with the subsequent low-p request. This strategy is grounded in the behavioral principle that reinforcement for recent responses creates momentum that carries over.',
  },

  // C-03: Motivating Operations (MO)
  {
    id: 'fc096',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    term: 'Motivating Operations (MO)',
    definition:
      'Motivating operations (MOs) are environmental variables that temporarily alter both the reinforcing or punishing effectiveness of a stimulus and the frequency of behaviors that have been associated with that stimulus in the past. MOs have two effects: a value-altering effect (changing how reinforcing or punishing a stimulus is) and a behavior-altering effect (evoking or abating behaviors related to that stimulus). The two main types are establishing operations (EOs) and abolishing operations (AOs). Understanding MOs is essential for predicting and influencing behavior.',
  },

  // C-03: Establishing Operation (EO)
  {
    id: 'fc097',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    term: 'Establishing Operation (EO)',
    definition:
      'An establishing operation (EO) is a type of motivating operation that increases the reinforcing effectiveness of a stimulus and evokes behaviors that have previously produced that stimulus. For example, food deprivation is an EO that increases the value of food as a reinforcer and evokes behaviors that have been reinforced with food in the past, such as requesting a snack. Practitioners can use EOs strategically to increase the effectiveness of reinforcers during teaching sessions.',
  },

  // C-03: Abolishing Operation (AO)
  {
    id: 'fc098',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    term: 'Abolishing Operation (AO)',
    definition:
      'An abolishing operation (AO) is a type of motivating operation that decreases the reinforcing effectiveness of a stimulus and abates behaviors that have previously produced that stimulus. For example, satiation (having just eaten a large meal) is an AO that decreases the value of food as a reinforcer and reduces the frequency of food-seeking behaviors. Practitioners should be aware of AOs because they can explain why a previously effective reinforcer is no longer motivating for a learner during a session.',
  },

  // B-07: Stimulus Control
  {
    id: 'fc099',
    category: 'B. Skill Acquisition',
    taskCode: 'B-07',
    term: 'Stimulus Control',
    definition:
      'Stimulus control exists when a behavior occurs reliably in the presence of a specific antecedent stimulus (discriminative stimulus or SD) and does not occur in the presence of other stimuli (S-delta). When a behavior is under stimulus control, the antecedent stimulus effectively "controls" when the behavior is emitted. Stimulus control is established through differential reinforcement—reinforcing the behavior in the presence of the SD and not reinforcing it in the presence of the S-delta. Effective instruction relies heavily on establishing stimulus control.',
  },

  // B-10: Stimulus Generalization
  {
    id: 'fc100',
    category: 'B. Skill Acquisition',
    taskCode: 'B-10',
    term: 'Stimulus Generalization',
    definition:
      'Stimulus generalization occurs when a behavior that has been reinforced in the presence of one stimulus also occurs in the presence of other similar stimuli, without additional training. The more similar the new stimulus is to the original training stimulus, the more likely generalization is to occur. For example, a child taught to label a red ball may also label a pink ball or a red block. Practitioners should program for stimulus generalization by training with multiple exemplars and in varied settings.',
  },

  // B-10: Response Generalization
  {
    id: 'fc101',
    category: 'B. Skill Acquisition',
    taskCode: 'B-10',
    term: 'Response Generalization',
    definition:
      'Response generalization occurs when training one response leads to the occurrence of other untrained responses that are functionally similar—meaning they produce the same outcome or effect on the environment. For example, teaching a child to say "hello" as a greeting may result in the child also waving or saying "hi" without direct training. Response generalization is an important goal in ABA because it demonstrates that the learner has acquired a broader functional repertoire beyond the specific responses that were directly taught.',
  },

  // B-07: Respondent (Classical) Conditioning
  {
    id: 'fc102',
    category: 'B. Skill Acquisition',
    taskCode: 'B-07',
    term: 'Respondent (Classical) Conditioning',
    definition:
      'Respondent (classical) conditioning is a learning process in which a neutral stimulus is repeatedly paired with an unconditioned stimulus (US) that naturally elicits a reflexive response, until the previously neutral stimulus alone comes to elicit a similar response. The neutral stimulus becomes a conditioned stimulus (CS) and the response it elicits becomes a conditioned response (CR). Pavlov\'s experiments with dogs demonstrated this process: a bell (neutral stimulus) paired with food (US) eventually elicited salivation (CR) when presented alone.',
  },

  // B-07: Unconditioned Stimulus and Response
  {
    id: 'fc103',
    category: 'B. Skill Acquisition',
    taskCode: 'B-07',
    term: 'Unconditioned Stimulus and Response',
    definition:
      'An unconditioned stimulus (US) is a stimulus that automatically elicits a reflexive response without any prior learning or conditioning. The response it elicits is called an unconditioned response (UR). These are innate, biologically determined stimulus-response relationships. For example, food placed in the mouth (US) automatically elicits salivation (UR), and a puff of air to the eye (US) automatically elicits an eye blink (UR). Understanding US-UR relationships is foundational to understanding respondent conditioning.',
  },

  // B-07: Conditioned Stimulus and Response
  {
    id: 'fc104',
    category: 'B. Skill Acquisition',
    taskCode: 'B-07',
    term: 'Conditioned Stimulus and Response',
    definition:
      'A conditioned stimulus (CS) is a previously neutral stimulus that, after being repeatedly paired with an unconditioned stimulus (US), comes to elicit a response on its own. The response elicited by the CS is called a conditioned response (CR). For example, if a bell (initially neutral) is repeatedly paired with food (US), the bell eventually becomes a CS that elicits salivation (CR) without the presence of food. Conditioned responses are learned and can be weakened through respondent extinction if the CS is presented repeatedly without the US.',
  },

  // E-03: Social Validity
  {
    id: 'fc105',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-03',
    term: 'Social Validity',
    definition:
      'Social validity refers to the extent to which the target behaviors selected for intervention, the procedures used to produce behavior change, and the outcomes achieved are considered acceptable, practical, and meaningful by the client, their family, and the broader community. Wolf (1978) identified three components: the social significance of the goals, the appropriateness of the procedures, and the social importance of the results. Ensuring social validity increases the likelihood that interventions will be supported, maintained, and valued by all stakeholders.',
  },

  // B-15: MSWO Preference Assessment
  {
    id: 'fc106',
    category: 'B. Skill Acquisition',
    taskCode: 'B-15',
    term: 'MSWO Preference Assessment',
    definition:
      'The multiple stimulus without replacement (MSWO) preference assessment involves presenting an array of items simultaneously, having the client select one, removing the selected item from the array, rearranging the remaining items, and repeating the process until all items have been selected or the client stops engaging. This method produces a preference hierarchy efficiently and is more time-efficient than paired stimulus assessments. The order in which items are selected indicates their relative preference ranking.',
  },

  // B-15: Paired Stimulus Preference Assessment
  {
    id: 'fc107',
    category: 'B. Skill Acquisition',
    taskCode: 'B-15',
    term: 'Paired Stimulus Preference Assessment',
    definition:
      'The paired stimulus (also called forced-choice) preference assessment presents two items at a time and records which item the client selects. Every possible pair of items is presented, and items are rotated to control for position bias. This method is the most systematic and precise approach to identifying preferences, as each item is compared directly to every other item. Although it takes more time to administer than other methods, it produces the most reliable preference hierarchy.',
  },

  // B-15: Free Operant Preference Assessment
  {
    id: 'fc108',
    category: 'B. Skill Acquisition',
    taskCode: 'B-15',
    term: 'Free Operant Preference Assessment',
    definition:
      'A free operant preference assessment involves providing the learner with unrestricted access to a variety of items or activities for a set period of time and recording the duration of engagement with each. Items with which the learner spends the most time interacting are identified as most preferred. This is the quickest preference assessment method to administer, making it useful for daily or session-by-session use, but it is generally considered less precise than systematic methods like paired stimulus or MSWO assessments.',
  },

  // B-15: Single Stimulus Preference Assessment
  {
    id: 'fc109',
    category: 'B. Skill Acquisition',
    taskCode: 'B-15',
    term: 'Single Stimulus Preference Assessment',
    definition:
      'A single stimulus (or successive choice) preference assessment presents one item at a time and records whether the learner approaches or avoids each item. This method is particularly useful for individuals with limited scanning, selection, or motor skills who may have difficulty choosing between multiple options presented simultaneously. While it is simple to administer, it may overestimate preference because learners may accept items they do not highly prefer when no alternatives are available.',
  },

  // B-03: Conditioned Reinforcer
  {
    id: 'fc110',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Conditioned Reinforcer',
    definition:
      'A conditioned reinforcer (also called a secondary reinforcer or learned reinforcer) is a stimulus that was not originally reinforcing but has acquired reinforcing properties through repeated pairing with one or more established reinforcers. Examples include praise, tokens, grades, and money. Conditioned reinforcers are essential in ABA programming because they can bridge the gap between the behavior and delivery of primary reinforcers, and they can be delivered more immediately and conveniently than many unconditioned reinforcers.',
  },

  // B-03: Unconditioned Reinforcer
  {
    id: 'fc111',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Unconditioned Reinforcer',
    definition:
      'An unconditioned reinforcer (also called a primary reinforcer or unlearned reinforcer) is a stimulus that is inherently reinforcing without any prior learning or conditioning, because it satisfies a basic biological need. Examples include food, water, warmth, and sleep. The effectiveness of unconditioned reinforcers is influenced by motivating operations such as deprivation and satiation. While powerful, unconditioned reinforcers may not always be practical or appropriate to use in every therapeutic context.',
  },

  // B-03: Generalized Conditioned Reinforcer
  {
    id: 'fc112',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Generalized Conditioned Reinforcer',
    definition:
      'A generalized conditioned reinforcer is a conditioned reinforcer that has been paired with many different backup reinforcers, making it effective across a wide range of conditions and relatively resistant to satiation. Common examples include money, tokens in a token economy, and social praise. Because generalized conditioned reinforcers have been associated with multiple reinforcers, their effectiveness does not depend on any single motivating operation. Token economies leverage generalized conditioned reinforcers to maintain motivation throughout sessions.',
  },

  // B-03: Three-Term Contingency
  {
    id: 'fc113',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Three-Term Contingency',
    definition:
      'The three-term contingency is the fundamental unit of analysis in applied behavior analysis, consisting of an antecedent (A), a behavior (B), and a consequence (C). The antecedent is the stimulus or event that occurs before the behavior and sets the occasion for it; the behavior is the observable and measurable response; and the consequence is the stimulus change that follows the behavior and affects its future probability. Understanding the three-term contingency is essential for analyzing why behavior occurs and for designing effective interventions.',
  },

  // B-07: Discriminative Stimulus (SD)
  {
    id: 'fc114',
    category: 'B. Skill Acquisition',
    taskCode: 'B-07',
    term: 'Discriminative Stimulus (SD)',
    definition:
      'A discriminative stimulus (SD, pronounced "ess-dee") is an antecedent stimulus that signals that reinforcement is available for a specific response. Through a history of differential reinforcement, the individual has learned that responding in the presence of the SD is likely to produce reinforcement. For example, a ringing telephone (SD) signals that picking it up (behavior) will be reinforced by a conversation (reinforcement). The presence of an SD increases the probability that the associated behavior will occur.',
  },

  // B-07: Stimulus Delta (S-delta)
  {
    id: 'fc115',
    category: 'B. Skill Acquisition',
    taskCode: 'B-07',
    term: 'Stimulus Delta (S-delta)',
    definition:
      'A stimulus delta (S-delta, often written as S\u0394) is an antecedent stimulus that signals that reinforcement is NOT available for a specific response. Through a history of non-reinforcement in its presence, the individual has learned that responding when the S-delta is present will not produce reinforcement. For example, an "out of order" sign on a vending machine (S-delta) signals that inserting money will not produce a snack. The presence of an S-delta decreases the probability that the associated behavior will occur.',
  },

  // B-16: Verbal Operants Overview
  {
    id: 'fc116',
    category: 'B. Skill Acquisition',
    taskCode: 'B-16',
    term: 'Verbal Operants Overview',
    definition:
      'B.F. Skinner\'s analysis of verbal behavior classifies language into functional units called verbal operants, each defined by its controlling antecedent variables and consequences rather than its form. The primary verbal operants include the mand (request, controlled by motivation), tact (label, controlled by a nonverbal stimulus), echoic (vocal imitation, controlled by a verbal stimulus with point-to-point correspondence), intraverbal (conversational response, controlled by a verbal stimulus without point-to-point correspondence), textual (reading aloud), and transcription (writing from dictation or copying). This functional approach guides language assessment and intervention in ABA.',
  },

  // B-19: Textual Behavior
  {
    id: 'fc117',
    category: 'B. Skill Acquisition',
    taskCode: 'B-19',
    term: 'Textual Behavior',
    definition:
      'Textual behavior is a verbal operant in which the speaker reads written words aloud. The antecedent is a written or printed stimulus, and the response is the spoken word or phrase that corresponds to it. Textual behavior has point-to-point correspondence between the written stimulus and the vocal response, meaning each written unit maps to a specific spoken unit. It is important to note that textual behavior refers only to the act of reading aloud and does not require comprehension of the material being read.',
  },

  // B-19: Transcription
  {
    id: 'fc118',
    category: 'B. Skill Acquisition',
    taskCode: 'B-19',
    term: 'Transcription',
    definition:
      'Transcription is a verbal operant in which the individual writes or types words that are spoken (dictation) or copies written text from one form to another. In dictation-based transcription, the antecedent is a spoken word and the response is the written form of that word. In copying, the antecedent is written text and the response is reproducing that text in written form. Transcription has point-to-point correspondence between the stimulus and the response, and like textual behavior, it does not require comprehension of the content.',
  },

  // E-10: Mandatory Reporting
  {
    id: 'fc119',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-10',
    term: 'Mandatory Reporting',
    definition:
      'Mandatory reporting refers to the legal obligation of certain professionals, including RBTs in most jurisdictions, to report suspected cases of abuse, neglect, or exploitation of vulnerable individuals (such as children, elderly persons, or individuals with disabilities) to the appropriate authorities. RBTs do not need to confirm that abuse has occurred—only a reasonable suspicion is required to trigger the duty to report. Failure to report can result in legal penalties and ethical violations, and the safety of the client must always be the primary concern.',
  },

  // E-02: Scope of Practice for RBTs
  {
    id: 'fc120',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-02',
    term: 'Scope of Practice for RBTs',
    definition:
      'The scope of practice for Registered Behavior Technicians (RBTs) is defined and limited by the BACB. RBTs are responsible for implementing behavior-analytic services as designed by their supervising BCBA or BCaBA, but they do NOT independently design intervention plans, conduct formal assessments, or make clinical decisions. RBTs must always work under the close supervision of a qualified supervisor and should refer any questions about treatment modifications to their supervisor. Practicing outside this scope is an ethical violation.',
  },

  // E-01: Supervision Requirements for RBTs
  {
    id: 'fc121',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-01',
    term: 'Supervision Requirements for RBTs',
    definition:
      'RBTs are required to receive ongoing supervision from a BCBA or BCaBA to maintain their credential and ensure quality service delivery. Supervision must include direct observation of the RBT implementing behavior-analytic services with clients, as well as opportunities for feedback, training, and discussion of cases. The BACB sets minimum supervision requirements, including a specified percentage of hours that must involve direct observation. Supervision is essential for maintaining treatment fidelity, supporting professional development, and protecting client welfare.',
  },

  // E-07: Confidentiality in ABA
  {
    id: 'fc122',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-07',
    term: 'Confidentiality in ABA',
    definition:
      'Confidentiality in ABA practice requires that all client information—including identifying details, assessment results, treatment plans, progress data, and session notes—be protected from unauthorized disclosure. RBTs must follow HIPAA regulations and organizational policies regarding the storage, transmission, and discussion of client information. This means not discussing clients in public spaces, not sharing information with unauthorized individuals (including confirming that someone is a client), and securing all written and electronic records. Breaches of confidentiality can result in legal consequences and loss of certification.',
  },

  // A-06: Behavior (Definition)
  {
    id: 'fc123',
    category: 'A. Measurement',
    taskCode: 'A-06',
    term: 'Behavior (Definition)',
    definition:
      'In applied behavior analysis, behavior is defined as anything an organism does that is observable and measurable. Behavior includes both overt actions (such as speaking, walking, or writing) and covert events (such as thinking or feeling) when they can be defined in measurable terms. The "dead man\'s test" is a useful rule: if a dead man can do it, it is not behavior. For example, "sitting quietly" fails the dead man\'s test because a dead man can sit quietly—instead, the absence of a behavior should be reframed as the presence of a measurable alternative.',
  },

  // A-06: Response Class
  {
    id: 'fc124',
    category: 'A. Measurement',
    taskCode: 'A-06',
    term: 'Response Class',
    definition:
      'A response class is a group of responses that may differ in their physical form or topography but produce the same functional effect on the environment. For example, a child may gain attention by calling out, tapping someone\'s shoulder, or waving their hand—all of these topographically different behaviors belong to the same response class because they serve the same function (accessing attention). Understanding response classes is critical in ABA because interventions should target the function of behavior rather than just its specific form.',
  },

  // C-02: Functional Behavior Assessment (FBA)
  {
    id: 'fc125',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    term: 'Functional Behavior Assessment (FBA)',
    definition:
      'A functional behavior assessment (FBA) is a systematic process used to identify the environmental variables that reliably predict and maintain problem behavior, ultimately determining the function of the behavior. An FBA may include indirect methods (interviews, rating scales), descriptive methods (direct observation such as ABC recording), and experimental methods (functional analysis). The results inform the development of a function-based behavior intervention plan. While BCBAs design and interpret FBAs, RBTs play a critical role in collecting the observational data used in the assessment.',
  },

  // A-01: ABC Recording
  {
    id: 'fc126',
    category: 'A. Measurement',
    taskCode: 'A-01',
    term: 'ABC Recording',
    definition:
      'ABC recording is a descriptive assessment method in which the observer documents the Antecedent (event or condition occurring immediately before the behavior), the Behavior (the specific observable action), and the Consequence (what happens immediately after the behavior) each time the target behavior occurs. This continuous, narrative-style recording helps identify patterns and potential functional relationships between environmental events and behavior. ABC recording is a key data collection method that RBTs may be asked to implement as part of a functional behavior assessment.',
  },

  // B-03: Reinforcement Thinning
  {
    id: 'fc127',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Reinforcement Thinning',
    definition:
      'Reinforcement thinning is the gradual and systematic reduction of the frequency or schedule of reinforcement while maintaining the target behavior at acceptable levels. This process is essential for transitioning from dense reinforcement schedules used during skill acquisition to the thinner, more naturalistic schedules that occur in everyday environments. Thinning should be done slowly and based on data to avoid ratio strain, which occurs when the schedule is thinned too quickly and behavior deteriorates. Successful thinning promotes maintenance and generalization of behavior change.',
  },

  // C-03: Deprivation
  {
    id: 'fc128',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    term: 'Deprivation',
    definition:
      'Deprivation is a condition in which an individual has gone without access to a particular reinforcer for a period of time. Deprivation functions as an establishing operation (EO) that increases the reinforcing effectiveness of the withheld stimulus and evokes behaviors that have previously produced it. For example, a child who has not had access to screen time for several hours (deprivation) will likely find screen time more reinforcing and will be more likely to engage in behaviors that have resulted in screen time access. Practitioners can use controlled deprivation to ensure reinforcers remain effective.',
  },

  // C-03: Satiation
  {
    id: 'fc129',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    term: 'Satiation',
    definition:
      'Satiation is a condition in which an individual has had extensive or prolonged access to a particular reinforcer, resulting in a temporary decrease in its reinforcing effectiveness. Satiation functions as an abolishing operation (AO) that decreases the value of the stimulus as a reinforcer and abates behaviors previously reinforced by it. For example, a child who has just eaten a large amount of candy (satiation) will find candy less reinforcing. Practitioners should be aware of satiation effects and rotate reinforcers or use generalized conditioned reinforcers to maintain motivation.',
  },

  // B-03: Pairing Procedure
  {
    id: 'fc130',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Pairing Procedure',
    definition:
      'The pairing procedure involves systematically associating a neutral stimulus with a known reinforcer so that the neutral stimulus acquires reinforcing properties through respondent conditioning. In practice, RBTs use pairing to establish themselves as conditioned reinforcers by consistently delivering preferred items, activities, and social interaction without placing demands. This process builds rapport and instructional control, making the learner more likely to approach, attend to, and cooperate with the RBT. Pairing is especially important when beginning services with a new client.',
  },

  // B-08: Errorless Learning
  {
    id: 'fc131',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    term: 'Errorless Learning',
    definition:
      'Errorless learning is a teaching strategy that uses immediate, full prompts from the very beginning of instruction to prevent the learner from making errors. Prompts are then systematically faded over time as the learner demonstrates competence. The rationale is that errors can be reinforced if the learner contacts reinforcement through incorrect responses, and repeated errors can become habitual and interfere with learning. Errorless learning is particularly effective for learners who become frustrated by errors or who have a history of prompt dependency.',
  },

  // B-10: Fluency
  {
    id: 'fc132',
    category: 'B. Skill Acquisition',
    taskCode: 'B-10',
    term: 'Fluency',
    definition:
      'Fluency in ABA refers to the combination of accuracy and speed in the performance of a skill, reflecting true mastery. A fluent behavior is characterized by its retention over time (maintenance), its resistance to distraction (endurance), and its application in new contexts (generalization or application). Fluency-based instruction, such as precision teaching, emphasizes building both correct responding and an appropriate rate of responding. Achieving fluency is an important goal because it indicates the learner has moved beyond mere accuracy to genuine competence.',
  },

  // B-12: Response Cost
  {
    id: 'fc133',
    category: 'B. Skill Acquisition',
    taskCode: 'B-12',
    term: 'Response Cost',
    definition:
      'Response cost is a form of negative punishment in which a specified amount of previously earned reinforcers (typically tokens or points) is removed contingent on the occurrence of a target problem behavior, resulting in a decrease in that behavior. Response cost is commonly used within token economy systems and should always be paired with positive reinforcement for appropriate behaviors. It is important that the learner never reaches a zero or negative balance, as this can lead to the system losing its effectiveness. Clear rules about what behaviors result in response cost should be established in advance.',
  },

  // C-04: Overcorrection
  {
    id: 'fc134',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    term: 'Overcorrection',
    definition:
      'Overcorrection is a behavior reduction procedure that takes two primary forms: restitutional overcorrection and positive practice overcorrection. In restitutional overcorrection, the individual is required to restore the environment to a state better than it was before the problem behavior occurred (e.g., cleaning the entire table after throwing food, not just the mess they made). In positive practice overcorrection, the individual must repeatedly practice the correct form of the behavior (e.g., practicing walking after running in the hallway). Overcorrection is considered a more restrictive procedure and should only be used when less restrictive approaches have been insufficient.',
  },

  // C-04: Time-Out from Reinforcement
  {
    id: 'fc135',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    term: 'Time-Out from Reinforcement',
    definition:
      'Time-out from positive reinforcement is a behavior reduction procedure in which access to reinforcing stimuli or environments is removed for a brief period contingent on the occurrence of a target problem behavior. There are two main types: exclusionary time-out (removing the individual from the reinforcing environment) and non-exclusionary time-out (removing reinforcing stimuli while the individual remains in the environment, such as turning away or removing materials). Time-out is only effective when the environment from which the individual is removed is actually reinforcing. It should be brief, consistent, and used in conjunction with reinforcement for appropriate behavior.',
  },

  // B-08: Modeling
  {
    id: 'fc136',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    term: 'Modeling',
    definition:
      'Modeling is a prompt or teaching strategy in which the practitioner demonstrates the target behavior for the learner to observe and imitate. The model can be presented live (in person) or through recorded media such as video. Modeling is an effective teaching tool when the learner has imitation skills in their repertoire. It is typically considered less intrusive than physical prompts but more intrusive than gestural or verbal prompts in a prompt hierarchy.',
  },

  // B-05: Video Modeling
  {
    id: 'fc137',
    category: 'B. Skill Acquisition',
    taskCode: 'B-05',
    term: 'Video Modeling',
    definition:
      'Video modeling is an evidence-based teaching strategy that uses video recordings to demonstrate target behaviors for the learner to observe and then imitate. The video may feature a peer, adult, or the learner themselves (video self-modeling). Video modeling has been shown to be effective for teaching social skills, play skills, daily living skills, and vocational skills, particularly for individuals with autism spectrum disorder. Advantages include the ability to control the demonstration precisely, replay as needed, and use the learner\'s visual learning strengths.',
  },

  // B-05: Natural Environment Teaching (NET)
  {
    id: 'fc138',
    category: 'B. Skill Acquisition',
    taskCode: 'B-05',
    term: 'Natural Environment Teaching (NET)',
    definition:
      'Natural environment teaching (NET) is an instructional approach that takes advantage of naturally occurring opportunities and the learner\'s current motivation to teach skills in the context of everyday activities and routines. Unlike structured discrete trial training (DTT), which occurs in a controlled setting with planned trials, NET follows the child\'s lead and uses natural reinforcers related to the activity. For example, during play, a practitioner might require the child to mand (request) for a preferred toy before providing it. NET promotes generalization because skills are taught in the contexts where they will naturally be used.',
  },

  // C-03: MO vs. SD
  {
    id: 'fc139',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    term: 'MO vs. SD',
    definition:
      'Motivating operations (MOs) and discriminative stimuli (SDs) are both antecedent variables that influence behavior, but they function differently. An MO changes the value of a reinforcer (value-altering effect) and changes the frequency of behavior associated with that reinforcer (behavior-altering effect). An SD, by contrast, signals the availability of reinforcement but does not change the reinforcer\'s value. For example, food deprivation (MO) makes food more valuable and evokes food-seeking behavior, while an "open" sign on a restaurant (SD) signals that food is available but does not make you hungrier.',
  },

  // B-06: Chaining Overview
  {
    id: 'fc140',
    category: 'B. Skill Acquisition',
    taskCode: 'B-06',
    term: 'Chaining Overview',
    definition:
      'Chaining is a procedure used to teach a complex behavior that consists of a sequence of simpler behaviors linked together, known as a behavior chain. In a chain, each step serves a dual function: it acts as a conditioned reinforcer for the preceding step and as a discriminative stimulus (SD) for the next step. A task analysis is conducted first to break the complex skill into its component steps. The three main chaining procedures are forward chaining, backward chaining, and total task chaining, each differing in the order in which steps are taught to mastery.',
  },

  // B-09: Reflexivity
  {
    id: 'fc141',
    category: 'B. Skill Acquisition',
    taskCode: 'B-09',
    term: 'Reflexivity',
    definition:
      'Reflexivity is one of the three defining properties of stimulus equivalence, along with symmetry and transitivity. Reflexivity refers to the ability to match a stimulus to itself, also known as generalized identity matching (A=A). For example, when shown a picture of a dog, the individual can match it to an identical picture of a dog. This may seem simple, but it demonstrates that the learner recognizes stimuli as being the same, which is a foundational prerequisite for more complex derived stimulus relations.',
  },

  // B-09: Symmetry
  {
    id: 'fc142',
    category: 'B. Skill Acquisition',
    taskCode: 'B-09',
    term: 'Symmetry',
    definition:
      'Symmetry is one of the three defining properties of stimulus equivalence. It refers to the reversibility of a trained stimulus relation: if a learner is taught that A goes with B (A\u2192B), then the relation B goes with A (B\u2192A) emerges without direct training. For example, if a child is taught to match the spoken word "dog" (A) to a picture of a dog (B), symmetry is demonstrated if the child can then match the picture of a dog (B) to the spoken word "dog" (A) without additional instruction. Symmetry demonstrates that the learner understands the bidirectional nature of the relationship.',
  },

  // B-09: Transitivity
  {
    id: 'fc143',
    category: 'B. Skill Acquisition',
    taskCode: 'B-09',
    term: 'Transitivity',
    definition:
      'Transitivity is one of the three defining properties of stimulus equivalence. It refers to the emergence of an untrained relation between two stimuli that have both been paired with a common third stimulus: if A\u2192B is trained and B\u2192C is trained, then A\u2192C emerges without direct training. For example, if a child learns to match the spoken word "dog" (A) to a picture of a dog (B), and to match the picture of a dog (B) to the written word "DOG" (C), transitivity is demonstrated if the child can match the spoken word "dog" (A) to the written word "DOG" (C) without being taught. This demonstrates the formation of an equivalence class.',
  },

  // B-14: Independent Group Contingency
  {
    id: 'fc144',
    category: 'B. Skill Acquisition',
    taskCode: 'B-14',
    term: 'Independent Group Contingency',
    definition:
      'An independent group contingency is an arrangement in which the same criterion for reinforcement is applied to all members of a group, but each individual earns reinforcement based solely on their own behavior. Whether other group members meet the criterion has no effect on any given individual\'s access to reinforcement. For example, any student who scores 80% or higher on the quiz earns extra recess. This type of contingency is fair in that each person\'s outcome depends only on their own performance, but it does not leverage peer influence to promote behavior change.',
  },

  // B-14: Dependent Group Contingency
  {
    id: 'fc145',
    category: 'B. Skill Acquisition',
    taskCode: 'B-14',
    term: 'Dependent Group Contingency',
    definition:
      'A dependent group contingency is an arrangement in which the entire group earns reinforcement based on the performance of one or more selected individuals. The selected individual(s) may be identified publicly or kept anonymous. For example, if the chosen student completes their assignment on time, the entire class earns five extra minutes of free time. This type of contingency can harness positive peer support and encouragement, but practitioners must be cautious about potential negative peer pressure or scapegoating if the selected individual does not meet the criterion.',
  },

  // B-14: Interdependent Group Contingency
  {
    id: 'fc146',
    category: 'B. Skill Acquisition',
    taskCode: 'B-14',
    term: 'Interdependent Group Contingency',
    definition:
      'An interdependent group contingency is an arrangement in which all members of a group must collectively meet a specified criterion for anyone in the group to earn reinforcement. The group succeeds or fails together. For example, the class earns a party only if the average score on the test is above 85%. The "Good Behavior Game" is a well-known example of an interdependent group contingency. This approach promotes teamwork, mutual support, and shared accountability, but practitioners should ensure the criterion is achievable so that one individual cannot prevent the entire group from earning reinforcement.',
  },

  // B-01: Treatment Fidelity / Procedural Integrity
  {
    id: 'fc147',
    category: 'B. Skill Acquisition',
    taskCode: 'B-01',
    term: 'Treatment Fidelity / Procedural Integrity',
    definition:
      'Treatment fidelity (also called procedural integrity or treatment integrity) refers to the extent to which an intervention is implemented exactly as it was designed and written. It is measured by comparing the practitioner\'s actual implementation steps against the written behavior plan, often using a checklist or fidelity measure. High treatment fidelity is essential for drawing valid conclusions about whether the intervention is responsible for observed behavior change. Low fidelity can lead to inaccurate assessments of intervention effectiveness and may compromise client outcomes.',
  },

  // B-12: Backup Reinforcer
  {
    id: 'fc148',
    category: 'B. Skill Acquisition',
    taskCode: 'B-12',
    term: 'Backup Reinforcer',
    definition:
      'Backup reinforcers are the items, activities, or privileges that tokens or points can be exchanged for in a token economy system. They are what give the tokens their reinforcing value—tokens function as conditioned reinforcers because they are associated with access to these backup reinforcers. Backup reinforcers should be individually determined through preference assessments to ensure they are motivating for each specific learner. Offering a variety of backup reinforcers at different token "prices" helps maintain motivation and reduces the likelihood of satiation.',
  },

  // B-03: Premack Principle
  {
    id: 'fc149',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    term: 'Premack Principle',
    definition:
      'The Premack Principle states that a high-probability (more preferred) behavior can be used to reinforce a low-probability (less preferred) behavior. Often referred to as "Grandma\'s rule," it follows the format: "First do X (less preferred), then you can do Y (more preferred)." For example, "First finish your vegetables, then you can have dessert." This principle is widely used in ABA and everyday life to increase engagement in less preferred activities by making access to preferred activities contingent upon completion of the less preferred task.',
  },

  // C-03: High-Probability Request Sequence
  {
    id: 'fc150',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    term: 'High-Probability Request Sequence',
    definition:
      'The high-probability (high-p) request sequence is an antecedent intervention strategy in which 3–5 requests that the individual is very likely to comply with (high-p requests) are delivered in rapid succession, with brief reinforcement for each, immediately before presenting a request that the individual is less likely to comply with (low-p request). The compliance momentum built from the high-p requests increases the likelihood of compliance with the subsequent low-p request. This strategy is effective for reducing noncompliance and escape-maintained behavior without the use of aversive procedures.',
  },

  // C-04: Functional Communication Training (FCT)
  {
    id: 'fc151',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    term: 'Functional Communication Training (FCT)',
    definition:
      'Functional communication training (FCT) is a differential reinforcement of alternative behavior (DRA) procedure in which an individual is taught an appropriate communicative response that serves the same function as the problem behavior it is intended to replace. The replacement behavior must be easier to perform, more efficient, and reliably reinforced. For example, if a child engages in aggression to escape demands (escape function), FCT would involve teaching the child to request a break using words, signs, or a communication device. FCT is one of the most well-researched and widely used behavior reduction strategies in ABA.',
  },

  // C-03: Noncontingent Reinforcement (NCR)
  {
    id: 'fc152',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    term: 'Noncontingent Reinforcement (NCR)',
    definition:
      'Noncontingent reinforcement (NCR) is an antecedent-based intervention in which a reinforcer is delivered on a fixed-time or variable-time schedule, regardless of the individual\'s behavior at the time of delivery. NCR reduces the motivating operation for problem behavior by providing the reinforcer independently of the response, thereby decreasing the individual\'s need to engage in problem behavior to access it. For example, if a child engages in problem behavior to gain attention, providing attention on a regular schedule (e.g., every 2 minutes) regardless of behavior can reduce the problem behavior by diminishing the EO for attention.',
  },

  // B-15: Stimulus Preference vs. Reinforcer Assessment
  {
    id: 'fc153',
    category: 'B. Skill Acquisition',
    taskCode: 'B-15',
    term: 'Stimulus Preference vs. Reinforcer Assessment',
    definition:
      'A stimulus preference assessment identifies which items or activities an individual prefers by measuring approach, selection, or engagement, but it does not confirm that those items will actually function as reinforcers. A reinforcer assessment goes one step further by testing whether a preferred item actually increases the future probability of a target behavior when delivered contingently. An item may be highly preferred but fail to function as a reinforcer in a given context, which is why both assessments are important for effective programming.',
  },

  // E-03: Ethical Considerations in Behavior Reduction
  {
    id: 'fc154',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-03',
    term: 'Ethical Considerations in Behavior Reduction',
    definition:
      'When implementing behavior reduction procedures, ethical guidelines require that the least restrictive effective treatment be used first. This means reinforcement-based procedures (such as differential reinforcement, NCR, and antecedent modifications) should be prioritized before considering punishment-based procedures. If more restrictive procedures are necessary, they must be approved by the supervising BCBA, documented in the behavior plan, and accompanied by reinforcement for appropriate alternative behaviors. The client\'s dignity, right to effective treatment, and overall well-being must guide all decisions regarding behavior reduction.',
  },
];
