import type { Question } from '../types';

export const questions: Question[] = [
  // ============================================================
  // A. MEASUREMENT (A-01 through A-07) — ~15 questions
  // ============================================================

  // A-01: Prepare for data collection
  {
    id: 'q001',
    category: 'A. Measurement',
    taskCode: 'A-01',
    question: 'Before beginning a session, an RBT reviews the data sheet, ensures the pencil and timer are ready, and confirms the target behaviors. This is an example of:',
    options: [
      'Implementing a measurement procedure',
      'Preparing for data collection',
      'Conducting a preference assessment',
      'Writing a behavior intervention plan',
    ],
    correctIndex: 1,
    explanation:
      'Preparing for data collection (A-01) involves gathering all necessary materials such as data sheets, writing utensils, timers, and reviewing target behavior definitions before the session begins.',
  },
  {
    id: 'q002',
    category: 'A. Measurement',
    taskCode: 'A-01',
    question: 'Which of the following is NOT part of preparing for data collection?',
    options: [
      'Reviewing the operational definition of the target behavior',
      'Making sure data sheets and writing tools are available',
      'Deciding which behaviors to target without consulting the BCBA',
      'Checking that timing devices are working properly',
    ],
    correctIndex: 2,
    explanation:
      'An RBT should never independently decide which behaviors to target. Target behaviors are determined by the supervising BCBA and outlined in the behavior plan.',
  },

  // A-02: Implement continuous measurement procedures
  {
    id: 'q003',
    category: 'A. Measurement',
    taskCode: 'A-02',
    question: 'A therapist counts every instance of a child saying "please" during a 30-minute session. What type of measurement is this?',
    options: [
      'Duration recording',
      'Momentary time sampling',
      'Frequency (event) recording',
      'Partial interval recording',
    ],
    correctIndex: 2,
    explanation:
      'Frequency (event) recording is a continuous measurement procedure that involves counting every occurrence of a behavior during an observation period.',
  },
  {
    id: 'q004',
    category: 'A. Measurement',
    taskCode: 'A-02',
    question: 'An RBT uses a stopwatch to measure how long a client engages in on-task behavior. This is an example of:',
    options: [
      'Latency recording',
      'Frequency recording',
      'Duration recording',
      'Whole interval recording',
    ],
    correctIndex: 2,
    explanation:
      'Duration recording measures the total amount of time a behavior occurs from onset to offset and is a continuous measurement procedure.',
  },
  {
    id: 'q005',
    category: 'A. Measurement',
    taskCode: 'A-02',
    question: 'Interresponse time (IRT) measures:',
    options: [
      'The time between the instruction and the start of the behavior',
      'The total time a behavior occurs during a session',
      'The time elapsed between two consecutive occurrences of a behavior',
      'The number of times a behavior occurs per minute',
    ],
    correctIndex: 2,
    explanation:
      'Interresponse time (IRT) is the elapsed time between two successive occurrences of a response. It is a continuous measurement procedure used to understand the temporal spacing of behaviors.',
  },
  {
    id: 'q006',
    category: 'A. Measurement',
    taskCode: 'A-02',
    question: 'Latency recording measures:',
    options: [
      'How many times a behavior occurs',
      'The time from the onset of a stimulus (e.g., instruction) to the initiation of the response',
      'The percentage of intervals in which a behavior occurred',
      'The total duration of a behavior across the session',
    ],
    correctIndex: 1,
    explanation:
      'Latency is the time from the onset of a stimulus (such as an instruction) to the beginning of the response. It is a continuous measurement procedure.',
  },

  // A-03: Implement discontinuous measurement procedures
  {
    id: 'q007',
    category: 'A. Measurement',
    taskCode: 'A-03',
    question: 'An RBT divides a session into 10-second intervals and records whether a behavior occurred at any point during each interval. This is:',
    options: [
      'Whole interval recording',
      'Momentary time sampling',
      'Frequency recording',
      'Partial interval recording',
    ],
    correctIndex: 3,
    explanation:
      'Partial interval recording involves dividing the observation into equal intervals and recording whether the behavior occurred at any point during each interval. It tends to overestimate the occurrence of behavior.',
  },
  {
    id: 'q008',
    category: 'A. Measurement',
    taskCode: 'A-03',
    question: 'Which discontinuous measurement procedure tends to underestimate the occurrence of behavior?',
    options: [
      'Partial interval recording',
      'Whole interval recording',
      'Momentary time sampling',
      'Frequency recording',
    ],
    correctIndex: 1,
    explanation:
      'Whole interval recording requires the behavior to occur throughout the entire interval to be scored, which tends to underestimate how often or how long the behavior actually occurs.',
  },
  {
    id: 'q009',
    category: 'A. Measurement',
    taskCode: 'A-03',
    question: 'At the end of every 2-minute interval, the RBT looks up and records whether the client is on-task at that exact moment. This describes:',
    options: [
      'Partial interval recording',
      'Duration recording',
      'Whole interval recording',
      'Momentary time sampling',
    ],
    correctIndex: 3,
    explanation:
      'Momentary time sampling involves observing and recording whether the behavior is occurring at the precise moment the interval ends, rather than throughout the interval.',
  },

  // A-04: Implement permanent product recording
  {
    id: 'q010',
    category: 'A. Measurement',
    taskCode: 'A-04',
    question: 'A teacher counts the number of math problems completed correctly on a worksheet. This is an example of:',
    options: [
      'Frequency recording',
      'Permanent product recording',
      'Duration recording',
      'Partial interval recording',
    ],
    correctIndex: 1,
    explanation:
      'Permanent product recording measures the tangible outcomes or products that result from a behavior (e.g., completed worksheets, items assembled) rather than observing the behavior directly.',
  },

  // A-05: Enter data and update graphs
  {
    id: 'q011',
    category: 'A. Measurement',
    taskCode: 'A-05',
    question: 'After a session, an RBT enters the collected data into the electronic system and updates the client\'s line graph. This task falls under:',
    options: [
      'Preparing for data collection',
      'Implementing continuous measurement',
      'Entering data and updating graphs',
      'Interpreting data independently',
    ],
    correctIndex: 2,
    explanation:
      'Entering data and updating graphs (A-05) is the process of transferring collected data into a permanent record and keeping visual displays current so the BCBA can analyze progress.',
  },

  // A-06: Describe behavior in observable and measurable terms
  {
    id: 'q012',
    category: 'A. Measurement',
    taskCode: 'A-06',
    question: 'Which of the following is the BEST example of a behavior described in observable and measurable terms?',
    options: [
      'The client was angry during the session',
      'The client hit the table with an open hand three times',
      'The client had a bad attitude',
      'The client was being disrespectful',
    ],
    correctIndex: 1,
    explanation:
      'Observable and measurable descriptions include specific, objective actions that can be seen and counted. "Hit the table with an open hand three times" describes the topography and frequency without subjective interpretation.',
  },
  {
    id: 'q013',
    category: 'A. Measurement',
    taskCode: 'A-06',
    question: 'An operational definition should include all of the following EXCEPT:',
    options: [
      'Observable actions that can be seen or heard',
      'Clear boundaries for what counts as the behavior',
      'The assumed internal motivation for the behavior',
      'Enough detail that two observers could agree on its occurrence',
    ],
    correctIndex: 2,
    explanation:
      'Operational definitions describe behavior in observable, measurable terms. They should not include assumptions about internal states or motivations, as these are not directly observable.',
  },

  // A-07: Design, plot, and interpret data using equal-interval graphs
  {
    id: 'q014',
    category: 'A. Measurement',
    taskCode: 'A-07',
    question: 'On an equal-interval line graph used in ABA, the x-axis typically represents:',
    options: [
      'The target behavior',
      'The rate of reinforcement',
      'Time (sessions or days)',
      'The level of the behavior',
    ],
    correctIndex: 2,
    explanation:
      'On a standard equal-interval line graph, the x-axis (horizontal axis) represents time, usually displayed as sessions, days, or observation periods.',
  },
  {
    id: 'q015',
    category: 'A. Measurement',
    taskCode: 'A-07',
    question: 'A phase change line on a graph indicates:',
    options: [
      'The client missed a session',
      'A change in conditions, such as moving from baseline to intervention',
      'The data point is an outlier',
      'The end of data collection',
    ],
    correctIndex: 1,
    explanation:
      'A phase change line (a vertical dashed line) on a graph indicates that a change in conditions has occurred, such as transitioning from baseline to an intervention phase.',
  },
  {
    id: 'q016',
    category: 'A. Measurement',
    taskCode: 'A-07',
    question: 'On a standard ABA graph, the y-axis represents:',
    options: [
      'The sessions or observation periods',
      'The condition labels',
      'The values of the dependent variable (the behavior being measured)',
      'The independent variable',
    ],
    correctIndex: 2,
    explanation:
      'The y-axis (vertical axis) on an ABA graph displays the values of the dependent variable, which is the behavior being measured (e.g., frequency, duration, percentage).',
  },

  // ============================================================
  // B. SKILL ACQUISITION (B-01 through B-21) — ~45 questions
  // ============================================================

  // B-01: Identify components of a written skill acquisition plan
  {
    id: 'q017',
    category: 'B. Skill Acquisition',
    taskCode: 'B-01',
    question: 'Which of the following is an essential component of a written skill acquisition plan?',
    options: [
      'The client\'s favorite color',
      'The target behavior, teaching procedure, and mastery criteria',
      'A list of all staff who have worked with the client',
      'The RBT\'s personal goals for the session',
    ],
    correctIndex: 1,
    explanation:
      'A skill acquisition plan should include a clear description of the target skill, the teaching procedures to be used, materials needed, prompting strategies, and mastery criteria.',
  },
  {
    id: 'q018',
    category: 'B. Skill Acquisition',
    taskCode: 'B-01',
    question: 'Mastery criteria in a skill acquisition plan specify:',
    options: [
      'The specific level of performance required before moving to the next target',
      'How long the session should last',
      'Which reinforcers to use',
      'The client\'s IEP goals',
    ],
    correctIndex: 0,
    explanation:
      'Mastery criteria define the performance standard a learner must achieve (e.g., 80% correct across 3 consecutive sessions) before a skill is considered mastered and a new target is introduced.',
  },

  // B-02: Prepare for the session as required by the skill acquisition plan
  {
    id: 'q019',
    category: 'B. Skill Acquisition',
    taskCode: 'B-02',
    question: 'Before a skill acquisition session, the RBT should:',
    options: [
      'Decide independently which new skills to teach',
      'Review the skill acquisition plan and prepare all necessary materials',
      'Skip reviewing the plan if they have memorized it',
      'Only focus on the behaviors they want to address',
    ],
    correctIndex: 1,
    explanation:
      'Preparing for the session (B-02) requires reviewing the skill acquisition plan to ensure correct implementation and preparing all necessary materials, stimuli, and reinforcers.',
  },

  // B-03: Use contingencies of reinforcement
  {
    id: 'q020',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'A three-term contingency consists of:',
    options: [
      'Reinforcement, punishment, and extinction',
      'Antecedent, behavior, and consequence',
      'Prompt, response, and feedback',
      'Stimulus, organism, and response',
    ],
    correctIndex: 1,
    explanation:
      'The three-term contingency (ABC) is the foundational unit of analysis in ABA, consisting of the antecedent (what happens before), the behavior, and the consequence (what happens after).',
  },
  {
    id: 'q021',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'Positive reinforcement occurs when:',
    options: [
      'A stimulus is removed following a behavior, increasing the future likelihood of that behavior',
      'A stimulus is added following a behavior, increasing the future likelihood of that behavior',
      'A stimulus is added following a behavior, decreasing the future likelihood of that behavior',
      'A behavior is ignored until it stops occurring',
    ],
    correctIndex: 1,
    explanation:
      'Positive reinforcement involves the addition of a stimulus following a behavior that results in an increase in the future likelihood of that behavior.',
  },
  {
    id: 'q022',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'Negative reinforcement involves:',
    options: [
      'Punishing a behavior to decrease it',
      'Giving the client a verbal reprimand',
      'The removal or avoidance of an aversive stimulus following a behavior, which increases the behavior',
      'Withholding reinforcement for a previously reinforced behavior',
    ],
    correctIndex: 2,
    explanation:
      'Negative reinforcement increases behavior through the removal or avoidance of an aversive stimulus contingent on the behavior. It is reinforcement (increases behavior), not punishment.',
  },

  // B-04: Implement discrete trial teaching (DTT)
  {
    id: 'q023',
    category: 'B. Skill Acquisition',
    taskCode: 'B-04',
    question: 'The correct sequence of a discrete trial is:',
    options: [
      'Consequence, behavior, antecedent',
      'Antecedent (SD), response, consequence, inter-trial interval',
      'Prompt, behavior, correction',
      'Reinforcement, response, feedback',
    ],
    correctIndex: 1,
    explanation:
      'A discrete trial consists of presenting the discriminative stimulus (SD), waiting for or prompting the response, delivering a consequence (reinforcement or correction), and observing an inter-trial interval before the next trial.',
  },
  {
    id: 'q024',
    category: 'B. Skill Acquisition',
    taskCode: 'B-04',
    question: 'In DTT, the inter-trial interval (ITI) refers to:',
    options: [
      'The time the client takes to respond',
      'The brief pause between consecutive trials',
      'The prompt given before the SD',
      'The number of trials per session',
    ],
    correctIndex: 1,
    explanation:
      'The inter-trial interval (ITI) is the brief pause between the consequence of one trial and the presentation of the antecedent for the next trial. It helps signal that a new trial is about to begin.',
  },

  // B-05: Implement naturalistic teaching procedures
  {
    id: 'q025',
    category: 'B. Skill Acquisition',
    taskCode: 'B-05',
    question: 'Incidental teaching is best characterized by:',
    options: [
      'Highly structured, therapist-led trials at a table',
      'Using the learner\'s naturally occurring interests and motivations to create teaching opportunities',
      'Teaching only during designated academic periods',
      'Having the learner repeat responses multiple times in a row',
    ],
    correctIndex: 1,
    explanation:
      'Incidental (naturalistic) teaching follows the child\'s lead and uses naturally occurring interests, motivations, and environmental arrangements to create and capitalize on teaching opportunities.',
  },
  {
    id: 'q026',
    category: 'B. Skill Acquisition',
    taskCode: 'B-05',
    question: 'A child reaches for a cookie on the counter. The RBT holds the cookie and waits for the child to say "cookie" before giving it. This is an example of:',
    options: [
      'Discrete trial teaching',
      'Incidental teaching',
      'Punishment',
      'Extinction',
    ],
    correctIndex: 1,
    explanation:
      'This is incidental teaching because the RBT is using a naturally occurring motivation (wanting the cookie) as an opportunity to teach a communicative response in the natural environment.',
  },

  // B-06: Implement task analysis procedures
  {
    id: 'q027',
    category: 'B. Skill Acquisition',
    taskCode: 'B-06',
    question: 'A task analysis involves:',
    options: [
      'Recording the frequency of a target behavior',
      'Breaking a complex skill into smaller, teachable steps',
      'Removing prompts over time',
      'Reinforcing successive approximations of a target behavior',
    ],
    correctIndex: 1,
    explanation:
      'A task analysis is the process of breaking a complex skill or behavior chain into smaller, individually teachable steps, making it easier for the learner to acquire the entire skill.',
  },
  {
    id: 'q028',
    category: 'B. Skill Acquisition',
    taskCode: 'B-06',
    question: 'When using forward chaining, the RBT:',
    options: [
      'Teaches the last step first and works backward',
      'Teaches all steps simultaneously',
      'Teaches the first step to mastery, then adds the next step, and so on',
      'Only provides verbal instructions for each step',
    ],
    correctIndex: 2,
    explanation:
      'In forward chaining, the learner is taught the first step of the task analysis independently while the remaining steps are prompted. Once the first step is mastered, the second step is taught, and so on.',
  },
  {
    id: 'q029',
    category: 'B. Skill Acquisition',
    taskCode: 'B-06',
    question: 'Backward chaining involves:',
    options: [
      'Teaching the first step of the chain first',
      'Teaching all steps at once',
      'Teaching the last step first while prompting all preceding steps',
      'Fading prompts from most to least intrusive',
    ],
    correctIndex: 2,
    explanation:
      'In backward chaining, the therapist completes all steps except the last one, which the learner performs independently. Once mastered, the learner performs the last two steps, and so on, working backward through the chain.',
  },

  // B-07: Implement discrimination training
  {
    id: 'q030',
    category: 'B. Skill Acquisition',
    taskCode: 'B-07',
    question: 'In discrimination training, a response is reinforced in the presence of the SD (discriminative stimulus) and not reinforced in the presence of the S-delta. This teaches the learner to:',
    options: [
      'Respond to all stimuli equally',
      'Respond only when the correct stimulus is present',
      'Avoid responding altogether',
      'Generalize the response to all settings',
    ],
    correctIndex: 1,
    explanation:
      'Discrimination training teaches a learner to respond differentially to different stimuli by reinforcing responses in the presence of the SD and withholding reinforcement in the presence of the S-delta.',
  },
  {
    id: 'q031',
    category: 'B. Skill Acquisition',
    taskCode: 'B-07',
    question: 'An RBT places a picture of a dog and a picture of a cat on the table and asks "Point to the dog." The picture of the dog serves as the:',
    options: [
      'S-delta',
      'Motivating operation',
      'Discriminative stimulus (SD)',
      'Unconditioned stimulus',
    ],
    correctIndex: 2,
    explanation:
      'The picture of the dog is the SD (discriminative stimulus) because it is the stimulus in whose presence the response (pointing to it) will be reinforced. The cat picture would be the S-delta.',
  },

  // B-08: Implement stimulus control transfer procedures
  {
    id: 'q032',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    question: 'Most-to-least prompting involves:',
    options: [
      'Starting with no prompts and adding prompts if the learner makes errors',
      'Starting with the most intrusive prompt and systematically fading to less intrusive prompts',
      'Using only verbal prompts throughout teaching',
      'Providing prompts only after incorrect responses',
    ],
    correctIndex: 1,
    explanation:
      'Most-to-least prompting begins with the most intrusive prompt (e.g., physical guidance) to ensure a correct response, then systematically fades to less intrusive prompts (e.g., gestural, then independent) as the learner demonstrates competence.',
  },
  {
    id: 'q033',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    question: 'Which prompt hierarchy goes from LEAST to MOST intrusive?',
    options: [
      'Physical, model, verbal, gestural, independent',
      'Independent, gestural, verbal, model, physical',
      'Verbal, physical, gestural, model, independent',
      'Independent, physical, model, gestural, verbal',
    ],
    correctIndex: 1,
    explanation:
      'From least to most intrusive, the prompt hierarchy is: independent (no prompt), gestural (pointing/motioning), verbal (telling), model (demonstrating), and physical (hand-over-hand guidance).',
  },
  {
    id: 'q034',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    question: 'Stimulus fading involves:',
    options: [
      'Gradually removing prompts over time',
      'Gradually changing a physical characteristic of the stimulus (e.g., size, color, intensity) to transfer control to the target stimulus',
      'Immediately removing all prompts',
      'Adding more stimuli to the array',
    ],
    correctIndex: 1,
    explanation:
      'Stimulus fading involves gradually altering a physical dimension of a stimulus (such as size, color, or intensity) to shift stimulus control from a modified stimulus to the natural target stimulus.',
  },
  {
    id: 'q035',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    question: 'Time delay is a prompt fading strategy in which:',
    options: [
      'The therapist uses only physical prompts',
      'The interval between the SD and the prompt is gradually increased',
      'Multiple prompts are given simultaneously',
      'The reinforcer is delivered after a set delay',
    ],
    correctIndex: 1,
    explanation:
      'In time delay (progressive or constant), the therapist gradually increases the interval between the presentation of the SD and the delivery of the prompt, giving the learner an opportunity to respond independently before being prompted.',
  },

  // B-09: Implement stimulus equivalence procedures
  {
    id: 'q036',
    category: 'B. Skill Acquisition',
    taskCode: 'B-09',
    question: 'Stimulus equivalence is demonstrated when a learner shows:',
    options: [
      'Reflexivity, symmetry, and transitivity',
      'Generalization, maintenance, and fluency',
      'Acquisition, retention, and transfer',
      'Discrimination, generalization, and extinction',
    ],
    correctIndex: 0,
    explanation:
      'Stimulus equivalence is established when the learner demonstrates all three properties: reflexivity (A=A), symmetry (if A=B, then B=A), and transitivity (if A=B and B=C, then A=C).',
  },

  // B-10: Implement generalization and maintenance procedures
  {
    id: 'q037',
    category: 'B. Skill Acquisition',
    taskCode: 'B-10',
    question: 'Generalization occurs when:',
    options: [
      'A behavior is only performed in the training setting',
      'A learned behavior occurs in untrained settings, with untrained people, or with untrained stimuli',
      'A behavior decreases over time',
      'A behavior is placed on extinction',
    ],
    correctIndex: 1,
    explanation:
      'Generalization occurs when a behavior learned under one set of conditions is performed under different, untrained conditions such as new settings, new people, or new stimuli.',
  },
  {
    id: 'q038',
    category: 'B. Skill Acquisition',
    taskCode: 'B-10',
    question: 'Maintenance refers to:',
    options: [
      'The learner performing the behavior only when prompted',
      'The learner performing the behavior at a higher rate than during training',
      'The continued occurrence of a learned behavior after training has ended',
      'The learner acquiring a new skill for the first time',
    ],
    correctIndex: 2,
    explanation:
      'Maintenance is the extent to which a learner continues to perform a behavior after a portion or all of the training has been removed. It demonstrates that the skill has been retained over time.',
  },
  {
    id: 'q039',
    category: 'B. Skill Acquisition',
    taskCode: 'B-10',
    question: 'Training with multiple exemplars is a strategy to promote:',
    options: [
      'Extinction',
      'Generalization',
      'Punishment',
      'Prompt dependency',
    ],
    correctIndex: 1,
    explanation:
      'Training with multiple exemplars (e.g., using different materials, settings, or people during teaching) is a key strategy to promote generalization of learned skills to novel situations.',
  },

  // B-11: Implement shaping procedures
  {
    id: 'q040',
    category: 'B. Skill Acquisition',
    taskCode: 'B-11',
    question: 'Shaping involves:',
    options: [
      'Reinforcing each step in a task analysis',
      'Differentially reinforcing successive approximations toward a target behavior',
      'Providing a model of the target behavior',
      'Using a token economy to increase motivation',
    ],
    correctIndex: 1,
    explanation:
      'Shaping is the procedure of differentially reinforcing successive approximations of a target behavior. Each approximation more closely resembles the final desired behavior.',
  },
  {
    id: 'q041',
    category: 'B. Skill Acquisition',
    taskCode: 'B-11',
    question: 'A therapist first reinforces a child for making any vocalization, then only for vocalizations that approximate the word "ball," then only for saying "ball." This is an example of:',
    options: [
      'Stimulus fading',
      'Chaining',
      'Shaping',
      'Discrimination training',
    ],
    correctIndex: 2,
    explanation:
      'This describes shaping because the therapist is differentially reinforcing responses that increasingly resemble the target behavior (saying "ball"), starting from simpler approximations.',
  },

  // B-12: Implement token economy procedures
  {
    id: 'q042',
    category: 'B. Skill Acquisition',
    taskCode: 'B-12',
    question: 'In a token economy, tokens function as:',
    options: [
      'Unconditioned reinforcers',
      'Conditioned (generalized) reinforcers',
      'Unconditioned punishers',
      'Discriminative stimuli',
    ],
    correctIndex: 1,
    explanation:
      'Tokens are conditioned (generalized) reinforcers because they are paired with multiple backup reinforcers. They acquire their reinforcing value through this pairing, not inherently.',
  },
  {
    id: 'q043',
    category: 'B. Skill Acquisition',
    taskCode: 'B-12',
    question: 'When implementing a token economy, which of the following is important?',
    options: [
      'Allow the client to exchange tokens only at the end of the week',
      'Clearly define the target behaviors, the number of tokens earned, and the exchange rate for backup reinforcers',
      'Use the same backup reinforcer for all clients',
      'Deliver tokens on a variable schedule from the start',
    ],
    correctIndex: 1,
    explanation:
      'A well-designed token economy requires clearly defined target behaviors, a specified number of tokens for each behavior, and a clear exchange rate (how many tokens are needed for each backup reinforcer).',
  },

  // B-13: Implement differential reinforcement procedures
  {
    id: 'q044',
    category: 'B. Skill Acquisition',
    taskCode: 'B-13',
    question: 'DRA (Differential Reinforcement of Alternative behavior) involves:',
    options: [
      'Reinforcing the target problem behavior on a thinned schedule',
      'Reinforcing a specific alternative behavior while withholding reinforcement for the problem behavior',
      'Reinforcing the absence of the problem behavior for a set time period',
      'Reinforcing any behavior other than the target problem behavior',
    ],
    correctIndex: 1,
    explanation:
      'DRA involves reinforcing a specific, desirable alternative behavior that serves as a replacement for the problem behavior, while placing the problem behavior on extinction.',
  },
  {
    id: 'q045',
    category: 'B. Skill Acquisition',
    taskCode: 'B-13',
    question: 'DRO (Differential Reinforcement of Other behavior) involves:',
    options: [
      'Reinforcing a specific replacement behavior',
      'Reinforcing a behavior that is physically incompatible with the problem behavior',
      'Providing reinforcement when the target problem behavior has NOT occurred for a specified time period',
      'Reinforcing lower rates of the problem behavior',
    ],
    correctIndex: 2,
    explanation:
      'DRO provides reinforcement contingent on the absence of the target problem behavior for a specified interval. If the problem behavior occurs during the interval, the timer resets.',
  },
  {
    id: 'q046',
    category: 'B. Skill Acquisition',
    taskCode: 'B-13',
    question: 'A therapist reinforces a client for sitting in their seat (instead of running around the room). Since sitting is physically incompatible with running, this is an example of:',
    options: [
      'DRA',
      'DRO',
      'DRI',
      'DRL',
    ],
    correctIndex: 2,
    explanation:
      'DRI (Differential Reinforcement of Incompatible behavior) involves reinforcing a behavior that is physically incompatible with the problem behavior. Sitting is physically incompatible with running.',
  },
  {
    id: 'q047',
    category: 'B. Skill Acquisition',
    taskCode: 'B-13',
    question: 'DRL (Differential Reinforcement of Low rates of behavior) is used when:',
    options: [
      'The goal is to completely eliminate the behavior',
      'The goal is to reduce the behavior to a more acceptable rate, not eliminate it entirely',
      'The goal is to increase the behavior',
      'The goal is to replace the behavior with an incompatible one',
    ],
    correctIndex: 1,
    explanation:
      'DRL is used when the behavior is acceptable at lower rates but occurs too frequently. Reinforcement is provided when the behavior occurs at or below a predetermined criterion.',
  },

  // B-14: Implement group contingency procedures
  {
    id: 'q048',
    category: 'B. Skill Acquisition',
    taskCode: 'B-14',
    question: 'In an interdependent group contingency:',
    options: [
      'Each individual must meet the criterion independently to earn their own reinforcement',
      'A single individual is selected, and the whole group earns reinforcement based on that individual\'s performance',
      'All group members must collectively meet the criterion for the group to earn reinforcement',
      'Only the highest-performing member earns reinforcement',
    ],
    correctIndex: 2,
    explanation:
      'In an interdependent group contingency, the entire group must collectively meet a performance criterion. The reinforcer is then delivered to the whole group based on the group\'s combined performance.',
  },

  // B-15: Implement stimulus preference assessment procedures
  {
    id: 'q049',
    category: 'B. Skill Acquisition',
    taskCode: 'B-15',
    question: 'A paired stimulus (forced-choice) preference assessment involves:',
    options: [
      'Presenting all available items simultaneously and observing which the client approaches first',
      'Presenting two items at a time and recording which one the client selects, rotating through all possible pairs',
      'Asking the caregiver what the client prefers',
      'Presenting one item at a time and measuring how long the client engages with it',
    ],
    correctIndex: 1,
    explanation:
      'A paired stimulus (forced-choice) preference assessment presents two items at a time and records the client\'s selection. All possible pairs of items are presented, producing a clear hierarchy of preferences.',
  },
  {
    id: 'q050',
    category: 'B. Skill Acquisition',
    taskCode: 'B-15',
    question: 'A free operant preference assessment involves:',
    options: [
      'Asking the client to rank items from most to least preferred',
      'Presenting items one at a time and measuring approach behavior',
      'Allowing the client free access to a variety of items and recording how much time is spent with each',
      'Presenting two items and asking the client to choose one',
    ],
    correctIndex: 2,
    explanation:
      'A free operant preference assessment provides free access to multiple items and records the duration of engagement with each. It requires minimal structure and provides information about item preference through direct observation.',
  },
  {
    id: 'q051',
    category: 'B. Skill Acquisition',
    taskCode: 'B-15',
    question: 'Which type of preference assessment is the quickest to conduct but may be less accurate?',
    options: [
      'Paired stimulus assessment',
      'Multiple stimulus without replacement (MSWO)',
      'Free operant observation',
      'Single stimulus assessment',
    ],
    correctIndex: 2,
    explanation:
      'Free operant observation is the quickest preference assessment method because it simply involves observing a client interact with available items in the environment, but it may be less precise in establishing a hierarchy compared to systematic methods like MSWO.',
  },

  // B-16: Implement mand training
  {
    id: 'q052',
    category: 'B. Skill Acquisition',
    taskCode: 'B-16',
    question: 'A mand is a verbal operant that is:',
    options: [
      'Under the control of a nonverbal stimulus (object, event, or property)',
      'A repetition of someone else\'s verbal behavior',
      'Under the control of a motivating operation and is reinforced by the specific item or action requested',
      'Under the control of a verbal stimulus and has no point-to-point correspondence',
    ],
    correctIndex: 2,
    explanation:
      'A mand is a verbal operant controlled by a motivating operation (desire, need) and is reinforced by receiving the specific reinforcer requested. For example, saying "water" when thirsty and receiving water.',
  },
  {
    id: 'q053',
    category: 'B. Skill Acquisition',
    taskCode: 'B-16',
    question: 'During mand training, the RBT should ensure that:',
    options: [
      'The client does not have access to the desired item before the mand',
      'The client always has free access to all preferred items',
      'Only vocal mands are accepted',
      'Mands are only taught during structured DTT sessions',
    ],
    correctIndex: 0,
    explanation:
      'For effective mand training, the motivating operation must be present, meaning the client should want the item but not already have access to it. This creates the motivation to mand (request).',
  },

  // B-17: Implement tact training
  {
    id: 'q054',
    category: 'B. Skill Acquisition',
    taskCode: 'B-17',
    question: 'A tact is a verbal operant in which the speaker:',
    options: [
      'Requests a desired item or action',
      'Labels or names a stimulus in the environment (object, action, event, or property)',
      'Repeats what someone else has said',
      'Answers a question about a topic not present',
    ],
    correctIndex: 1,
    explanation:
      'A tact is a verbal operant evoked by a nonverbal stimulus (something the speaker sees, hears, smells, etc.) and is maintained by generalized conditioned reinforcement. It is essentially labeling or naming things.',
  },
  {
    id: 'q055',
    category: 'B. Skill Acquisition',
    taskCode: 'B-17',
    question: 'An RBT holds up a picture of a cat and asks "What is this?" The child says "Cat." This is an example of a:',
    options: [
      'Mand',
      'Echoic',
      'Tact',
      'Intraverbal',
    ],
    correctIndex: 2,
    explanation:
      'This is a tact because the child is labeling a nonverbal stimulus (the picture of a cat) present in the environment. The response is under the control of the visual stimulus.',
  },

  // B-18: Implement intraverbal training
  {
    id: 'q056',
    category: 'B. Skill Acquisition',
    taskCode: 'B-18',
    question: 'An intraverbal is a verbal response that:',
    options: [
      'Is a direct repetition of what another person said',
      'Is evoked by a verbal stimulus and has no point-to-point correspondence with that stimulus',
      'Labels an object present in the environment',
      'Is a request for a desired item',
    ],
    correctIndex: 1,
    explanation:
      'An intraverbal is a verbal operant controlled by a verbal stimulus where the response does not have point-to-point correspondence. Examples include answering questions, fill-in-the-blank, or conversational exchanges.',
  },
  {
    id: 'q057',
    category: 'B. Skill Acquisition',
    taskCode: 'B-18',
    question: 'The therapist says "What do you drink when you are thirsty?" and the child says "Water." This is an example of:',
    options: [
      'A tact',
      'A mand',
      'An echoic',
      'An intraverbal',
    ],
    correctIndex: 3,
    explanation:
      'This is an intraverbal because the child\'s response ("Water") is controlled by the verbal stimulus (the question) and there is no point-to-point correspondence between the question and the answer. No water is present in the environment.',
  },

  // B-19: Implement listener responding training
  {
    id: 'q058',
    category: 'B. Skill Acquisition',
    taskCode: 'B-19',
    question: 'Listener responding (receptive language) involves:',
    options: [
      'The learner labeling items in the environment',
      'The learner repeating what the therapist says',
      'The learner responding to someone else\'s verbal behavior with a nonverbal action (e.g., pointing, following an instruction)',
      'The learner requesting preferred items',
    ],
    correctIndex: 2,
    explanation:
      'Listener responding involves the learner acting as the listener by performing a nonverbal response based on another person\'s verbal behavior, such as following instructions or selecting the correct item when named.',
  },
  {
    id: 'q059',
    category: 'B. Skill Acquisition',
    taskCode: 'B-19',
    question: 'The RBT says "Touch your nose" and the client touches their nose. This is an example of:',
    options: [
      'A tact',
      'Listener responding',
      'An intraverbal',
      'An echoic',
    ],
    correctIndex: 1,
    explanation:
      'This is listener responding because the client is responding to the RBT\'s verbal instruction by performing a motor (nonverbal) action. The client is acting as the listener.',
  },

  // B-20: Implement echoic training
  {
    id: 'q060',
    category: 'B. Skill Acquisition',
    taskCode: 'B-20',
    question: 'An echoic is a verbal operant in which the speaker:',
    options: [
      'Names an item they see',
      'Repeats the verbal behavior of another person with point-to-point correspondence',
      'Answers a conversational question',
      'Requests a desired item',
    ],
    correctIndex: 1,
    explanation:
      'An echoic is a verbal operant in which the speaker repeats the verbal behavior of another person. It has point-to-point correspondence (the response matches the verbal stimulus) and is maintained by generalized conditioned reinforcement.',
  },
  {
    id: 'q061',
    category: 'B. Skill Acquisition',
    taskCode: 'B-20',
    question: 'The therapist says "Say ball" and the child says "Ball." This is an example of:',
    options: [
      'A mand',
      'An intraverbal',
      'A tact',
      'An echoic',
    ],
    correctIndex: 3,
    explanation:
      'This is an echoic because the child is repeating the exact verbal stimulus provided by the therapist. The response has point-to-point correspondence with the verbal model.',
  },

  // B-21: Implement matching-to-sample procedures
  {
    id: 'q062',
    category: 'B. Skill Acquisition',
    taskCode: 'B-21',
    question: 'In a matching-to-sample (MTS) procedure, the learner is presented with:',
    options: [
      'A single stimulus and asked to label it',
      'A sample stimulus and an array of comparison stimuli, and is required to select the comparison that matches the sample',
      'Two identical items and asked to hand one to the therapist',
      'A series of verbal instructions to follow',
    ],
    correctIndex: 1,
    explanation:
      'In matching-to-sample, the learner is shown a sample stimulus and then must select the matching stimulus from an array of comparison stimuli. This procedure teaches discrimination and equivalence relations.',
  },

  // Additional B questions for broader coverage
  {
    id: 'q063',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'A schedule of reinforcement that provides reinforcement after a fixed number of responses is called:',
    options: [
      'Fixed interval (FI)',
      'Variable ratio (VR)',
      'Fixed ratio (FR)',
      'Variable interval (VI)',
    ],
    correctIndex: 2,
    explanation:
      'A fixed ratio (FR) schedule provides reinforcement after a set, unchanging number of responses (e.g., FR-5 means reinforcement after every 5th response).',
  },
  {
    id: 'q064',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'Which schedule of reinforcement produces the highest, most steady rate of responding?',
    options: [
      'Fixed interval',
      'Variable interval',
      'Fixed ratio',
      'Variable ratio',
    ],
    correctIndex: 3,
    explanation:
      'Variable ratio (VR) schedules produce the highest and most steady rates of responding because reinforcement is unpredictable but based on the number of responses, motivating persistent effort.',
  },
  {
    id: 'q065',
    category: 'B. Skill Acquisition',
    taskCode: 'B-04',
    question: 'During DTT, if the learner provides an incorrect response, the RBT should typically:',
    options: [
      'Provide the reinforcer anyway to maintain rapport',
      'End the session immediately',
      'Implement a correction procedure as specified in the program',
      'Skip to the next target and never revisit that trial',
    ],
    correctIndex: 2,
    explanation:
      'When a learner responds incorrectly during DTT, the RBT should follow the correction procedure outlined in the program (often re-presenting the trial with a prompt) rather than reinforcing the error or ending the session.',
  },
  {
    id: 'q066',
    category: 'B. Skill Acquisition',
    taskCode: 'B-07',
    question: 'Stimulus generalization occurs when:',
    options: [
      'A behavior reinforced in the presence of one stimulus also occurs in the presence of similar stimuli',
      'A behavior only occurs in the original training setting',
      'A behavior decreases due to punishment',
      'A behavior occurs only when prompted',
    ],
    correctIndex: 0,
    explanation:
      'Stimulus generalization occurs when a behavior that has been reinforced in the presence of one stimulus occurs in the presence of other, similar stimuli without direct training.',
  },
  {
    id: 'q067',
    category: 'B. Skill Acquisition',
    taskCode: 'B-06',
    question: 'Total task chaining involves:',
    options: [
      'Teaching only the first step to mastery before introducing the next step',
      'Teaching only the last step first',
      'Prompting and teaching all steps in the task analysis during every session',
      'Having the learner observe the entire chain without participating',
    ],
    correctIndex: 2,
    explanation:
      'In total task chaining (also called total task presentation), the learner attempts every step in the task analysis during each session, with prompts provided as needed for steps not yet mastered.',
  },
  {
    id: 'q068',
    category: 'B. Skill Acquisition',
    taskCode: 'B-11',
    question: 'The key difference between shaping and chaining is:',
    options: [
      'Shaping is for increasing behaviors; chaining is for decreasing behaviors',
      'Shaping reinforces successive approximations of a single response; chaining links a sequence of already-learned responses together',
      'Shaping uses prompts; chaining does not',
      'There is no difference; they are the same procedure',
    ],
    correctIndex: 1,
    explanation:
      'Shaping reinforces successive approximations toward a single target response, while chaining links together a sequence of discrete behaviors (steps in a task analysis) to form a complex skill.',
  },
  {
    id: 'q069',
    category: 'B. Skill Acquisition',
    taskCode: 'B-12',
    question: 'If a client loses previously earned tokens for engaging in problem behavior, this is an example of:',
    options: [
      'Positive reinforcement',
      'Negative reinforcement',
      'Response cost',
      'Overcorrection',
    ],
    correctIndex: 2,
    explanation:
      'Response cost involves the removal of a specified amount of a reinforcer (tokens) contingent on the occurrence of a problem behavior. It is a form of negative punishment used within token economies.',
  },
  {
    id: 'q070',
    category: 'B. Skill Acquisition',
    taskCode: 'B-14',
    question: 'In a dependent group contingency:',
    options: [
      'All members must meet the criterion for the group to earn reinforcement',
      'Each member earns reinforcement independently based on their own behavior',
      'The performance of one selected individual determines whether the group earns reinforcement',
      'The group selects their own reinforcement criteria',
    ],
    correctIndex: 2,
    explanation:
      'In a dependent group contingency, the reinforcement for the entire group is based on the behavior of one individual (or a small subset). The group earns or does not earn the reinforcer depending on that individual\'s performance.',
  },
  {
    id: 'q071',
    category: 'B. Skill Acquisition',
    taskCode: 'B-15',
    question: 'In a multiple stimulus without replacement (MSWO) preference assessment:',
    options: [
      'All items remain available after each selection',
      'The selected item is removed from the array before the next trial, and items are re-arranged',
      'Only two items are presented at a time',
      'The client only observes the items without interacting with them',
    ],
    correctIndex: 1,
    explanation:
      'In MSWO, after the client selects an item, that item is removed from the array and the remaining items are rearranged for the next trial. This produces a preference hierarchy efficiently.',
  },
  {
    id: 'q072',
    category: 'B. Skill Acquisition',
    taskCode: 'B-16',
    question: 'Which of the following is the BEST example of a mand?',
    options: [
      'A child sees a dog and says "Dog!"',
      'A child repeats "milk" after the therapist says "Say milk"',
      'A child who is thirsty says "Water, please"',
      'A child answers "Two" when asked "How many eyes do you have?"',
    ],
    correctIndex: 2,
    explanation:
      'A mand is controlled by a motivating operation (thirst) and results in the specific reinforcer (water). The child saying "Water, please" when thirsty is a mand because it is a request driven by a current need.',
  },
  {
    id: 'q073',
    category: 'B. Skill Acquisition',
    taskCode: 'B-09',
    question: 'If a child learns that the written word "CAT" matches the picture of a cat, and the picture of a cat matches the spoken word "cat," stimulus equivalence would predict that the child can also:',
    options: [
      'Only match identical stimuli',
      'Match the written word "CAT" to the spoken word "cat" without direct training',
      'Label all animals correctly',
      'Read full sentences independently',
    ],
    correctIndex: 1,
    explanation:
      'Through transitivity (a property of stimulus equivalence), if A=B and B=C, then A=C. If written "CAT" = picture of cat, and picture of cat = spoken "cat," the child should match written "CAT" to spoken "cat" without direct training.',
  },

  // ============================================================
  // C. BEHAVIOR REDUCTION (C-01 through C-04) — ~15 questions
  // ============================================================

  // C-01: Identify components of a written behavior reduction plan
  {
    id: 'q074',
    category: 'C. Behavior Reduction',
    taskCode: 'C-01',
    question: 'A written behavior reduction plan should include:',
    options: [
      'An operational definition of the target behavior, the function of the behavior, and intervention procedures',
      'Only the name of the behavior and the consequence to be used',
      'A list of all problem behaviors the client has ever exhibited',
      'The RBT\'s personal opinion about why the behavior occurs',
    ],
    correctIndex: 0,
    explanation:
      'A comprehensive behavior reduction plan includes an operational definition of the target behavior, the hypothesized function, replacement behaviors, antecedent strategies, consequence procedures, and crisis protocols.',
  },
  {
    id: 'q075',
    category: 'C. Behavior Reduction',
    taskCode: 'C-01',
    question: 'Which of the following should be included in a behavior reduction plan?',
    options: [
      'The RBT\'s recommendations for medication changes',
      'Procedures for teaching a functionally equivalent replacement behavior',
      'The client\'s medical history',
      'The RBT\'s personal contact information',
    ],
    correctIndex: 1,
    explanation:
      'A behavior reduction plan should include procedures for teaching a replacement behavior that serves the same function as the problem behavior, ensuring the client has an appropriate alternative way to get their needs met.',
  },

  // C-02: Describe common functions of behavior
  {
    id: 'q076',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    question: 'The four common functions of behavior are:',
    options: [
      'Attention, escape, tangible, and automatic (sensory)',
      'Biological, psychological, social, and emotional',
      'Positive, negative, neutral, and mixed',
      'Primary, secondary, tertiary, and quaternary',
    ],
    correctIndex: 0,
    explanation:
      'The four commonly identified functions of behavior are: attention (social positive reinforcement), escape/avoidance (social negative reinforcement), access to tangibles (social positive reinforcement), and automatic/sensory reinforcement.',
  },
  {
    id: 'q077',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    question: 'A child screams every time they are asked to do homework, and the parent then tells the child they can take a break. The screaming is most likely maintained by:',
    options: [
      'Attention',
      'Access to tangibles',
      'Escape',
      'Automatic reinforcement',
    ],
    correctIndex: 2,
    explanation:
      'The screaming is reinforced by the removal of the homework demand (escape). When the parent allows a break contingent on screaming, the child learns that screaming produces escape from the non-preferred task.',
  },
  {
    id: 'q078',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    question: 'A child engages in hand-flapping when alone, and the behavior persists regardless of whether anyone else is present. This behavior is most likely maintained by:',
    options: [
      'Attention',
      'Escape',
      'Access to tangibles',
      'Automatic (sensory) reinforcement',
    ],
    correctIndex: 3,
    explanation:
      'When a behavior persists in the absence of social consequences and occurs regardless of whether others are present, it is likely maintained by automatic (sensory) reinforcement — the behavior itself produces the reinforcement.',
  },
  {
    id: 'q079',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    question: 'A child throws toys on the floor and their parent picks up the toys and talks to the child about why they should not throw things. This behavior is most likely maintained by:',
    options: [
      'Escape',
      'Automatic reinforcement',
      'Attention',
      'Access to tangibles',
    ],
    correctIndex: 2,
    explanation:
      'The parent\'s verbal interaction (even reprimands) following the toy-throwing provides social attention, which reinforces the behavior. Attention-maintained behaviors increase when they produce social responses from others.',
  },
  {
    id: 'q080',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    question: 'A child screams and cries until the parent gives them the iPad. This behavior is most likely maintained by:',
    options: [
      'Attention',
      'Automatic reinforcement',
      'Escape',
      'Access to tangibles',
    ],
    correctIndex: 3,
    explanation:
      'The behavior is maintained by access to tangibles because the screaming and crying result in the child receiving the desired item (iPad). The tangible item serves as the reinforcer for the behavior.',
  },

  // C-03: Implement interventions based on modification of antecedents
  {
    id: 'q081',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    question: 'Which of the following is an example of an antecedent intervention?',
    options: [
      'Providing a time-out after the behavior occurs',
      'Offering the child a choice of tasks before the demand is presented',
      'Ignoring the problem behavior when it occurs',
      'Delivering a reprimand following the behavior',
    ],
    correctIndex: 1,
    explanation:
      'Antecedent interventions are strategies implemented before the behavior occurs to prevent it. Offering choices is an antecedent strategy that can reduce problem behavior by giving the client some control over the situation.',
  },
  {
    id: 'q082',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    question: 'Noncontingent reinforcement (NCR) is an antecedent strategy that involves:',
    options: [
      'Providing reinforcement only when the target behavior occurs',
      'Delivering the reinforcer on a time-based schedule regardless of behavior',
      'Removing the reinforcer when the behavior occurs',
      'Providing reinforcement for a replacement behavior',
    ],
    correctIndex: 1,
    explanation:
      'NCR involves providing the reinforcer on a fixed-time or variable-time schedule, independent of the learner\'s behavior. By providing the reinforcer freely, the motivation to engage in the problem behavior is reduced.',
  },
  {
    id: 'q083',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    question: 'Providing a visual schedule before transitions is an example of:',
    options: [
      'Consequence manipulation',
      'Antecedent modification',
      'Differential reinforcement',
      'Extinction',
    ],
    correctIndex: 1,
    explanation:
      'A visual schedule is an antecedent intervention because it is implemented before the transition occurs to increase predictability and reduce problem behavior associated with changes in routine.',
  },
  {
    id: 'q084',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    question: 'An RBT gives a client a 2-minute warning before transitioning from a preferred activity to a non-preferred activity. This is an example of:',
    options: [
      'A consequence-based intervention',
      'Punishment',
      'An antecedent-based intervention',
      'Response blocking',
    ],
    correctIndex: 2,
    explanation:
      'A transition warning is an antecedent-based intervention because it occurs before the transition (and any potential problem behavior) to help the client prepare for the upcoming change.',
  },

  // C-04: Implement differential reinforcement procedures to reduce behavior
  {
    id: 'q085',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'When using DRA to reduce a problem behavior, which component is essential?',
    options: [
      'Punishing the problem behavior every time it occurs',
      'Reinforcing the alternative behavior AND withholding reinforcement for the problem behavior',
      'Only reinforcing the alternative behavior during structured sessions',
      'Allowing the problem behavior to continue without intervention',
    ],
    correctIndex: 1,
    explanation:
      'Effective DRA requires both reinforcing the appropriate alternative behavior and placing the problem behavior on extinction. Without the extinction component, the problem behavior may persist alongside the alternative.',
  },
  {
    id: 'q086',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'An extinction burst is:',
    options: [
      'A permanent increase in the problem behavior',
      'A temporary increase in the frequency, duration, or intensity of the problem behavior when reinforcement is first withheld',
      'A decrease in the problem behavior immediately after extinction is implemented',
      'The behavior completely stopping after one session of extinction',
    ],
    correctIndex: 1,
    explanation:
      'An extinction burst is a temporary increase in the frequency, duration, or intensity of a behavior when the reinforcer that previously maintained it is no longer provided. It is a predictable phenomenon that typically decreases over time.',
  },
  {
    id: 'q087',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'A client bangs the table to get staff attention. The BCBA writes a plan to teach the client to tap the staff member\'s shoulder instead and to ignore table-banging. This is an example of:',
    options: [
      'DRO',
      'DRI',
      'DRA',
      'DRL',
    ],
    correctIndex: 2,
    explanation:
      'This is DRA (Differential Reinforcement of Alternative behavior) because a specific, appropriate alternative behavior (tapping the shoulder) is being reinforced while the problem behavior (table-banging) is placed on extinction.',
  },
  {
    id: 'q088',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'When implementing a DRO procedure, if the problem behavior occurs during the interval:',
    options: [
      'Reinforcement is delivered immediately',
      'The interval timer resets and no reinforcement is delivered',
      'The procedure is discontinued',
      'The interval is shortened to make it easier',
    ],
    correctIndex: 1,
    explanation:
      'In DRO, if the target problem behavior occurs during the interval, the timer is reset to zero and reinforcement is not delivered. Reinforcement is only provided if the behavior does not occur for the entire interval.',
  },

  // ============================================================
  // D. DOCUMENTATION & REPORTING (D-01 through D-05) — ~15 questions
  // ============================================================

  // D-01: Report other variables that might affect the client
  {
    id: 'q089',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-01',
    question: 'The client\'s parent mentions that the client did not sleep well the night before the session. The RBT should:',
    options: [
      'Ignore this information since it is not related to ABA therapy',
      'Cancel the session',
      'Document this information and report it to the supervisor, as it may affect the client\'s behavior during the session',
      'Modify the treatment plan independently based on this information',
    ],
    correctIndex: 2,
    explanation:
      'Variables such as sleep, illness, medication changes, or changes in routine can significantly affect client behavior and should be documented and reported to the supervisor (D-01).',
  },
  {
    id: 'q090',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-01',
    question: 'Which of the following is a variable that an RBT should report to their supervisor?',
    options: [
      'The client\'s family went on vacation last week',
      'The RBT\'s personal schedule conflicts',
      'A change in the client\'s medication reported by the caregiver',
      'The weather forecast for next week',
    ],
    correctIndex: 2,
    explanation:
      'Changes in medication can significantly impact a client\'s behavior, attention, and overall performance. The RBT is responsible for reporting such variables that might affect the client to the supervisor.',
  },
  {
    id: 'q091',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-01',
    question: 'During a session, the RBT notices that the client has a bruise on their arm that was not there before. The RBT should:',
    options: [
      'Ask the client detailed questions about what happened',
      'Document the observation and report it to their supervisor immediately',
      'Confront the caregiver about the bruise',
      'Ignore it and continue the session as planned',
    ],
    correctIndex: 1,
    explanation:
      'The RBT should objectively document what was observed and immediately report it to their supervisor. RBTs are mandated reporters and must report any signs of potential abuse or neglect.',
  },

  // D-02: Generate objective session notes
  {
    id: 'q092',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-02',
    question: 'Which of the following is the BEST example of an objective session note?',
    options: [
      'The client was in a terrible mood today and did not want to cooperate',
      'The client engaged in 5 instances of hitting during the 30-minute session and required full physical prompts for tooth-brushing steps 3 through 6',
      'The client seemed sad and was probably upset about something at home',
      'The session went poorly; the client was being defiant',
    ],
    correctIndex: 1,
    explanation:
      'Objective session notes describe observable, measurable behavior using specific data (e.g., number of instances, prompt levels) without subjective interpretations or emotional labels.',
  },
  {
    id: 'q093',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-02',
    question: 'Session notes should be written:',
    options: [
      'Using subjective interpretations of the client\'s feelings',
      'Several days after the session when the RBT has time',
      'As soon as possible after the session and using objective, measurable language',
      'Only when problem behaviors occur during the session',
    ],
    correctIndex: 2,
    explanation:
      'Session notes should be completed as soon as possible after the session to ensure accuracy and should always use objective, measurable language that describes what was observed.',
  },

  // D-03: Effectively communicate with supervisor
  {
    id: 'q094',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-03',
    question: 'If an RBT is unsure about how to implement a procedure during a session, they should:',
    options: [
      'Try their best guess and inform the supervisor later',
      'Skip that part of the session entirely',
      'Ask the client what they prefer',
      'Contact the supervisor for clarification as soon as possible',
    ],
    correctIndex: 3,
    explanation:
      'When an RBT is unsure about a procedure, they should seek guidance from their supervisor rather than guessing or skipping the procedure. Effective communication with the supervisor (D-03) ensures correct implementation.',
  },
  {
    id: 'q095',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-03',
    question: 'Effective communication between an RBT and their supervisor includes:',
    options: [
      'Only reporting problems when asked during supervision meetings',
      'Providing timely, accurate information about client progress, concerns, and any changes observed',
      'Only communicating when there is a crisis',
      'Sharing client information with other families to get advice',
    ],
    correctIndex: 1,
    explanation:
      'Effective communication with a supervisor involves proactively sharing timely, accurate information about the client, including progress updates, concerns, environmental changes, and any issues with implementation.',
  },

  // D-04: Comply with applicable legal, regulatory, and workplace requirements
  {
    id: 'q096',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-04',
    question: 'HIPAA regulations require that client information:',
    options: [
      'Be shared freely with anyone who asks about the client',
      'Be kept confidential and only disclosed to authorized individuals',
      'Be posted on social media to raise awareness about ABA',
      'Be discussed with other clients in the waiting room',
    ],
    correctIndex: 1,
    explanation:
      'HIPAA (Health Insurance Portability and Accountability Act) requires that all client health information be kept confidential and only disclosed to individuals who are authorized to receive it.',
  },
  {
    id: 'q097',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-04',
    question: 'An RBT is asked by a neighbor about a client they work with. The RBT should:',
    options: [
      'Share general information without using the client\'s name',
      'Confirm they work with the client but not share details',
      'Not confirm or deny working with any client and explain they cannot share client information',
      'Share all information since the neighbor already knows the client',
    ],
    correctIndex: 2,
    explanation:
      'The RBT must maintain client confidentiality at all times. This includes not even confirming or denying that someone is their client, as even acknowledging a therapeutic relationship discloses protected information.',
  },

  // D-05: Comply with requirements for data collection, storage, and transportation
  {
    id: 'q098',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-05',
    question: 'When transporting client data sheets from a session to the office, the RBT should:',
    options: [
      'Leave them on the car seat in plain view',
      'Ensure they are in a secured, closed folder or bag to protect client confidentiality',
      'Take photos of the data and text them to the supervisor',
      'Leave copies at the client\'s home for the parents to review',
    ],
    correctIndex: 1,
    explanation:
      'Client data must be transported securely to protect confidentiality. Using a closed folder or secure bag ensures compliance with data storage and transportation requirements (D-05).',
  },
  {
    id: 'q099',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-05',
    question: 'Client session data should be stored:',
    options: [
      'In the RBT\'s personal social media files for easy access',
      'On an unsecured USB drive',
      'In a secure location as specified by the organization\'s policies',
      'In the RBT\'s personal diary',
    ],
    correctIndex: 2,
    explanation:
      'Client data must be stored in a secure location that complies with the organization\'s policies and applicable regulations (such as HIPAA) to maintain confidentiality and protect client information.',
  },
  {
    id: 'q100',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-02',
    question: 'Which of the following should be included in a session note?',
    options: [
      'The RBT\'s personal feelings about the session',
      'Data on target behaviors, prompting levels used, and any notable environmental events',
      'The client\'s medical diagnosis and prognosis',
      'Predictions about the client\'s future behavior',
    ],
    correctIndex: 1,
    explanation:
      'Session notes should include objective data on target behaviors, the prompt levels used, any reinforcers delivered, and notable environmental events or changes. They should not include subjective feelings or predictions.',
  },
  {
    id: 'q101',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-01',
    question: 'A caregiver tells the RBT that the client\'s routine was disrupted due to a family emergency. The RBT should:',
    options: [
      'Ask for detailed personal information about the emergency',
      'Document that a routine disruption was reported and notify the supervisor',
      'Dismiss this information as irrelevant to therapy',
      'Adjust the behavior plan based on this information without consulting the supervisor',
    ],
    correctIndex: 1,
    explanation:
      'Routine disruptions can impact client behavior during sessions. The RBT should document the relevant information (that a routine change occurred) and report it to the supervisor without prying into personal details.',
  },

  // ============================================================
  // E. PROFESSIONAL CONDUCT & SCOPE OF PRACTICE (E-01 through E-10) — ~20 questions
  // ============================================================

  // E-01: Effectively communicate with supervisor
  {
    id: 'q102',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-01',
    question: 'An RBT notices that a particular intervention does not seem to be working after several sessions. The BEST course of action is to:',
    options: [
      'Modify the intervention based on their own judgment',
      'Stop implementing the intervention without telling anyone',
      'Communicate the concern to their supervisor with supporting data',
      'Tell the client\'s family that the BCBA created a bad plan',
    ],
    correctIndex: 2,
    explanation:
      'When an RBT has concerns about the effectiveness of an intervention, they should communicate those concerns to their supervisor along with relevant data, rather than making independent changes or criticizing the plan to others.',
  },

  // E-02: Actively seek clinical direction from supervisor
  {
    id: 'q103',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-02',
    question: 'Actively seeking clinical direction from a supervisor means:',
    options: [
      'Waiting for the supervisor to provide all instructions without asking questions',
      'Proactively requesting feedback, asking questions, and seeking guidance on clinical matters',
      'Only reaching out to the supervisor during scheduled supervision meetings',
      'Making clinical decisions independently and informing the supervisor afterward',
    ],
    correctIndex: 1,
    explanation:
      'Actively seeking clinical direction (E-02) involves proactively reaching out to the supervisor for guidance, asking questions about procedures, and requesting feedback on performance, not just waiting passively.',
  },
  {
    id: 'q104',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-02',
    question: 'During a session, the client engages in a new behavior the RBT has never seen before. The RBT should:',
    options: [
      'Implement a new intervention to address the behavior',
      'Ignore the behavior since it is not in the treatment plan',
      'Document the behavior and seek direction from the supervisor about how to respond',
      'Punish the behavior to prevent it from occurring again',
    ],
    correctIndex: 2,
    explanation:
      'When a new behavior emerges, the RBT should document what was observed and consult the supervisor for guidance rather than independently deciding how to address it, as this is outside the RBT\'s scope.',
  },

  // E-03: Report concerns about the right to effective treatment
  {
    id: 'q105',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-03',
    question: 'If an RBT believes that a client is not receiving effective treatment, they should:',
    options: [
      'Discuss their concerns directly with the client\'s family and suggest a different provider',
      'Report their concerns to their supervisor through the appropriate channels',
      'Post about their concerns on social media to raise awareness',
      'Contact the client\'s insurance company directly',
    ],
    correctIndex: 1,
    explanation:
      'Every client has the right to effective treatment. If an RBT has concerns about the quality or effectiveness of treatment, they should report these concerns through the appropriate organizational channels, starting with their supervisor.',
  },

  // E-04: Maintain client dignity
  {
    id: 'q106',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-04',
    question: 'Which of the following is an example of maintaining client dignity?',
    options: [
      'Discussing the client\'s problem behaviors loudly in a public setting',
      'Speaking about the client in a respectful manner and ensuring privacy during personal care routines',
      'Making decisions about the client without considering their preferences',
      'Sharing the client\'s progress on social media with identifying information',
    ],
    correctIndex: 1,
    explanation:
      'Maintaining client dignity involves treating the client with respect, ensuring privacy during sensitive activities, using respectful language, and considering the client\'s preferences and autonomy.',
  },
  {
    id: 'q107',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-04',
    question: 'An RBT is working with an adult client on toileting skills. To maintain the client\'s dignity, the RBT should:',
    options: [
      'Discuss the client\'s toileting accidents with other staff in the break room',
      'Conduct toileting programs in a private location and discuss progress only with authorized individuals',
      'Allow anyone in the room during toileting routines for safety',
      'Use infantilizing language when talking to the adult client',
    ],
    correctIndex: 1,
    explanation:
      'Maintaining client dignity requires ensuring privacy during personal care routines, using age-appropriate language, and only discussing sensitive information with authorized individuals.',
  },

  // E-05: Maintain professional boundaries
  {
    id: 'q108',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-05',
    question: 'Which of the following is an example of a professional boundary violation?',
    options: [
      'Referring a client\'s family to community resources suggested by the BCBA',
      'Accepting an expensive gift from a client\'s family',
      'Maintaining a professional tone during sessions',
      'Arriving on time for scheduled sessions',
    ],
    correctIndex: 1,
    explanation:
      'Accepting expensive gifts from clients or their families constitutes a boundary violation because it creates a dual relationship that could compromise the professional relationship and objectivity.',
  },
  {
    id: 'q109',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-05',
    question: 'A client\'s mother asks the RBT to babysit her children on the weekend for extra money. The RBT should:',
    options: [
      'Accept the offer since they already know the family',
      'Decline the offer because it would create a dual relationship that crosses professional boundaries',
      'Accept only if the BCBA is not informed',
      'Accept as long as they do not discuss therapy topics',
    ],
    correctIndex: 1,
    explanation:
      'RBTs must maintain professional boundaries (E-05) and avoid dual relationships such as providing personal services like babysitting. These relationships can compromise the therapeutic relationship and professional objectivity.',
  },
  {
    id: 'q110',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-05',
    question: 'A client\'s parent sends the RBT a friend request on social media. The RBT should:',
    options: [
      'Accept the request to build rapport with the family',
      'Accept only if they use a separate personal account',
      'Decline the request to maintain professional boundaries',
      'Accept and use it to communicate about sessions',
    ],
    correctIndex: 2,
    explanation:
      'Maintaining professional boundaries includes keeping personal and professional relationships separate. Accepting social media friend requests from clients or their families creates a dual relationship.',
  },

  // E-06: Actively seek technical and professional development
  {
    id: 'q111',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-06',
    question: 'An RBT is expected to maintain their certification by:',
    options: [
      'Only completing their initial training and never seeking further development',
      'Completing ongoing continuing education and meeting renewal requirements set by the BACB',
      'Waiting for their supervisor to schedule all training for them',
      'Relying solely on on-the-job experience without formal continuing education',
    ],
    correctIndex: 1,
    explanation:
      'RBTs must actively seek professional development by completing continuing education requirements and meeting all certification renewal requirements established by the BACB.',
  },

  // E-07: Comply with legal, regulatory, and workplace requirements for data
  {
    id: 'q112',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-07',
    question: 'An RBT accidentally sends a client\'s data to the wrong email address. The RBT should:',
    options: [
      'Delete the email and pretend it did not happen',
      'Wait to see if anyone notices',
      'Immediately notify their supervisor and follow the organization\'s protocol for data breaches',
      'Contact the wrong recipient personally and ask them to delete the email',
    ],
    correctIndex: 2,
    explanation:
      'Accidentally sharing client data constitutes a potential data breach. The RBT must immediately notify their supervisor and follow the organization\'s established protocols for handling such incidents.',
  },

  // E-08: Identify and report need for additional services
  {
    id: 'q113',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-08',
    question: 'During a session, the RBT notices the client is having significant difficulty with speech sounds that appear unrelated to the ABA program. The RBT should:',
    options: [
      'Begin speech therapy exercises with the client',
      'Report the observation to their supervisor so the supervisor can consider whether a referral for speech-language services is warranted',
      'Diagnose the client with a speech disorder',
      'Inform the parents that their child needs speech therapy',
    ],
    correctIndex: 1,
    explanation:
      'The RBT should report observations that suggest the need for additional services (E-08) to their supervisor. Making referrals or diagnoses is outside the RBT\'s scope of practice.',
  },
  {
    id: 'q114',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-08',
    question: 'An RBT observes that a client appears to have difficulty seeing materials from a normal distance. The appropriate action is to:',
    options: [
      'Move all materials closer and adjust the program independently',
      'Recommend specific eye doctors to the family',
      'Report the observation to their supervisor so appropriate referrals can be considered',
      'Conduct a vision screening during the session',
    ],
    correctIndex: 2,
    explanation:
      'If an RBT observes signs that a client may need services outside of ABA (such as vision screening), they should report these observations to their supervisor. Making diagnoses or direct referrals is outside the RBT\'s scope.',
  },

  // E-09: Respond appropriately to feedback
  {
    id: 'q115',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-09',
    question: 'During a supervision meeting, the BCBA provides feedback that the RBT\'s prompt fading is too slow. The RBT should:',
    options: [
      'Argue with the BCBA and defend their approach',
      'Ignore the feedback and continue with the same approach',
      'Listen to the feedback, ask clarifying questions if needed, and adjust their implementation accordingly',
      'Complain to other RBTs about the supervisor',
    ],
    correctIndex: 2,
    explanation:
      'RBTs should respond to feedback professionally (E-09) by listening, asking clarifying questions, and making the recommended changes to improve their performance.',
  },
  {
    id: 'q116',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-09',
    question: 'An RBT receives written feedback that they need to improve their data collection accuracy. The BEST response is to:',
    options: [
      'Review the feedback, practice the correct procedures, and request follow-up observation from the supervisor',
      'Ignore the written feedback since it was not given verbally',
      'Argue that their data collection is already accurate',
      'Stop collecting data until the supervisor demonstrates the correct way',
    ],
    correctIndex: 0,
    explanation:
      'Responding appropriately to feedback includes reviewing the feedback, making efforts to improve the identified area, and seeking additional support or follow-up to ensure the improvements are on track.',
  },

  // E-10: Identify potential sources of harm
  {
    id: 'q117',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-10',
    question: 'An RBT arrives at a client\'s home and notices an unsecured firearm on the table. The RBT should:',
    options: [
      'Move the firearm to a safe location themselves',
      'Ignore it and begin the session',
      'Immediately report the safety concern to their supervisor and refrain from conducting the session until the hazard is addressed',
      'Take a photo of the firearm and post it online',
    ],
    correctIndex: 2,
    explanation:
      'The RBT must identify and communicate potential sources of harm to the client (E-10). An unsecured firearm is a serious safety hazard that should be immediately reported to the supervisor, and the session should not proceed until the hazard is resolved.',
  },
  {
    id: 'q118',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-10',
    question: 'Which of the following is an example of a potential source of harm that an RBT should report?',
    options: [
      'The client\'s favorite toy is broken',
      'The therapy room is slightly warm',
      'The client has unexplained injuries and the caregiver becomes evasive when asked about them',
      'The client prefers a different reinforcer than what is listed in the plan',
    ],
    correctIndex: 2,
    explanation:
      'Unexplained injuries combined with evasive caregiver behavior may indicate abuse or neglect, which is a potential source of harm that must be reported to the supervisor and appropriate authorities as mandated by law.',
  },
  {
    id: 'q119',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-10',
    question: 'An RBT observes that another staff member is using a procedure that is not part of the client\'s behavior plan and could potentially harm the client. The RBT should:',
    options: [
      'Ignore it since it is not their responsibility',
      'Report the observation to their supervisor immediately',
      'Confront the staff member aggressively',
      'Post about the situation on social media',
    ],
    correctIndex: 1,
    explanation:
      'If an RBT observes practices that could be harmful to the client, they have a responsibility to report the situation to their supervisor. Protecting the client from potential harm is a core ethical obligation.',
  },

  // Additional E questions
  {
    id: 'q120',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-03',
    question: 'A client\'s parent asks the RBT whether their child should be taking a specific medication. The RBT should:',
    options: [
      'Recommend the medication based on their personal research',
      'Explain that medication recommendations are outside their scope of practice and suggest they consult their physician',
      'Tell the parent that medication is never appropriate',
      'Research the medication online and share their findings with the parent',
    ],
    correctIndex: 1,
    explanation:
      'Medication recommendations are outside the scope of practice for an RBT. The RBT should direct the parent to speak with their physician or other qualified medical professional about medication questions.',
  },
  {
    id: 'q121',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-04',
    question: 'When working with a client in a community setting, the RBT should:',
    options: [
      'Loudly announce to bystanders that they are providing ABA therapy',
      'Protect the client\'s privacy by not disclosing the nature of the therapeutic relationship to others',
      'Wear a large name badge that identifies the client\'s diagnosis',
      'Discuss the client\'s behavioral challenges with store employees',
    ],
    correctIndex: 1,
    explanation:
      'Maintaining client dignity in community settings includes protecting the client\'s privacy by not disclosing therapeutic information to bystanders, which preserves the client\'s right to confidentiality and dignity.',
  },
  {
    id: 'q122',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-06',
    question: 'Which of the following demonstrates actively seeking professional development?',
    options: [
      'Only attending trainings when mandated by the employer',
      'Attending workshops, reading relevant literature, and requesting additional supervision opportunities to improve skills',
      'Avoiding new information because the initial training was sufficient',
      'Relying exclusively on YouTube videos for clinical training',
    ],
    correctIndex: 1,
    explanation:
      'Actively seeking professional development (E-06) involves taking initiative to improve one\'s skills through workshops, professional literature, additional supervision, and other evidence-based learning opportunities.',
  },
  {
    id: 'q123',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-01',
    question: 'An RBT disagrees with a procedure in the behavior plan. The MOST appropriate action is to:',
    options: [
      'Refuse to implement the procedure without telling anyone',
      'Implement the procedure as written while discussing their concerns with their supervisor at the appropriate time',
      'Modify the procedure according to their own preference',
      'Tell the client\'s parent that the procedure is wrong',
    ],
    correctIndex: 1,
    explanation:
      'The RBT should implement the plan as written by the BCBA (it is within the BCBA\'s scope to design treatment plans) while communicating any concerns to the supervisor through appropriate professional channels.',
  },

  // ============================================================
  // A. MEASUREMENT — Additional Questions (q124–q148)
  // ============================================================

  // A-01: Prepare for data collection
  {
    id: 'q124',
    category: 'A. Measurement',
    taskCode: 'A-01',
    question: 'An RBT arrives at a client\'s home and discovers that the data sheets are missing from the session binder. The MOST appropriate action is to:',
    options: [
      'Skip data collection for the session and rely on memory',
      'Create a makeshift data sheet or contact the supervisor to obtain the correct form before starting the session',
      'Use the previous session\'s data sheet and write over it',
      'Cancel the session entirely',
    ],
    correctIndex: 1,
    explanation:
      'Preparing for data collection (A-01) means ensuring materials are available. If data sheets are missing, the RBT should problem-solve by recreating the form or contacting the supervisor rather than skipping data collection or canceling.',
  },

  // A-02: Implement continuous measurement procedures
  {
    id: 'q125',
    category: 'A. Measurement',
    taskCode: 'A-02',
    question: 'What is the key difference between rate and frequency?',
    options: [
      'They are exactly the same thing',
      'Frequency is the count of occurrences; rate is frequency divided by the observation time',
      'Rate is the count of occurrences; frequency is rate divided by time',
      'Frequency is used only for duration-based behaviors',
    ],
    correctIndex: 1,
    explanation:
      'Frequency is the simple count of how many times a behavior occurs. Rate standardizes frequency by dividing it by the observation time, allowing comparison across sessions of different lengths.',
  },
  {
    id: 'q126',
    category: 'A. Measurement',
    taskCode: 'A-02',
    question: 'A BCBA wants to measure how long a client engages in tantrum behavior each session. Which continuous measurement procedure is MOST appropriate?',
    options: [
      'Frequency recording',
      'Latency recording',
      'Duration recording',
      'Momentary time sampling',
    ],
    correctIndex: 2,
    explanation:
      'Duration recording measures the total amount of time a behavior occurs and is most appropriate when the concern is how long the behavior lasts rather than how many times it occurs.',
  },
  {
    id: 'q127',
    category: 'A. Measurement',
    taskCode: 'A-02',
    question: 'A teacher wants to know the amount of time between each instance of a student raising their hand. Which measurement procedure should be used?',
    options: [
      'Latency recording',
      'Duration recording',
      'Interresponse time (IRT)',
      'Frequency recording',
    ],
    correctIndex: 2,
    explanation:
      'Interresponse time (IRT) measures the elapsed time between two consecutive instances of the same behavior. Latency, by contrast, measures time from a stimulus to the onset of behavior.',
  },
  {
    id: 'q128',
    category: 'A. Measurement',
    taskCode: 'A-02',
    question: 'An RBT starts a timer when the instruction "Sit down" is given and stops the timer when the child sits. What is being measured?',
    options: [
      'Duration',
      'Interresponse time',
      'Latency',
      'Frequency',
    ],
    correctIndex: 2,
    explanation:
      'Latency is the time from the onset of a stimulus (the instruction) to the initiation of the response (sitting). This is different from duration, which measures how long the behavior itself lasts.',
  },

  // A-03: Implement discontinuous measurement procedures
  {
    id: 'q129',
    category: 'A. Measurement',
    taskCode: 'A-03',
    question: 'Which discontinuous measurement procedure tends to OVERESTIMATE the occurrence of behavior?',
    options: [
      'Whole interval recording',
      'Partial interval recording',
      'Momentary time sampling',
      'Duration recording',
    ],
    correctIndex: 1,
    explanation:
      'Partial interval recording scores the behavior as occurring if it happens at any point during the interval, even briefly. This tends to overestimate the actual occurrence of the behavior.',
  },
  {
    id: 'q130',
    category: 'A. Measurement',
    taskCode: 'A-03',
    question: 'A teacher sets a timer for every 5 minutes and at the moment the timer goes off, checks whether the student is on-task. This is an example of:',
    options: [
      'Whole interval recording',
      'Partial interval recording',
      'Momentary time sampling',
      'Continuous recording',
    ],
    correctIndex: 2,
    explanation:
      'Momentary time sampling involves observing at the exact moment the interval ends and recording whether the behavior is occurring at that instant. It is practical for monitoring behavior in classroom settings.',
  },
  {
    id: 'q131',
    category: 'A. Measurement',
    taskCode: 'A-03',
    question: 'Whole interval recording tends to underestimate behavior occurrence because:',
    options: [
      'It only records behavior at the end of the interval',
      'The behavior must occur for the ENTIRE interval to be scored as occurring',
      'It requires the observer to count every instance',
      'It only counts the first occurrence in each interval',
    ],
    correctIndex: 1,
    explanation:
      'Whole interval recording requires the behavior to occur throughout the entire interval to be scored as present. If the behavior stops even briefly, the interval is scored as non-occurring, leading to underestimation.',
  },

  // A-04: Implement permanent product recording
  {
    id: 'q132',
    category: 'A. Measurement',
    taskCode: 'A-04',
    question: 'An RBT counts the number of broken crayons found on the floor after a session as a measure of destructive behavior. This is an example of:',
    options: [
      'Frequency recording',
      'Permanent product recording',
      'Partial interval recording',
      'Latency recording',
    ],
    correctIndex: 1,
    explanation:
      'Permanent product recording measures the tangible outcomes or results of a behavior after it has occurred. Broken crayons are a lasting product of the destructive behavior.',
  },
  {
    id: 'q133',
    category: 'A. Measurement',
    taskCode: 'A-04',
    question: 'Which is an advantage of permanent product recording over direct observation?',
    options: [
      'It always provides more accurate data',
      'The observer does not need to be present when the behavior occurs',
      'It works for all types of behavior',
      'It eliminates the need for operational definitions',
    ],
    correctIndex: 1,
    explanation:
      'A key advantage of permanent product recording is that the observer does not need to be present when the behavior occurs. The product (e.g., completed worksheets, broken items) can be measured after the fact.',
  },

  // A-05: Enter data and update graphs
  {
    id: 'q134',
    category: 'A. Measurement',
    taskCode: 'A-05',
    question: 'Two observers record data during the same session. Observer A records 8 instances and Observer B records 10 instances of the target behavior. Using the total count IOA method, what is the IOA?',
    options: [
      '90%',
      '80%',
      '18%',
      '125%',
    ],
    correctIndex: 1,
    explanation:
      'Total count IOA is calculated by dividing the smaller count by the larger count and multiplying by 100: (8/10) x 100 = 80%.',
  },
  {
    id: 'q135',
    category: 'A. Measurement',
    taskCode: 'A-05',
    question: 'Why is interobserver agreement (IOA) important in ABA?',
    options: [
      'It replaces the need for operational definitions',
      'It confirms that the measurement system is reliable and that observers are recording consistently',
      'It determines the function of behavior',
      'It is required before every session',
    ],
    correctIndex: 1,
    explanation:
      'IOA is important because it provides evidence that the measurement system is reliable. High IOA indicates that the behavior is well-defined and that observers are applying the definition consistently.',
  },

  // A-06: Describe behavior and environment in observable/measurable terms
  {
    id: 'q136',
    category: 'A. Measurement',
    taskCode: 'A-06',
    question: 'Which of the following is NOT an operational definition?',
    options: [
      'Hitting is defined as making forceful contact with an open or closed hand to another person\'s body',
      'The student is angry',
      'Elopement is leaving the designated area without permission by moving more than 3 feet beyond the boundary',
      'On-task behavior is defined as eyes oriented toward instructional materials within 3 seconds of the instruction',
    ],
    correctIndex: 1,
    explanation:
      '"The student is angry" is a subjective label describing an internal state, not an observable and measurable description of behavior. Operational definitions must describe what the behavior looks like in objective terms.',
  },
  {
    id: 'q137',
    category: 'A. Measurement',
    taskCode: 'A-06',
    question: 'The "dead man\'s test" states that if a dead man can do it, it is NOT behavior. Which of the following FAILS the dead man\'s test?',
    options: [
      'Sitting quietly in a chair',
      'Raising a hand to answer a question',
      'Completing math problems on a worksheet',
      'Saying "please" before making a request',
    ],
    correctIndex: 0,
    explanation:
      'Sitting quietly fails the dead man\'s test because a dead man could also "sit quietly." It describes the absence of behavior rather than an active behavior. The other options all require active responding.',
  },
  {
    id: 'q138',
    category: 'A. Measurement',
    taskCode: 'A-06',
    question: 'An RBT is asked to write an operational definition for "aggression." Which is the BEST example?',
    options: [
      'Being mean to others',
      'Any instance of hitting, kicking, biting, or scratching another person with sufficient force to leave a mark or cause the other person to cry out',
      'Acting out during sessions',
      'Having aggressive tendencies',
    ],
    correctIndex: 1,
    explanation:
      'A good operational definition includes specific, observable topographies of the behavior (hitting, kicking, biting, scratching) and measurable criteria (sufficient force to leave a mark or cause audible distress).',
  },

  // A-07: Describe the functions and components of a graph
  {
    id: 'q139',
    category: 'A. Measurement',
    taskCode: 'A-07',
    question: 'What does a trend line on a graph show?',
    options: [
      'The average of all data points',
      'The overall direction of the data (increasing, decreasing, or stable) over time',
      'The highest data point in the series',
      'The difference between baseline and intervention',
    ],
    correctIndex: 1,
    explanation:
      'A trend line summarizes the overall direction or pattern of data over time—whether the behavior is increasing, decreasing, or remaining relatively stable.',
  },
  {
    id: 'q140',
    category: 'A. Measurement',
    taskCode: 'A-07',
    question: 'An RBT examines a graph and sees that data points are progressively moving upward across sessions during a skill acquisition program. This indicates:',
    options: [
      'The behavior is decreasing',
      'The data is variable with no clear pattern',
      'There is an increasing trend, suggesting the intervention may be effective',
      'The baseline was unstable',
    ],
    correctIndex: 2,
    explanation:
      'An increasing trend in a skill acquisition program indicates that the target skill is being learned, suggesting the intervention may be effective. The RBT should report this to the supervisor.',
  },
  {
    id: 'q141',
    category: 'A. Measurement',
    taskCode: 'A-07',
    question: 'A phase change line on a graph indicates:',
    options: [
      'A change in the observer collecting data',
      'A change in conditions, such as moving from baseline to intervention',
      'That data collection was paused',
      'The point at which the client met mastery criteria',
    ],
    correctIndex: 1,
    explanation:
      'A phase change line is a vertical dashed or solid line on a graph that indicates a change in conditions, such as the transition from baseline to intervention or from one intervention to another.',
  },
  {
    id: 'q142',
    category: 'A. Measurement',
    taskCode: 'A-01',
    question: 'A scatterplot assessment is used to:',
    options: [
      'Measure the duration of a behavior',
      'Identify patterns in behavior occurrence across specific times of day',
      'Calculate interobserver agreement',
      'Determine the topography of a behavior',
    ],
    correctIndex: 1,
    explanation:
      'A scatterplot is a data collection tool that helps identify temporal patterns by recording whether a behavior occurs during specific time blocks throughout the day, aiding in identifying potential environmental variables.',
  },
  {
    id: 'q143',
    category: 'A. Measurement',
    taskCode: 'A-02',
    question: 'Why might a BCBA ask an RBT to convert frequency data to rate?',
    options: [
      'Rate data is easier to collect',
      'To allow accurate comparison across sessions of different lengths',
      'Frequency data is unreliable',
      'Rate eliminates the need for graphing',
    ],
    correctIndex: 1,
    explanation:
      'Converting frequency to rate (count per unit time) is essential when sessions vary in length. A child who hits 5 times in a 30-minute session has a different rate than 5 times in a 2-hour session.',
  },
  {
    id: 'q144',
    category: 'A. Measurement',
    taskCode: 'A-03',
    question: 'A teacher needs a practical way to track whether a student is on-task during independent work time. Which method is MOST appropriate?',
    options: [
      'Continuous frequency recording',
      'Duration recording',
      'Momentary time sampling',
      'Interresponse time recording',
    ],
    correctIndex: 2,
    explanation:
      'Momentary time sampling is practical for classroom settings because the teacher only needs to observe at specific moments, allowing them to continue teaching while still collecting data on on-task behavior.',
  },
  {
    id: 'q145',
    category: 'A. Measurement',
    taskCode: 'A-06',
    question: 'A behavior analyst defines "disruptive behavior" as any instance of yelling, throwing objects, or knocking furniture over. This group of behaviors forms a:',
    options: [
      'Behavioral cusp',
      'Response class',
      'Stimulus class',
      'Behavior chain',
    ],
    correctIndex: 1,
    explanation:
      'A response class is a group of topographically different behaviors that are all maintained by the same consequence or serve the same function. Including multiple topographies in one definition captures the full response class.',
  },
  {
    id: 'q146',
    category: 'A. Measurement',
    taskCode: 'A-01',
    question: 'An RBT collects data by recording what happened before, during, and after a behavior. This is an example of:',
    options: [
      'Duration recording',
      'Interval recording',
      'ABC (Antecedent-Behavior-Consequence) data collection',
      'Permanent product recording',
    ],
    correctIndex: 2,
    explanation:
      'ABC data collection involves recording the antecedent (what happened before), the behavior, and the consequence (what happened after). This descriptive assessment helps identify potential functions of behavior.',
  },
  {
    id: 'q147',
    category: 'A. Measurement',
    taskCode: 'A-07',
    question: 'Why is it important to have a stable baseline before introducing an intervention?',
    options: [
      'It is a legal requirement',
      'A stable baseline allows for meaningful comparison to determine whether the intervention caused a change in behavior',
      'Baselines must always be at zero',
      'It makes the graph look more professional',
    ],
    correctIndex: 1,
    explanation:
      'A stable baseline provides a clear picture of the behavior before intervention, allowing analysts to determine whether changes in behavior are due to the intervention rather than natural variability.',
  },
  {
    id: 'q148',
    category: 'A. Measurement',
    taskCode: 'A-05',
    question: 'When should data be graphed?',
    options: [
      'Only at the end of the month',
      'Only when the supervisor requests it',
      'As soon as possible after each session to allow for timely data-based decisions',
      'Only when there is a noticeable change in behavior',
    ],
    correctIndex: 2,
    explanation:
      'Data should be graphed promptly after each session so that trends, variability, and level changes can be identified quickly, allowing the supervisor to make timely data-based decisions about the intervention.',
  },

  // ============================================================
  // B. SKILL ACQUISITION — Additional Questions (q149–q228)
  // ============================================================

  // B-01: Identify components of a skill acquisition plan
  {
    id: 'q149',
    category: 'B. Skill Acquisition',
    taskCode: 'B-01',
    question: 'Treatment fidelity refers to:',
    options: [
      'The degree to which a client enjoys the intervention',
      'The degree to which a procedure is implemented as designed',
      'The number of hours spent in therapy',
      'The qualifications of the behavior analyst',
    ],
    correctIndex: 1,
    explanation:
      'Treatment fidelity (also called procedural fidelity or treatment integrity) measures how accurately and consistently the intervention is implemented as designed by the BCBA.',
  },
  {
    id: 'q150',
    category: 'B. Skill Acquisition',
    taskCode: 'B-01',
    question: 'An RBT is reviewing a skill acquisition plan and notices it does not include a prompt hierarchy. The BEST action is to:',
    options: [
      'Create their own prompt hierarchy based on experience',
      'Implement the plan without prompting',
      'Ask the supervising BCBA about the missing component before implementing',
      'Copy a prompt hierarchy from another client\'s plan',
    ],
    correctIndex: 2,
    explanation:
      'If a skill acquisition plan is missing a component, the RBT should contact the supervising BCBA for clarification. RBTs should not create or modify plan components independently.',
  },

  // B-02: Prepare for the session as required by the skill acquisition plan
  {
    id: 'q151',
    category: 'B. Skill Acquisition',
    taskCode: 'B-02',
    question: 'An RBT fails to prepare reinforcers and teaching materials before a DTT session begins. What is the MOST likely consequence?',
    options: [
      'The session will be more naturalistic',
      'Session efficiency will decrease due to delays, and learning opportunities may be lost',
      'The client will self-direct their learning',
      'There will be no impact on the session',
    ],
    correctIndex: 1,
    explanation:
      'Failing to prepare materials in advance leads to delays between trials, reduces the number of learning opportunities, and may result in the client losing motivation or engaging in problem behaviors during downtime.',
  },

  // B-03: Use contingencies of reinforcement and punishment
  {
    id: 'q152',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'A child completes a puzzle and receives a sticker. The child continues to complete puzzles in future sessions. The sticker functions as:',
    options: [
      'Negative reinforcement',
      'Positive reinforcement',
      'Positive punishment',
      'An unconditioned stimulus',
    ],
    correctIndex: 1,
    explanation:
      'This is positive reinforcement because something was added (the sticker) following the behavior (completing the puzzle) and the behavior increased in future sessions.',
  },
  {
    id: 'q153',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'A seatbelt buzzer stops when a driver buckles the seatbelt. Buckling behavior increases. This is an example of:',
    options: [
      'Positive reinforcement',
      'Negative reinforcement',
      'Positive punishment',
      'Negative punishment',
    ],
    correctIndex: 1,
    explanation:
      'This is negative reinforcement because something aversive (the buzzer) was removed contingent on the behavior (buckling), and the behavior increased. Negative reinforcement always involves the removal of an aversive stimulus.',
  },
  {
    id: 'q154',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'A child touches a hot stove and gets burned. The child stops touching the stove. This is an example of:',
    options: [
      'Positive reinforcement',
      'Negative reinforcement',
      'Positive punishment',
      'Negative punishment',
    ],
    correctIndex: 2,
    explanation:
      'This is positive punishment because a stimulus (pain from the burn) was added following the behavior (touching the stove) and the behavior decreased.',
  },
  {
    id: 'q155',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'A teenager is caught speeding and loses car privileges for a week. The teenager drives more slowly in the future. This is an example of:',
    options: [
      'Positive reinforcement',
      'Negative reinforcement',
      'Positive punishment',
      'Negative punishment',
    ],
    correctIndex: 3,
    explanation:
      'This is negative punishment because something was removed (car privileges) following the behavior (speeding) and the behavior decreased.',
  },
  {
    id: 'q156',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'On a fixed-ratio (FR) schedule, a common pattern of responding is:',
    options: [
      'A steady, moderate rate of responding',
      'A high rate of responding with a post-reinforcement pause after each reinforcer delivery',
      'Responding only at the end of the interval',
      'Low and variable rates of responding',
    ],
    correctIndex: 1,
    explanation:
      'FR schedules typically produce a post-reinforcement pause (a brief pause after reinforcement is delivered) followed by a high, steady rate of responding until the next reinforcer is earned.',
  },
  {
    id: 'q157',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'A variable-interval (VI) schedule produces:',
    options: [
      'High rates of responding with post-reinforcement pauses',
      'A scalloped pattern of responding',
      'A steady, moderate rate of responding',
      'Responding only when the interval elapses',
    ],
    correctIndex: 2,
    explanation:
      'VI schedules produce a steady, moderate rate of responding because the individual cannot predict when reinforcement will become available, so responding is distributed relatively evenly over time.',
  },
  {
    id: 'q158',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'When teaching a brand new skill, which schedule of reinforcement is MOST appropriate initially?',
    options: [
      'Variable ratio (VR)',
      'Fixed interval (FI)',
      'Continuous reinforcement (CRF)',
      'Variable interval (VI)',
    ],
    correctIndex: 2,
    explanation:
      'Continuous reinforcement (CRF), where every correct response is reinforced, is most appropriate for initial skill acquisition because it helps the learner make the connection between the behavior and the reinforcer quickly.',
  },
  {
    id: 'q159',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'Which schedule of reinforcement produces behavior that is MOST resistant to extinction?',
    options: [
      'Continuous reinforcement (CRF)',
      'Fixed ratio (FR)',
      'Variable ratio (VR)',
      'Fixed interval (FI)',
    ],
    correctIndex: 2,
    explanation:
      'Variable ratio (VR) schedules produce the highest rates of responding and greatest resistance to extinction because the unpredictability of reinforcement makes it difficult for the learner to detect when reinforcement has stopped.',
  },
  {
    id: 'q160',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'On a fixed-interval (FI) schedule, a "scallop" pattern in the data indicates that:',
    options: [
      'Responding increases steadily throughout the interval',
      'Responding is low after reinforcement and accelerates as the end of the interval approaches',
      'Responding is high and constant',
      'The individual has stopped responding',
    ],
    correctIndex: 1,
    explanation:
      'The FI scallop is a characteristic pattern where responding is low immediately after reinforcement and gradually increases as the end of the fixed interval approaches, when reinforcement becomes available again.',
  },
  {
    id: 'q161',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'Which of the following is an unconditioned reinforcer?',
    options: [
      'Money',
      'Praise',
      'Tokens',
      'Food when hungry',
    ],
    correctIndex: 3,
    explanation:
      'Food (when in a state of deprivation) is an unconditioned reinforcer because its reinforcing value does not depend on a learning history. Money, praise, and tokens are all conditioned reinforcers that acquired value through pairing.',
  },
  {
    id: 'q162',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'Which of the following is an example of a generalized conditioned reinforcer?',
    options: [
      'A specific toy that a child prefers',
      'Water when thirsty',
      'Money, because it can be exchanged for a wide variety of backup reinforcers',
      'A favorite food item',
    ],
    correctIndex: 2,
    explanation:
      'A generalized conditioned reinforcer has been paired with multiple backup reinforcers, making it effective across different motivating operations. Money is a classic example because it can be exchanged for many things.',
  },
  {
    id: 'q163',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'A teacher tells a student, "First finish your math worksheet, then you can have free time." This is an example of:',
    options: [
      'Negative reinforcement',
      'The Premack Principle',
      'Response cost',
      'An abolishing operation',
    ],
    correctIndex: 1,
    explanation:
      'The Premack Principle states that a high-probability behavior (free time) can be used to reinforce a low-probability behavior (completing the math worksheet). It is often stated as "First-Then."',
  },
  {
    id: 'q164',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'What is the primary purpose of thinning a reinforcement schedule?',
    options: [
      'To make the behavior disappear',
      'To gradually transition from continuous to intermittent reinforcement to promote maintenance of the behavior',
      'To save money on reinforcers',
      'To test whether the behavior was truly learned',
    ],
    correctIndex: 1,
    explanation:
      'Reinforcement thinning gradually moves from CRF to intermittent schedules so that the behavior becomes more resistant to extinction and more likely to maintain in natural environments where continuous reinforcement is not available.',
  },
  {
    id: 'q165',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'An RBT repeatedly pairs themselves with preferred items and activities during early sessions with a new client. The purpose of this procedure is to:',
    options: [
      'Conduct a preference assessment',
      'Establish themselves as a conditioned reinforcer so the client will be motivated to engage with them',
      'Assess the client\'s problem behaviors',
      'Determine the client\'s skill level',
    ],
    correctIndex: 1,
    explanation:
      'Pairing involves the RBT associating themselves with preferred items and activities so that the RBT becomes a conditioned reinforcer. This builds rapport and increases the client\'s willingness to respond to instructions.',
  },

  // B-04: Implement discrete trial teaching procedures
  {
    id: 'q166',
    category: 'B. Skill Acquisition',
    taskCode: 'B-04',
    question: 'During a DTT session, a child gives an incorrect response. The MOST appropriate error correction procedure is to:',
    options: [
      'Say "No, that\'s wrong" and move on to the next trial',
      'End the session immediately',
      'Provide the correct response (prompt), have the child repeat it, then re-present the trial at a later point to check for independent responding',
      'Allow the child to keep trying until they get it right without assistance',
    ],
    correctIndex: 2,
    explanation:
      'A standard error correction procedure involves providing the correct answer, having the learner practice it, and then re-presenting the discriminative stimulus to assess independent responding. Simply saying "wrong" does not teach the correct response.',
  },
  {
    id: 'q167',
    category: 'B. Skill Acquisition',
    taskCode: 'B-04',
    question: 'The three main components of a discrete trial are:',
    options: [
      'Antecedent, behavior, consequence',
      'Prompt, response, reinforcer',
      'SD (discriminative stimulus), response, consequence/reinforcement',
      'Instruction, model, feedback',
    ],
    correctIndex: 2,
    explanation:
      'A discrete trial consists of three components: the discriminative stimulus (SD) or instruction, the learner\'s response, and the consequence (reinforcement for correct responses or error correction for incorrect ones). An inter-trial interval separates each trial.',
  },
  {
    id: 'q168',
    category: 'B. Skill Acquisition',
    taskCode: 'B-04',
    question: 'During mass trialing in DTT, the same target is presented repeatedly across consecutive trials. A potential drawback of this approach is:',
    options: [
      'It reduces the number of learning opportunities',
      'The learner may begin responding by rote without attending to the SD',
      'It increases prompt dependency',
      'It is too easy for the learner',
    ],
    correctIndex: 1,
    explanation:
      'Mass trialing can lead to rote responding where the learner gives the same answer without actually attending to the discriminative stimulus, because they learn that the same response is always correct in that block.',
  },

  // B-05: Implement naturalistic teaching procedures and behavior momentum
  {
    id: 'q169',
    category: 'B. Skill Acquisition',
    taskCode: 'B-05',
    question: 'A key difference between naturalistic teaching (NET) and discrete trial teaching (DTT) is:',
    options: [
      'NET uses reinforcement and DTT does not',
      'NET follows the child\'s motivation and uses naturally occurring opportunities while DTT is more structured and therapist-directed',
      'DTT is used for language and NET is used for motor skills only',
      'NET does not require data collection',
    ],
    correctIndex: 1,
    explanation:
      'NET capitalizes on the child\'s current motivation and uses natural reinforcers within the context of play or daily routines, while DTT is a structured, therapist-led format with clearly defined trials and often contrived reinforcers.',
  },
  {
    id: 'q170',
    category: 'B. Skill Acquisition',
    taskCode: 'B-05',
    question: 'A BCBA designs a program in which a child watches a video of another child tying their shoes and then practices the skill. This is an example of:',
    options: [
      'Discrete trial teaching',
      'Video modeling',
      'Behavioral momentum',
      'Incidental teaching',
    ],
    correctIndex: 1,
    explanation:
      'Video modeling involves showing a learner a video demonstration of a target behavior and then having them imitate the behavior. It is an evidence-based naturalistic teaching strategy.',
  },
  {
    id: 'q171',
    category: 'B. Skill Acquisition',
    taskCode: 'B-05',
    question: 'An RBT presents three easy requests ("clap your hands," "touch your nose," "stomp your feet") before presenting a more difficult demand ("sit at the table and do your work"). This strategy is called:',
    options: [
      'Errorless teaching',
      'Behavioral momentum (high-probability request sequence)',
      'Shaping',
      'Forward chaining',
    ],
    correctIndex: 1,
    explanation:
      'Behavioral momentum (high-probability request sequence) involves presenting several easy, high-probability requests to build a pattern of compliance before presenting a low-probability (more difficult) demand.',
  },

  // B-06: Implement task analysis and chaining procedures
  {
    id: 'q172',
    category: 'B. Skill Acquisition',
    taskCode: 'B-06',
    question: 'In forward chaining, the learner is taught:',
    options: [
      'The last step first and all preceding steps are completed by the therapist',
      'The first step independently and all subsequent steps are prompted or completed by the therapist',
      'All steps simultaneously with full physical prompts',
      'Only the most difficult step in the chain',
    ],
    correctIndex: 1,
    explanation:
      'In forward chaining, the learner is taught to independently perform the first step of the task analysis while the therapist prompts or completes the remaining steps. Steps are added sequentially from beginning to end.',
  },
  {
    id: 'q173',
    category: 'B. Skill Acquisition',
    taskCode: 'B-06',
    question: 'An RBT teaches a client to wash hands by prompting ALL steps of the task analysis during each session, gradually fading prompts across all steps simultaneously. This is an example of:',
    options: [
      'Forward chaining',
      'Backward chaining',
      'Total task chaining (total task presentation)',
      'Shaping',
    ],
    correctIndex: 2,
    explanation:
      'Total task chaining (total task presentation) involves the learner attempting every step of the task analysis during each session with prompts provided as needed. Prompts are faded across all steps at the same time.',
  },
  {
    id: 'q174',
    category: 'B. Skill Acquisition',
    taskCode: 'B-06',
    question: 'A behavior chain is defined as:',
    options: [
      'A single behavior that occurs in isolation',
      'A sequence of behaviors linked together where each response serves as the SD for the next response and the reinforcer for the previous one',
      'A list of problem behaviors',
      'A schedule of reinforcement',
    ],
    correctIndex: 1,
    explanation:
      'A behavior chain is a specific sequence of stimulus-response links where each response produces the discriminative stimulus for the next response and serves as a conditioned reinforcer for the previous one, with the terminal reinforcer delivered after the last step.',
  },

  // B-07: Implement discrimination training and stimulus control
  {
    id: 'q175',
    category: 'B. Skill Acquisition',
    taskCode: 'B-07',
    question: 'A child says "dog" only when they see a dog and does not say "dog" when they see a cat. The picture of the dog is the:',
    options: [
      'S-delta (S∆)',
      'Motivating operation',
      'Discriminative stimulus (SD)',
      'Conditioned reinforcer',
    ],
    correctIndex: 2,
    explanation:
      'The picture of the dog is the SD (discriminative stimulus) because it signals the availability of reinforcement for saying "dog." The picture of the cat would be the S-delta because saying "dog" in its presence would not be reinforced.',
  },
  {
    id: 'q176',
    category: 'B. Skill Acquisition',
    taskCode: 'B-07',
    question: 'Stimulus control is demonstrated when:',
    options: [
      'A behavior occurs regardless of what stimuli are present',
      'A behavior occurs at a high rate in the presence of a specific stimulus and at a low rate in its absence',
      'The individual needs continuous prompting to perform a skill',
      'A behavior occurs only when reinforcement is visible',
    ],
    correctIndex: 1,
    explanation:
      'Stimulus control exists when a behavior reliably occurs in the presence of a specific stimulus (SD) and does not occur (or occurs at lower rates) in the absence of that stimulus or in the presence of an S-delta.',
  },
  {
    id: 'q177',
    category: 'B. Skill Acquisition',
    taskCode: 'B-07',
    question: 'A child was bitten by a dog and now cries when they see any dog. The crying in the presence of dogs is an example of:',
    options: [
      'Operant conditioning',
      'Respondent (classical) conditioning',
      'Stimulus discrimination',
      'Negative reinforcement',
    ],
    correctIndex: 1,
    explanation:
      'This is respondent conditioning: the dog (previously neutral stimulus) was paired with an aversive event (being bitten) and now elicits a reflexive emotional response (crying). The dog became a conditioned stimulus.',
  },
  {
    id: 'q178',
    category: 'B. Skill Acquisition',
    taskCode: 'B-07',
    question: 'The main difference between respondent and operant conditioning is:',
    options: [
      'Respondent conditioning involves voluntary behavior; operant conditioning involves reflexive behavior',
      'Respondent conditioning involves involuntary/reflexive responses elicited by stimuli; operant conditioning involves voluntary behavior maintained by consequences',
      'There is no difference; they are the same process',
      'Operant conditioning does not involve reinforcement',
    ],
    correctIndex: 1,
    explanation:
      'Respondent conditioning involves pairing stimuli to elicit involuntary, reflexive responses (e.g., salivation, fear). Operant conditioning involves voluntary behaviors that are shaped and maintained by their consequences (reinforcement or punishment).',
  },

  // B-08: Implement prompt and prompt fading procedures
  {
    id: 'q179',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    question: 'In a most-to-least prompt hierarchy, the therapist:',
    options: [
      'Begins with the least intrusive prompt and increases assistance if needed',
      'Begins with the most intrusive prompt and systematically fades to less intrusive prompts as the learner demonstrates competence',
      'Only uses one prompt level throughout the program',
      'Waits for the learner to make an error before prompting',
    ],
    correctIndex: 1,
    explanation:
      'Most-to-least prompting starts with full assistance (e.g., full physical prompt) and systematically fades to less intrusive levels as the learner succeeds, promoting errorless learning.',
  },
  {
    id: 'q180',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    question: 'A therapist uses a full physical prompt on the first trial of a new program to ensure the child responds correctly. This strategy is called:',
    options: [
      'Least-to-most prompting',
      'Errorless learning (errorless teaching)',
      'Trial and error teaching',
      'Incidental teaching',
    ],
    correctIndex: 1,
    explanation:
      'Errorless learning involves using prompts (typically most intrusive) from the outset to prevent errors and ensure the learner contacts reinforcement. This minimizes frustration and incorrect responses during acquisition.',
  },
  {
    id: 'q181',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    question: 'A client can only perform a task when the RBT provides a gestural prompt, even after several weeks of teaching. This is MOST likely a result of:',
    options: [
      'The task being too difficult for the client',
      'Prompt dependency, likely caused by failure to systematically fade prompts',
      'The client choosing not to respond independently',
      'The reinforcer being too strong',
    ],
    correctIndex: 1,
    explanation:
      'Prompt dependency occurs when prompts are not faded systematically and the learner becomes reliant on them. Proper prompt fading procedures should be followed to promote independent responding.',
  },
  {
    id: 'q182',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    question: 'What is the difference between a stimulus prompt and a response prompt?',
    options: [
      'They are the same thing',
      'A stimulus prompt modifies the antecedent materials (e.g., highlighting, color-coding); a response prompt involves the therapist\'s behavior to guide the learner\'s response (e.g., verbal, model, physical)',
      'A response prompt modifies the materials; a stimulus prompt involves the therapist\'s behavior',
      'Stimulus prompts are used for behavior reduction; response prompts are used for skill acquisition',
    ],
    correctIndex: 1,
    explanation:
      'Stimulus prompts alter the SD or instructional materials (e.g., making the correct answer bigger or a different color). Response prompts involve the therapist doing something to help the learner respond (e.g., modeling, physically guiding, verbally cuing).',
  },
  {
    id: 'q183',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    question: 'In progressive time delay, the prompt fading procedure involves:',
    options: [
      'Immediately removing all prompts',
      'Gradually increasing the time between the SD and the delivery of the prompt, giving the learner the opportunity to respond independently',
      'Using a different prompt type each session',
      'Randomly providing prompts on some trials but not others',
    ],
    correctIndex: 1,
    explanation:
      'Progressive time delay starts with a 0-second delay (immediate prompt) and gradually increases the delay between the SD and the prompt, giving the learner progressively more time to respond independently before the prompt is delivered.',
  },

  // B-09: Implement equivalence-based instruction
  {
    id: 'q184',
    category: 'B. Skill Acquisition',
    taskCode: 'B-09',
    question: 'A child is shown a picture of a dog and selects the same picture from an array. This demonstrates which property of stimulus equivalence?',
    options: [
      'Symmetry',
      'Transitivity',
      'Reflexivity',
      'Generalization',
    ],
    correctIndex: 2,
    explanation:
      'Reflexivity (also called identity matching) means that a stimulus is matched to itself (A=A). Selecting the same picture when shown a picture demonstrates that the learner can match a stimulus to an identical stimulus.',
  },
  {
    id: 'q185',
    category: 'B. Skill Acquisition',
    taskCode: 'B-09',
    question: 'A child is taught that A=B (hearing "dog" and selecting a picture of a dog). Without direct training, the child can now do B=A (seeing a picture of a dog and saying "dog"). This demonstrates:',
    options: [
      'Reflexivity',
      'Symmetry',
      'Transitivity',
      'Chaining',
    ],
    correctIndex: 1,
    explanation:
      'Symmetry means that if A=B is trained, then B=A emerges without direct training. The reversibility of the relation demonstrates that the learner understands the stimuli are equivalent.',
  },
  {
    id: 'q186',
    category: 'B. Skill Acquisition',
    taskCode: 'B-09',
    question: 'A child is taught A=B (hearing "dog" → selecting a picture) and B=C (seeing a picture → selecting the written word "dog"). Without direct training, the child can now do A=C (hearing "dog" → selecting the written word). This demonstrates:',
    options: [
      'Reflexivity',
      'Symmetry',
      'Transitivity',
      'Stimulus generalization',
    ],
    correctIndex: 2,
    explanation:
      'Transitivity means that if A=B and B=C are trained, the relation A=C emerges without direct training. This is a powerful outcome of equivalence-based instruction because it produces untrained relations.',
  },

  // B-10: Implement generalization and maintenance procedures
  {
    id: 'q187',
    category: 'B. Skill Acquisition',
    taskCode: 'B-10',
    question: 'Which of the following is a strategy to promote generalization?',
    options: [
      'Always using the same materials and settings',
      'Teaching with only one instructor',
      'Training across multiple settings, people, and materials (training sufficient exemplars)',
      'Only reinforcing the behavior in the training environment',
    ],
    correctIndex: 2,
    explanation:
      'Training with sufficient exemplars involves using multiple instructors, settings, and materials during teaching so the learner can perform the skill across a variety of conditions, not just the training environment.',
  },
  {
    id: 'q188',
    category: 'B. Skill Acquisition',
    taskCode: 'B-10',
    question: 'To promote maintenance of a newly acquired skill, the BCBA instructs the RBT to gradually thin the reinforcement schedule. This means:',
    options: [
      'Stopping reinforcement immediately',
      'Gradually reducing the frequency of reinforcement over time while the learner continues to perform the skill',
      'Switching to punishment',
      'Only reinforcing the skill once a month',
    ],
    correctIndex: 1,
    explanation:
      'Thinning reinforcement involves gradually moving from a continuous schedule to an intermittent schedule. This makes the behavior more resistant to extinction and more similar to natural reinforcement conditions.',
  },
  {
    id: 'q189',
    category: 'B. Skill Acquisition',
    taskCode: 'B-10',
    question: 'What is the difference between stimulus generalization and response generalization?',
    options: [
      'They are the same concept',
      'Stimulus generalization is when a behavior occurs across different settings or stimuli; response generalization is when a trained response leads to the emergence of similar untrained responses',
      'Response generalization requires direct training; stimulus generalization does not',
      'Stimulus generalization only applies to language',
    ],
    correctIndex: 1,
    explanation:
      'Stimulus generalization occurs when a behavior transfers to new stimuli, settings, or people. Response generalization occurs when training one response leads to changes in untrained, functionally similar responses.',
  },
  {
    id: 'q190',
    category: 'B. Skill Acquisition',
    taskCode: 'B-10',
    question: 'In ABA, "fluency" refers to:',
    options: [
      'The ability to speak a second language',
      'Performing a behavior both accurately and at a high rate (combination of accuracy and speed)',
      'The number of times a behavior occurs',
      'The ability to generalize a skill',
    ],
    correctIndex: 1,
    explanation:
      'Fluency is defined as the combination of accuracy and speed. A fluent skill is one that is performed both correctly and quickly, which promotes retention, endurance, and application.',
  },

  // B-11: Implement shaping procedures
  {
    id: 'q191',
    category: 'B. Skill Acquisition',
    taskCode: 'B-11',
    question: 'The key difference between shaping and chaining is:',
    options: [
      'Shaping teaches a chain of behaviors; chaining reinforces successive approximations',
      'Shaping reinforces successive approximations toward a single target behavior; chaining links multiple distinct behaviors in a sequence',
      'There is no difference',
      'Chaining is used for new behaviors; shaping is used for existing behaviors',
    ],
    correctIndex: 1,
    explanation:
      'Shaping involves differentially reinforcing closer and closer approximations to a single target behavior. Chaining involves linking multiple discrete behaviors together in a sequence to form a complex skill.',
  },
  {
    id: 'q192',
    category: 'B. Skill Acquisition',
    taskCode: 'B-11',
    question: 'A speech therapist reinforces a child for saying "ba," then requires "bah," then "bahl," and finally "ball" before delivering reinforcement. This is an example of:',
    options: [
      'Forward chaining',
      'Shaping through reinforcement of successive approximations',
      'Discrimination training',
      'Fading',
    ],
    correctIndex: 1,
    explanation:
      'This is shaping because the therapist is reinforcing progressively closer approximations to the target response ("ball"). Each successive approximation is reinforced until the next criterion is met.',
  },
  {
    id: 'q193',
    category: 'B. Skill Acquisition',
    taskCode: 'B-11',
    question: 'Shaping is MOST appropriate when:',
    options: [
      'The target behavior already exists in the learner\'s repertoire',
      'The target behavior does not currently exist in the learner\'s repertoire and cannot be prompted',
      'The learner can already perform the behavior but does so infrequently',
      'The behavior is part of a chain',
    ],
    correctIndex: 1,
    explanation:
      'Shaping is used when the target behavior is not yet in the learner\'s repertoire and cannot simply be prompted. By reinforcing successive approximations, a new behavior is gradually built from existing behaviors.',
  },

  // B-12: Implement token economy procedures
  {
    id: 'q194',
    category: 'B. Skill Acquisition',
    taskCode: 'B-12',
    question: 'A token economy system includes which essential components?',
    options: [
      'Only tokens and a target behavior',
      'Tokens, a list of target behaviors that earn tokens, a menu of backup reinforcers, and an exchange ratio',
      'Only backup reinforcers and a data sheet',
      'A timer and a set of rules',
    ],
    correctIndex: 1,
    explanation:
      'A token economy requires clearly defined target behaviors, tokens that are delivered contingent on those behaviors, a menu of backup reinforcers, and a specified exchange ratio (how many tokens are needed to earn each backup reinforcer).',
  },
  {
    id: 'q195',
    category: 'B. Skill Acquisition',
    taskCode: 'B-12',
    question: 'A student earns 10 tokens during class but loses 2 tokens for talking out of turn. This loss of tokens is an example of:',
    options: [
      'Extinction',
      'Negative reinforcement',
      'Response cost (a type of negative punishment)',
      'Overcorrection',
    ],
    correctIndex: 2,
    explanation:
      'Response cost is a negative punishment procedure in which a specified amount of a reinforcer (tokens, points, privileges) is removed contingent on the occurrence of an undesired behavior, which decreases that behavior.',
  },
  {
    id: 'q196',
    category: 'B. Skill Acquisition',
    taskCode: 'B-12',
    question: 'When selecting backup reinforcers for a token economy, it is MOST important to:',
    options: [
      'Choose items that are inexpensive',
      'Use the same reinforcers for all clients',
      'Select items based on a preference assessment and update them regularly to maintain their reinforcing value',
      'Only offer edible reinforcers',
    ],
    correctIndex: 2,
    explanation:
      'Backup reinforcers should be individualized based on preference assessments and updated regularly. Using preferred items ensures the tokens maintain their conditioned reinforcing value.',
  },

  // B-13: Implement differential reinforcement procedures
  {
    id: 'q197',
    category: 'B. Skill Acquisition',
    taskCode: 'B-13',
    question: 'A child screams to get a toy. The BCBA designs a program to teach the child to say "toy please" and reinforces appropriate requests while placing screaming on extinction. This is an example of:',
    options: [
      'DRO (Differential Reinforcement of Other behavior)',
      'DRA (Differential Reinforcement of Alternative behavior) combined with FCT (Functional Communication Training)',
      'DRI (Differential Reinforcement of Incompatible behavior)',
      'DRL (Differential Reinforcement of Low rates)',
    ],
    correctIndex: 1,
    explanation:
      'This is DRA because an alternative, appropriate behavior (saying "toy please") is being reinforced while the problem behavior (screaming) is placed on extinction. FCT is a specific type of DRA that teaches communication responses.',
  },
  {
    id: 'q198',
    category: 'B. Skill Acquisition',
    taskCode: 'B-13',
    question: 'In a DRO procedure, reinforcement is delivered if the target problem behavior does NOT occur during the entire interval. If the behavior occurs, the interval:',
    options: [
      'Continues as normal',
      'Resets, and the individual must go the full interval length without the behavior before receiving reinforcement',
      'Is shortened to make it easier',
      'Is eliminated and the session ends',
    ],
    correctIndex: 1,
    explanation:
      'In a resetting DRO, when the target behavior occurs during the interval, the timer resets to zero and the individual must go the full interval without the behavior to receive reinforcement.',
  },
  {
    id: 'q199',
    category: 'B. Skill Acquisition',
    taskCode: 'B-13',
    question: 'What is the difference between DRI and DRA?',
    options: [
      'They are the same procedure',
      'DRI reinforces a behavior that is physically incompatible with the target behavior; DRA reinforces any appropriate alternative behavior',
      'DRA reinforces an incompatible behavior; DRI reinforces any alternative',
      'DRI is used for skill acquisition; DRA is used for behavior reduction',
    ],
    correctIndex: 1,
    explanation:
      'DRI reinforces a behavior that cannot physically occur at the same time as the problem behavior (e.g., reinforcing sitting to reduce out-of-seat behavior). DRA reinforces any appropriate alternative, which may or may not be physically incompatible.',
  },
  {
    id: 'q200',
    category: 'B. Skill Acquisition',
    taskCode: 'B-13',
    question: 'A student raises their hand excessively during class (30+ times per hour). The teacher decides to reinforce the student only when they raise their hand 10 or fewer times per hour. This is an example of:',
    options: [
      'DRA',
      'DRO',
      'DRL (Differential Reinforcement of Low rates of behavior)',
      'DRI',
    ],
    correctIndex: 2,
    explanation:
      'DRL is used when the goal is to reduce the behavior to a more acceptable level, not eliminate it entirely. Hand-raising is appropriate but the rate is excessive, so reinforcing lower rates is the best approach.',
  },

  // B-14: Implement group contingency procedures
  {
    id: 'q201',
    category: 'B. Skill Acquisition',
    taskCode: 'B-14',
    question: 'A teacher tells the class, "Everyone who scores 80% or above on the test will earn extra recess." This is an example of:',
    options: [
      'Dependent group contingency',
      'Interdependent group contingency',
      'Independent group contingency',
      'Token economy',
    ],
    correctIndex: 2,
    explanation:
      'In an independent group contingency, the same criterion is applied to all group members, but each individual earns the consequence independently based on their own performance.',
  },
  {
    id: 'q202',
    category: 'B. Skill Acquisition',
    taskCode: 'B-14',
    question: 'Group contingencies are MOST appropriate when:',
    options: [
      'Working with a single client in a home setting',
      'The target behavior is a group-wide concern and peer influence can support behavior change',
      'Only one student in the class needs intervention',
      'The behaviors are maintained by automatic reinforcement',
    ],
    correctIndex: 1,
    explanation:
      'Group contingencies are most effective when the target behavior is common across the group and when peer influence and social dynamics can be leveraged to promote positive behavior change.',
  },

  // B-15: Implement stimulus preference assessments
  {
    id: 'q203',
    category: 'B. Skill Acquisition',
    taskCode: 'B-15',
    question: 'In a Multiple Stimulus Without Replacement (MSWO) preference assessment, the procedure involves:',
    options: [
      'Presenting one item at a time and noting approach behavior',
      'Presenting an array of items, allowing a selection, then removing the selected item and re-presenting the remaining items in a new arrangement',
      'Asking the caregiver which items the client prefers',
      'Presenting two items at a time and recording which is chosen',
    ],
    correctIndex: 1,
    explanation:
      'MSWO presents an array of items, the learner selects one, that item is removed, the remaining items are rearranged, and the learner selects again. This process continues until all items are ranked.',
  },
  {
    id: 'q204',
    category: 'B. Skill Acquisition',
    taskCode: 'B-15',
    question: 'How often should preference assessments be conducted?',
    options: [
      'Only once when the client first starts services',
      'Regularly and frequently, as preferences can change over time',
      'Only when the client explicitly asks for something new',
      'Once per year during the annual review',
    ],
    correctIndex: 1,
    explanation:
      'Preferences can change frequently due to satiation, developmental changes, and new experiences. Regular preference assessments ensure that the items used as reinforcers remain motivating for the learner.',
  },
  {
    id: 'q205',
    category: 'B. Skill Acquisition',
    taskCode: 'B-15',
    question: 'What is the difference between a preference assessment and a reinforcer assessment?',
    options: [
      'They are the same thing',
      'A preference assessment identifies items the learner approaches or selects; a reinforcer assessment confirms whether those items actually function as reinforcers by increasing behavior',
      'A reinforcer assessment comes before a preference assessment',
      'A preference assessment is formal; a reinforcer assessment is informal',
    ],
    correctIndex: 1,
    explanation:
      'A preference assessment identifies what a learner likes or approaches. A reinforcer assessment goes further by testing whether the preferred item actually increases the target behavior when delivered contingently. Preference does not always equal reinforcement.',
  },

  // B-16: Implement mand training
  {
    id: 'q206',
    category: 'B. Skill Acquisition',
    taskCode: 'B-16',
    question: 'To effectively conduct mand training, the RBT should first ensure that:',
    options: [
      'The client can already tact the item',
      'A motivating operation (EO) is present for the target item or activity',
      'The client has mastered echoic behavior for all words',
      'The session room is completely free of distractions',
    ],
    correctIndex: 1,
    explanation:
      'Effective mand training requires the presence of a motivating operation (specifically an EO or establishing operation) that creates motivation for the item. Without motivation, there is no reason for the learner to make the request.',
  },
  {
    id: 'q207',
    category: 'B. Skill Acquisition',
    taskCode: 'B-16',
    question: 'A child sees a cookie jar on the counter and says "cookie." The adult gives the child a cookie. This verbal behavior is classified as a:',
    options: [
      'Tact',
      'Mand',
      'Intraverbal',
      'Echoic',
    ],
    correctIndex: 1,
    explanation:
      'This is a mand because the verbal behavior ("cookie") is controlled by a motivating operation (wanting the cookie) and is reinforced by receiving the specific item requested. A tact would be labeling the cookie without wanting it.',
  },
  {
    id: 'q208',
    category: 'B. Skill Acquisition',
    taskCode: 'B-16',
    question: 'Why is mand training often prioritized in early language intervention?',
    options: [
      'Mands are the easiest verbal operant to teach',
      'Mands empower the learner to communicate their wants and needs, reducing frustration and problem behavior',
      'Mands are the only type of verbal behavior',
      'Mands do not require motivating operations',
    ],
    correctIndex: 1,
    explanation:
      'Mand training is prioritized because it allows the learner to directly access what they need or want through communication. This empowerment reduces the likelihood of problem behavior that may have served the same function.',
  },

  // B-17: Implement tact training
  {
    id: 'q209',
    category: 'B. Skill Acquisition',
    taskCode: 'B-17',
    question: 'A therapist holds up a picture of a car and the child says "car." The therapist says "Great job!" This verbal behavior is classified as a:',
    options: [
      'Mand',
      'Tact',
      'Intraverbal',
      'Echoic',
    ],
    correctIndex: 1,
    explanation:
      'This is a tact because the verbal behavior ("car") is controlled by a nonverbal stimulus (the picture of the car) and is reinforced by generalized conditioned reinforcement (praise). The child is labeling what they see, not requesting it.',
  },
  {
    id: 'q210',
    category: 'B. Skill Acquisition',
    taskCode: 'B-17',
    question: 'A child sees a cookie and says "cookie" to get the cookie. Later, the same child sees a cookie and says "cookie" when the therapist asks "What is this?" The second instance is a tact because:',
    options: [
      'The child is requesting the cookie',
      'The response is under the control of a nonverbal stimulus and is reinforced by social praise, not receipt of the cookie',
      'The child was prompted to say it',
      'The child is repeating what they heard',
    ],
    correctIndex: 1,
    explanation:
      'An impure tact may have multiple controlling variables, but in the second scenario the response is primarily controlled by the nonverbal stimulus (seeing the cookie) and reinforced by social consequences (praise), making it a tact rather than a mand.',
  },

  // B-18: Implement intraverbal training
  {
    id: 'q211',
    category: 'B. Skill Acquisition',
    taskCode: 'B-18',
    question: 'A teacher says "Twinkle, twinkle, little ___" and the child says "star." This is an example of:',
    options: [
      'An echoic',
      'A tact',
      'An intraverbal',
      'A textual response',
    ],
    correctIndex: 2,
    explanation:
      'An intraverbal is a verbal response controlled by a preceding verbal stimulus that does not have point-to-point correspondence with the response. Fill-in-the-blank, answering questions, and conversational exchanges are all intraverbals.',
  },
  {
    id: 'q212',
    category: 'B. Skill Acquisition',
    taskCode: 'B-18',
    question: 'When teaching intraverbals, a common transfer procedure involves:',
    options: [
      'Starting with echoic training and never moving beyond it',
      'First evoking the response as a tact (showing a picture), then fading the visual stimulus to transfer control to a verbal stimulus alone',
      'Only using physical prompts',
      'Presenting written words and having the child read them aloud',
    ],
    correctIndex: 1,
    explanation:
      'A tact-to-intraverbal transfer involves first evoking the response with a visual stimulus (tact), then gradually fading the visual while maintaining the verbal SD until the response is under the control of the verbal stimulus alone (intraverbal).',
  },

  // B-19: Implement listener responding training
  {
    id: 'q213',
    category: 'B. Skill Acquisition',
    taskCode: 'B-19',
    question: 'A therapist says "Touch the car" and the child touches a picture of a car from an array. This is an example of:',
    options: [
      'A tact',
      'An echoic',
      'Listener responding (receptive language)',
      'A mand',
    ],
    correctIndex: 2,
    explanation:
      'Listener responding involves a nonverbal response (touching, pointing, selecting) to a verbal stimulus. The child demonstrates understanding by selecting the correct item without needing to produce speech.',
  },
  {
    id: 'q214',
    category: 'B. Skill Acquisition',
    taskCode: 'B-19',
    question: 'A child looks at the word "cat" and says "cat." This verbal behavior is classified as:',
    options: [
      'A tact',
      'An echoic',
      'Textual behavior',
      'An intraverbal',
    ],
    correctIndex: 2,
    explanation:
      'Textual behavior (reading) is a verbal response evoked by a written or printed stimulus. There is point-to-point correspondence between the written stimulus and the vocal response, but the stimulus is text rather than sound.',
  },

  // B-20: Implement echoic training
  {
    id: 'q215',
    category: 'B. Skill Acquisition',
    taskCode: 'B-20',
    question: 'The echoic verbal operant is considered foundational because:',
    options: [
      'It is the most complex verbal operant',
      'It allows the learner to imitate vocal models, which can then be transferred to other verbal operants like mands and tacts',
      'It does not require any prerequisite skills',
      'It is only needed for reading comprehension',
    ],
    correctIndex: 1,
    explanation:
      'The echoic is foundational because the ability to repeat vocal models enables the use of vocal prompts during mand, tact, and intraverbal training. It serves as a building block for more complex language.',
  },
  {
    id: 'q216',
    category: 'B. Skill Acquisition',
    taskCode: 'B-20',
    question: 'An echoic requires point-to-point correspondence. This means:',
    options: [
      'The response must match the model in meaning',
      'Each part of the response matches the corresponding part of the verbal model (e.g., the sounds match)',
      'The learner must point to an object while speaking',
      'The response must occur at the same time as the model',
    ],
    correctIndex: 1,
    explanation:
      'Point-to-point correspondence means that each segment of the response matches the corresponding segment of the stimulus. For echoics, the sounds produced by the learner must match the sounds of the model.',
  },

  // B-21: Implement matching-to-sample procedures
  {
    id: 'q217',
    category: 'B. Skill Acquisition',
    taskCode: 'B-21',
    question: 'What is the difference between identity matching and arbitrary matching?',
    options: [
      'There is no difference',
      'Identity matching involves matching identical stimuli (e.g., red to red); arbitrary matching involves matching dissimilar but related stimuli (e.g., the word "red" to the color red)',
      'Arbitrary matching is easier than identity matching',
      'Identity matching is only used with colors',
    ],
    correctIndex: 1,
    explanation:
      'Identity matching requires selecting a comparison stimulus that is identical to the sample. Arbitrary matching requires selecting a comparison stimulus that is related to but physically different from the sample (e.g., a picture to a word).',
  },
  {
    id: 'q218',
    category: 'B. Skill Acquisition',
    taskCode: 'B-21',
    question: 'Matching-to-sample (MTS) procedures can be used to teach:',
    options: [
      'Only color identification',
      'Sorting, categorization, reading comprehension, and equivalence relations',
      'Only motor imitation skills',
      'Only listener responding',
    ],
    correctIndex: 1,
    explanation:
      'MTS is a versatile procedure used to teach a wide range of skills including sorting, categorization, reading, spelling, and establishing equivalence relations by training conditional discriminations.',
  },

  // B-03: Additional contingency questions
  {
    id: 'q219',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'A teacher says "Sit down" (antecedent), the student sits (behavior), and the teacher says "Good job" (consequence). This illustrates the:',
    options: [
      'Respondent conditioning paradigm',
      'Three-term contingency (SD → R → SR)',
      'Four-term contingency',
      'Unconditioned reflex arc',
    ],
    correctIndex: 1,
    explanation:
      'The three-term contingency consists of the antecedent (SD), the behavior (response), and the consequence (reinforcement). It is the foundational unit of analysis in operant behavior.',
  },
  {
    id: 'q220',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'A neutral stimulus becomes a conditioned reinforcer through:',
    options: [
      'Punishment',
      'Repeated pairing with an existing reinforcer',
      'Deprivation',
      'Extinction',
    ],
    correctIndex: 1,
    explanation:
      'A neutral stimulus acquires conditioned reinforcing properties by being repeatedly paired with an already-established reinforcer (unconditioned or conditioned). For example, praise becomes a reinforcer through pairing with tangibles and attention.',
  },

  // B-04: Additional DTT question
  {
    id: 'q221',
    category: 'B. Skill Acquisition',
    taskCode: 'B-04',
    question: 'What is the difference between massed trials and distributed trials in DTT?',
    options: [
      'There is no difference',
      'Massed trials present the same target repeatedly in succession; distributed trials intersperse different targets across trials',
      'Distributed trials use more prompts than massed trials',
      'Massed trials are always better for learning',
    ],
    correctIndex: 1,
    explanation:
      'Massed trials present the same target consecutively (e.g., "Touch red" 10 times in a row). Distributed trials mix different targets throughout the session, which can improve discrimination and reduce rote responding.',
  },

  // B-06: Additional chaining question
  {
    id: 'q222',
    category: 'B. Skill Acquisition',
    taskCode: 'B-06',
    question: 'A BCBA writes a task analysis for tooth brushing that includes: 1) pick up toothbrush, 2) wet bristles, 3) apply toothpaste, 4) brush upper teeth, 5) brush lower teeth, 6) spit, 7) rinse mouth, 8) put toothbrush away. The purpose of the task analysis is to:',
    options: [
      'Replace the need for prompting',
      'Break a complex skill into smaller, teachable steps that can be systematically taught and measured',
      'Determine the function of tooth-brushing avoidance',
      'Create a preference assessment for oral hygiene products',
    ],
    correctIndex: 1,
    explanation:
      'A task analysis breaks a complex skill into its component steps so that each step can be taught, prompted, and measured individually. It is the foundation for implementing chaining procedures.',
  },

  // B-08: Additional prompt question
  {
    id: 'q223',
    category: 'B. Skill Acquisition',
    taskCode: 'B-08',
    question: 'An RBT points toward the correct answer while giving an instruction. This is an example of:',
    options: [
      'A full physical prompt',
      'A verbal prompt',
      'A gestural prompt',
      'A textual prompt',
    ],
    correctIndex: 2,
    explanation:
      'A gestural prompt involves a physical movement such as pointing, nodding, or motioning toward the correct response. It is generally considered less intrusive than a model or physical prompt.',
  },

  // B-10: Additional generalization question
  {
    id: 'q224',
    category: 'B. Skill Acquisition',
    taskCode: 'B-10',
    question: 'A BCBA instructs the RBT to teach the tact "dog" using pictures of many different breeds of dogs. This strategy is called:',
    options: [
      'Errorless teaching',
      'Multiple exemplar training',
      'Backward chaining',
      'Discrimination training',
    ],
    correctIndex: 1,
    explanation:
      'Multiple exemplar training involves teaching with a variety of examples so that the learner generalizes the response to novel stimuli of the same class rather than only responding to one specific stimulus.',
  },

  // B-11: Additional shaping question
  {
    id: 'q225',
    category: 'B. Skill Acquisition',
    taskCode: 'B-11',
    question: 'During a shaping procedure, a new criterion for reinforcement should be set when:',
    options: [
      'The learner makes any error',
      'The current approximation is occurring reliably and consistently',
      'The learner appears frustrated',
      'The session time runs out',
    ],
    correctIndex: 1,
    explanation:
      'The criterion for reinforcement should be raised only when the current approximation is occurring consistently and reliably. Moving too quickly can lead to frustration and extinction of the behavior.',
  },

  // B-12: Additional token economy question
  {
    id: 'q226',
    category: 'B. Skill Acquisition',
    taskCode: 'B-12',
    question: 'In a token economy, when should the learner be allowed to exchange tokens for backup reinforcers?',
    options: [
      'Only at the end of the day',
      'At designated exchange times specified in the token economy plan',
      'Whenever the learner demands it',
      'Only when problem behavior occurs',
    ],
    correctIndex: 1,
    explanation:
      'Exchange times should be specified in advance as part of the token economy plan. Consistent exchange schedules help the learner understand the contingency and maintain motivation.',
  },

  // B-15: Additional preference assessment question
  {
    id: 'q227',
    category: 'B. Skill Acquisition',
    taskCode: 'B-15',
    question: 'Why should preference assessments be conducted regularly rather than only once?',
    options: [
      'Preferences never change',
      'Satiation, developmental changes, and new experiences can shift preferences, making previously preferred items less effective as reinforcers',
      'It is only a formality required by insurance',
      'The BCBA always requires new data for billing',
    ],
    correctIndex: 1,
    explanation:
      'Preferences are dynamic and can change due to satiation, new experiences, seasonal factors, and developmental changes. Regular reassessment ensures that the most effective reinforcers are being used.',
  },

  // B-03: Extinction
  {
    id: 'q228',
    category: 'B. Skill Acquisition',
    taskCode: 'B-03',
    question: 'During extinction, which of the following is expected to occur?',
    options: [
      'The behavior immediately stops',
      'An initial increase in the behavior (extinction burst), possible emotional responses, and then a gradual decrease',
      'The behavior is replaced by a new behavior automatically',
      'The reinforcer becomes more effective',
    ],
    correctIndex: 1,
    explanation:
      'When a previously reinforced behavior is placed on extinction, an extinction burst (temporary increase in frequency, intensity, or duration) is expected, often accompanied by emotional responses, before the behavior gradually decreases.',
  },

  // ============================================================
  // C. BEHAVIOR REDUCTION — Additional Questions (q229–q258)
  // ============================================================

  // C-01: Identify essential components of a behavior reduction plan
  {
    id: 'q229',
    category: 'C. Behavior Reduction',
    taskCode: 'C-01',
    question: 'A behavior reduction plan should include crisis/safety procedures. These procedures are designed to:',
    options: [
      'Replace the need for teaching alternative behaviors',
      'Provide step-by-step instructions for keeping the client and others safe when dangerous behavior escalates beyond normal intervention thresholds',
      'Punish the client for engaging in dangerous behavior',
      'Serve as the primary intervention for reducing behavior',
    ],
    correctIndex: 1,
    explanation:
      'Crisis/safety procedures are included in behavior plans to ensure the safety of the client and others during extreme episodes. They are not the primary intervention but a safety measure for high-risk situations.',
  },
  {
    id: 'q230',
    category: 'C. Behavior Reduction',
    taskCode: 'C-01',
    question: 'When selecting a replacement behavior for a behavior reduction plan, the replacement behavior should:',
    options: [
      'Be more effortful than the problem behavior',
      'Serve the same function as the problem behavior and be at least as efficient in producing reinforcement',
      'Be something the client has never done before',
      'Require no teaching or prompting',
    ],
    correctIndex: 1,
    explanation:
      'A replacement behavior must serve the same function as the problem behavior and should be equal to or more efficient (easier, faster, more reliably reinforced) so the learner is more likely to use it instead of the problem behavior.',
  },

  // C-02: Describe common functions of behavior
  {
    id: 'q231',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    question: 'The three types of functional behavior assessment methodologies are:',
    options: [
      'Preference assessment, reinforcer assessment, and skills assessment',
      'Indirect (interviews/checklists), descriptive (direct observation like ABC), and experimental (functional analysis)',
      'ABC recording, scatterplot, and frequency count',
      'Parent report, teacher report, and therapist report',
    ],
    correctIndex: 1,
    explanation:
      'The three FBA methodologies range from least to most rigorous: indirect methods rely on informant reports, descriptive methods involve direct observation in natural settings, and experimental methods (functional analysis) systematically manipulate variables to confirm function.',
  },
  {
    id: 'q232',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    question: 'A student\'s problem behavior occurs exclusively during math class and stops when the math work is removed. The MOST likely function is:',
    options: [
      'Access to attention',
      'Access to tangibles',
      'Escape/avoidance of demands',
      'Automatic reinforcement',
    ],
    correctIndex: 2,
    explanation:
      'When behavior occurs only during specific demands and ceases when the demand is removed, the most likely function is escape or avoidance. The behavior is negatively reinforced by the removal of the aversive task.',
  },
  {
    id: 'q233',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    question: 'Can a single behavior serve multiple functions?',
    options: [
      'No, each behavior can only have one function',
      'Yes, a behavior can serve different functions in different contexts (e.g., hitting for attention in one setting and escape in another)',
      'Only if two BCBAs agree on the function',
      'Only if the behavior is severe',
    ],
    correctIndex: 1,
    explanation:
      'A single topography of behavior can serve different functions depending on the context. For example, a child may hit to get attention from a parent but hit to escape demands at school. This is why functional assessment is critical.',
  },
  {
    id: 'q234',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    question: 'A child engages in repetitive hand-flapping when alone in a room with no other people or activities. This behavior is MOST likely maintained by:',
    options: [
      'Social attention',
      'Escape from demands',
      'Access to tangibles',
      'Automatic reinforcement (sensory stimulation)',
    ],
    correctIndex: 3,
    explanation:
      'When behavior occurs consistently in the absence of social stimuli (attention, demands, tangibles) and persists when the individual is alone, it is likely maintained by automatic reinforcement—the behavior itself produces a reinforcing sensory consequence.',
  },

  // C-03: Implement interventions based on modification of antecedents
  {
    id: 'q235',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    question: 'A client tends to engage in aggression when asked to transition from a preferred activity. The RBT begins giving a 5-minute and then a 2-minute warning before transitions. This is an example of manipulating:',
    options: [
      'The consequence',
      'The motivating operation (reducing the aversiveness of the transition through advance notice)',
      'The reinforcement schedule',
      'The topography of the behavior',
    ],
    correctIndex: 1,
    explanation:
      'Providing transition warnings is an antecedent strategy that modifies the motivating operation by reducing the abruptness and aversiveness of the transition, thereby decreasing the likelihood of problem behavior.',
  },
  {
    id: 'q236',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    question: 'A child has been eating snacks all morning and is no longer interested in working for food reinforcers. The child is experiencing:',
    options: [
      'An establishing operation (EO)',
      'An abolishing operation (AO) due to satiation',
      'Prompt dependency',
      'An extinction burst',
    ],
    correctIndex: 1,
    explanation:
      'An abolishing operation (AO) decreases the effectiveness of a reinforcer. Satiation (having had free access to the food) is an AO that reduces the value of food as a reinforcer and decreases behaviors that have been reinforced by food.',
  },
  {
    id: 'q237',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    question: 'A child screams to get attention. The BCBA adds a procedure in which the RBT provides attention every 2 minutes regardless of what the child is doing. This antecedent strategy is called:',
    options: [
      'Differential reinforcement',
      'Extinction',
      'Noncontingent reinforcement (NCR)',
      'Punishment',
    ],
    correctIndex: 2,
    explanation:
      'Noncontingent reinforcement (NCR) involves providing the maintaining reinforcer (attention) on a time-based schedule regardless of behavior. By providing attention freely, the motivation (EO) to engage in problem behavior to get attention is reduced.',
  },
  {
    id: 'q238',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    question: 'A client engages in self-injurious behavior that is automatically maintained. The BCBA adds additional preferred toys and sensory items to the environment. This antecedent strategy is:',
    options: [
      'Extinction',
      'Environmental enrichment',
      'Response blocking',
      'Overcorrection',
    ],
    correctIndex: 1,
    explanation:
      'Environmental enrichment involves adding preferred items and activities to the environment to provide alternative sources of stimulation, thereby reducing the motivating operation for automatically reinforced problem behavior.',
  },
  {
    id: 'q239',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    question: 'A student refuses to complete a full worksheet. The BCBA modifies the plan so the student starts with completing only 3 problems, then gradually increases the number over time. This antecedent strategy is:',
    options: [
      'Shaping',
      'Demand fading',
      'Extinction',
      'DRO',
    ],
    correctIndex: 1,
    explanation:
      'Demand fading is an antecedent intervention that reduces the initial demand to a level that does not evoke problem behavior, then gradually increases the demand over time as the learner develops tolerance.',
  },
  {
    id: 'q240',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    question: 'An RBT gives a client three easy instructions ("Give me five," "Touch your nose," "Clap your hands") before presenting a difficult demand ("Time to start your worksheet"). This is an example of:',
    options: [
      'Demand fading',
      'High-probability request sequence (behavioral momentum)',
      'Errorless teaching',
      'NCR',
    ],
    correctIndex: 1,
    explanation:
      'The high-probability request sequence (behavioral momentum) involves delivering several high-probability (easy, likely-to-be-followed) requests before a low-probability (difficult) demand to build a pattern of compliance.',
  },

  // C-04: Implement differential reinforcement and extinction procedures
  {
    id: 'q241',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'Functional communication training (FCT) is a specific type of:',
    options: [
      'DRO',
      'Extinction',
      'DRA, where the alternative behavior is a communicative response',
      'Punishment',
    ],
    correctIndex: 2,
    explanation:
      'FCT is a specific application of DRA in which the individual is taught a communicative response (e.g., requesting, using a card, pressing a button) that serves the same function as the problem behavior.',
  },
  {
    id: 'q242',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'When extinction is first implemented, the RBT should expect:',
    options: [
      'An immediate decrease in the behavior',
      'An extinction burst, which is a temporary increase in the frequency, duration, or intensity of the behavior',
      'No change in behavior',
      'The behavior to be replaced by a new appropriate behavior automatically',
    ],
    correctIndex: 1,
    explanation:
      'An extinction burst is a well-documented phenomenon in which the behavior temporarily increases in rate, intensity, or duration before it begins to decrease. RBTs must be prepared for this and continue implementing extinction consistently.',
  },
  {
    id: 'q243',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'After a behavior has been successfully reduced through extinction, it suddenly reappears after a period of time. This is called:',
    options: [
      'An extinction burst',
      'Spontaneous recovery',
      'Generalization',
      'Response cost',
    ],
    correctIndex: 1,
    explanation:
      'Spontaneous recovery is the temporary reappearance of a previously extinguished behavior after a period of time. If extinction is continued, the behavior will decrease again, typically more quickly than the initial extinction.',
  },
  {
    id: 'q244',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'Consistency in extinction is critical because:',
    options: [
      'It reduces paperwork',
      'Intermittent reinforcement of the problem behavior during extinction will strengthen the behavior and make it more resistant to future extinction attempts',
      'The client will become confused if extinction is inconsistent',
      'Insurance requires it',
    ],
    correctIndex: 1,
    explanation:
      'If a behavior is occasionally reinforced during extinction (intermittent reinforcement), the behavior will actually become stronger and more resistant to extinction. Consistency across all implementers and settings is essential.',
  },
  {
    id: 'q245',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'Overcorrection involves two possible components:',
    options: [
      'Reinforcement and punishment',
      'Restitutional overcorrection (restoring the environment beyond its original state) and positive practice overcorrection (repeatedly practicing the correct behavior)',
      'Time-out and response cost',
      'NCR and DRO',
    ],
    correctIndex: 1,
    explanation:
      'Overcorrection has two forms: restitutional (the individual must restore the environment to a state better than before the behavior) and positive practice (the individual must repeatedly practice an appropriate alternative behavior).',
  },
  {
    id: 'q246',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'The difference between exclusionary and non-exclusionary time-out is:',
    options: [
      'There is no difference',
      'Exclusionary time-out removes the individual from the reinforcing environment; non-exclusionary time-out removes access to reinforcement while the individual remains in the same environment',
      'Non-exclusionary is more restrictive',
      'Exclusionary time-out involves adding a stimulus',
    ],
    correctIndex: 1,
    explanation:
      'Exclusionary time-out removes the individual from the reinforcing environment (e.g., sending to a separate room). Non-exclusionary time-out keeps the individual in the environment but removes access to reinforcement (e.g., turning away, removing materials).',
  },
  {
    id: 'q247',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'The principle of least restrictive effective treatment means:',
    options: [
      'Using the most punishing procedure to get quick results',
      'Selecting the intervention that is effective in reducing the behavior while being the least intrusive and restrictive to the individual\'s rights and freedom',
      'Not intervening at all',
      'Only using reinforcement-based procedures even if they are ineffective',
    ],
    correctIndex: 1,
    explanation:
      'The least restrictive effective treatment principle requires practitioners to choose interventions that are effective while imposing the fewest restrictions on the individual. Reinforcement-based strategies should typically be attempted before more restrictive procedures.',
  },
  {
    id: 'q248',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    question: 'A child throws materials when the teacher takes away a preferred toy. The behavior stops when the toy is returned. The MOST likely function is:',
    options: [
      'Escape from demands',
      'Attention',
      'Access to tangibles',
      'Automatic reinforcement',
    ],
    correctIndex: 2,
    explanation:
      'The behavior occurs when a preferred item is removed and stops when it is returned. The function is access to tangibles because the behavior is positively reinforced by regaining the preferred item.',
  },
  {
    id: 'q249',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    question: 'An RBT posts a visual schedule showing the client\'s daily activities. This is an antecedent intervention because:',
    options: [
      'It is used as a punishment procedure',
      'It increases predictability and reduces anxiety about transitions, decreasing the likelihood of problem behavior',
      'It functions as a reinforcer',
      'It is implemented after the behavior occurs',
    ],
    correctIndex: 1,
    explanation:
      'Visual schedules are antecedent interventions that increase predictability by showing the learner what activities will occur and in what order. This reduces uncertainty, which can be an EO for escape-maintained or anxiety-related behavior.',
  },
  {
    id: 'q250',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'A child cries to get the teacher\'s attention. The BCBA instructs the RBT to withhold attention when the child cries (planned ignoring). This procedure is appropriate ONLY when:',
    options: [
      'The behavior is dangerous',
      'The behavior is maintained by attention and it is safe to withhold the reinforcer',
      'The behavior is automatically reinforced',
      'The child is in a group setting',
    ],
    correctIndex: 1,
    explanation:
      'Planned ignoring (extinction for attention-maintained behavior) should only be used when the function is confirmed to be attention and the behavior is not dangerous. If the function is escape, ignoring will not reduce the behavior.',
  },
  {
    id: 'q251',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'Escape extinction involves:',
    options: [
      'Allowing the individual to escape the demand when they engage in problem behavior',
      'Preventing the individual from escaping the demand contingent on problem behavior (e.g., following through with the demand)',
      'Removing all demands from the environment',
      'Adding additional demands as punishment',
    ],
    correctIndex: 1,
    explanation:
      'Escape extinction means not allowing the problem behavior to result in escape from demands. The demand is maintained or re-presented following the problem behavior so that the negative reinforcement contingency is broken.',
  },
  {
    id: 'q252',
    category: 'C. Behavior Reduction',
    taskCode: 'C-01',
    question: 'When implementing a behavior reduction plan, data should be collected on:',
    options: [
      'Only the problem behavior',
      'Both the problem behavior and the replacement behavior to evaluate whether the intervention is working',
      'Only the replacement behavior',
      'Data collection is not necessary during behavior reduction',
    ],
    correctIndex: 1,
    explanation:
      'Data should be collected on both the problem behavior and the replacement behavior. Effective interventions should show a decrease in the problem behavior and an increase in the replacement behavior.',
  },
  {
    id: 'q253',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    question: 'Why is it important to identify the function of a behavior before selecting an intervention?',
    options: [
      'It is not important; all behaviors can be treated the same way',
      'Function-based interventions are more effective because they address the reason the behavior is occurring rather than just the topography',
      'It is only important for insurance purposes',
      'It helps determine the client\'s diagnosis',
    ],
    correctIndex: 1,
    explanation:
      'Function-based interventions are more effective because they address the underlying reinforcement contingency maintaining the behavior. An intervention that does not match the function may be ineffective or even make the behavior worse.',
  },
  {
    id: 'q254',
    category: 'C. Behavior Reduction',
    taskCode: 'C-03',
    question: 'Before a fire drill, a teacher reviews the fire drill procedures with the class and practices the routine. This antecedent strategy is called:',
    options: [
      'Behavioral momentum',
      'Priming',
      'NCR',
      'Environmental enrichment',
    ],
    correctIndex: 1,
    explanation:
      'Priming is an antecedent strategy that involves previewing or practicing an upcoming activity or expectation before it occurs. It prepares the learner and reduces the likelihood of problem behavior during the actual event.',
  },
  {
    id: 'q255',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'When setting the initial interval length for a DRO procedure, the BCBA should:',
    options: [
      'Always start with a 1-hour interval',
      'Set the interval shorter than the typical inter-response time of the problem behavior so the client can contact reinforcement',
      'Set the interval as long as possible to challenge the client',
      'Let the client choose the interval',
    ],
    correctIndex: 1,
    explanation:
      'The initial DRO interval should be set shorter than the average time between occurrences of the problem behavior (baseline IRT) so the learner can realistically earn reinforcement. The interval is then gradually increased.',
  },
  {
    id: 'q256',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'Potential side effects of punishment procedures include:',
    options: [
      'Increased self-esteem',
      'Emotional responding, escape/avoidance of the punishing agent, aggression, and modeling of punishing behavior',
      'Increased generalization of the target behavior',
      'Improved rapport with the therapist',
    ],
    correctIndex: 1,
    explanation:
      'Punishment can produce negative side effects including emotional responses (crying, fear), avoidance of the person delivering punishment, counter-aggression, and the learner modeling punitive behavior toward others.',
  },
  {
    id: 'q257',
    category: 'C. Behavior Reduction',
    taskCode: 'C-04',
    question: 'A client begins to hit themselves. The RBT places their hand between the client\'s hand and head to prevent contact. This is an example of:',
    options: [
      'Physical restraint',
      'Response blocking',
      'Overcorrection',
      'Planned ignoring',
    ],
    correctIndex: 1,
    explanation:
      'Response blocking involves physically preventing the behavior from being completed without using a hold or restraint. The RBT blocks the response while not restricting the individual\'s overall movement.',
  },
  {
    id: 'q258',
    category: 'C. Behavior Reduction',
    taskCode: 'C-02',
    question: 'A child engages in rocking and humming when seated alone with no demands or social interaction. When asked to stop, the child continues the behavior. The MOST likely function is:',
    options: [
      'Escape from demands',
      'Access to attention',
      'Access to tangibles',
      'Automatic reinforcement',
    ],
    correctIndex: 3,
    explanation:
      'The behavior occurs in the absence of social contingencies (alone, no demands, no social interaction), suggesting it is maintained by automatic reinforcement—the sensory stimulation produced by the behavior itself is reinforcing.',
  },

  // ============================================================
  // D. DOCUMENTATION & REPORTING — Additional Questions (q259–q278)
  // ============================================================

  // D-01: Report other variables that might affect the client
  {
    id: 'q259',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-01',
    question: 'A client\'s parent reports that the child\'s medication was recently changed. The RBT should:',
    options: [
      'Ignore this information as it is not related to ABA',
      'Document and report the medication change to the supervisor immediately, as it may affect the client\'s behavior and data',
      'Adjust the behavior plan to account for the medication change',
      'Tell the parent to discuss this with the doctor, not the RBT',
    ],
    correctIndex: 1,
    explanation:
      'Medication changes can significantly affect behavior and data patterns. The RBT should report this variable to the supervisor so it can be considered when analyzing data and making treatment decisions.',
  },
  {
    id: 'q260',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-01',
    question: 'Which of the following variables should an RBT report to their supervisor?',
    options: [
      'Only changes in problem behavior frequency',
      'Changes in medication, sleep, diet, staffing, family dynamics, health, and any environmental changes that could affect behavior',
      'Only information the parent specifically asks them to report',
      'Only data from the session itself',
    ],
    correctIndex: 1,
    explanation:
      'RBTs should report any variable that might affect the client, including medication changes, sleep disruptions, illness, changes in routine, family events, staffing changes, and environmental changes.',
  },

  // D-02: Generate objective session notes
  {
    id: 'q261',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-02',
    question: 'Which of the following is written in objective language?',
    options: [
      'The client was being stubborn and refused to work',
      'The client did not initiate the task within 30 seconds of the instruction on 4 out of 5 trials',
      'The client had a bad attitude today',
      'The client seemed like they didn\'t care about the reinforcer',
    ],
    correctIndex: 1,
    explanation:
      'Objective language describes observable, measurable events without subjective interpretation. Stating specific data (4 out of 5 trials, 30 seconds) is objective, whereas "stubborn," "bad attitude," and "didn\'t care" are subjective labels.',
  },
  {
    id: 'q262',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-02',
    question: 'Which of the following should NOT be included in session notes?',
    options: [
      'Data on target behaviors',
      'Prompt levels used during the session',
      'Personal opinions about the client\'s family or diagnoses unrelated to the session',
      'Reinforcers used and their effectiveness',
    ],
    correctIndex: 2,
    explanation:
      'Session notes should include objective data, prompt levels, reinforcers used, and relevant observations. Personal opinions, subjective judgments about the family, and unrelated diagnostic speculation should never be included.',
  },
  {
    id: 'q263',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-02',
    question: 'An RBT needs to document that a client hit another child during a session. The BEST way to write this is:',
    options: [
      'The client was very aggressive and attacked another child because he was angry',
      'The client engaged in 1 instance of hitting (making forceful contact with open hand to peer\'s arm) during a transition to snack time. The peer cried and the RBT implemented the crisis procedure per the BIP.',
      'The client was violent today',
      'The client hit someone; it was really bad',
    ],
    correctIndex: 1,
    explanation:
      'Objective documentation includes the specific behavior using the operational definition, the count, the context in which it occurred, the effect, and what procedures were implemented, all without subjective labels.',
  },

  // D-03: Effectively communicate with supervisor
  {
    id: 'q264',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-03',
    question: 'An RBT should contact their supervisor URGENTLY (not wait until the next scheduled meeting) when:',
    options: [
      'They want to discuss scheduling preferences',
      'They observe signs of abuse or neglect, the client engages in dangerous behavior not covered by the plan, or there is a safety concern',
      'They want to suggest a new reinforcer',
      'They completed all their data sheets',
    ],
    correctIndex: 1,
    explanation:
      'Urgent communication with the supervisor is warranted for safety concerns, suspected abuse or neglect, dangerous behaviors not addressed by the current plan, and any situation that poses immediate risk.',
  },
  {
    id: 'q265',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-03',
    question: 'During a session, an RBT is unsure whether to deliver the reinforcer because the client\'s response was borderline correct. The RBT should:',
    options: [
      'Withhold the reinforcer to be safe',
      'Give the reinforcer because the client will get upset otherwise',
      'Contact the supervisor for clarification on the mastery criteria and response definition',
      'Make their own judgment call and continue',
    ],
    correctIndex: 2,
    explanation:
      'When unsure about implementation details, the RBT should seek guidance from the supervisor rather than guessing. This ensures treatment fidelity and consistent application of the behavior plan.',
  },

  // D-04: Comply with applicable legal, regulatory, and workplace requirements
  {
    id: 'q266',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-04',
    question: 'An RBT posts a photo of a session activity on social media, and the client\'s face is visible in the background. This is:',
    options: [
      'Acceptable if the RBT does not tag the client',
      'A violation of HIPAA and client confidentiality',
      'Acceptable if the post is set to private',
      'Acceptable if the RBT does not mention the client\'s name',
    ],
    correctIndex: 1,
    explanation:
      'Sharing any identifiable information about a client (including photos) on social media without written consent is a violation of HIPAA and confidentiality requirements, regardless of privacy settings or whether the client is named.',
  },
  {
    id: 'q267',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-04',
    question: 'As a mandated reporter, an RBT is legally required to:',
    options: [
      'Report suspected abuse or neglect to the appropriate authorities, even if they are not 100% certain',
      'Only report abuse if they directly witness it happening',
      'Report suspected abuse only to the BCBA and let the BCBA decide whether to contact authorities',
      'Wait until they have definitive proof before reporting',
    ],
    correctIndex: 0,
    explanation:
      'Mandated reporters are required by law to report any reasonable suspicion of abuse or neglect to the appropriate authorities (e.g., child protective services). They do not need to have proof; the investigation is handled by the authorities.',
  },
  {
    id: 'q268',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-04',
    question: 'A parent asks the RBT to see their child\'s session data and progress notes. The RBT should:',
    options: [
      'Refuse because the data belongs to the company',
      'Hand over all documents immediately',
      'Direct the parent to the supervising BCBA or follow their organization\'s policy for records requests',
      'Share the data only if the parent signs a waiver on the spot',
    ],
    correctIndex: 2,
    explanation:
      'Parents/guardians generally have the right to access their child\'s records, but the RBT should follow the organization\'s established procedures for records requests, which typically involve the supervisor or administrative staff.',
  },

  // D-05: Comply with applicable requirements for data collection, storage, and transportation
  {
    id: 'q269',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-05',
    question: 'Which of the following is a requirement for protecting electronic client data?',
    options: [
      'Saving data on a personal laptop without a password',
      'Using password-protected, encrypted devices and secure platforms approved by the organization',
      'Emailing data to personal email accounts for convenience',
      'Storing data on a shared family computer',
    ],
    correctIndex: 1,
    explanation:
      'Electronic client data must be stored on password-protected, encrypted devices and transmitted through secure, organization-approved platforms to comply with HIPAA and data protection requirements.',
  },
  {
    id: 'q270',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-05',
    question: 'When disposing of paper data sheets containing client information, the RBT should:',
    options: [
      'Throw them in the regular trash',
      'Shred them or use a secure document destruction method',
      'Recycle them to be environmentally responsible',
      'Keep them indefinitely in their car',
    ],
    correctIndex: 1,
    explanation:
      'Documents containing client information must be shredded or destroyed using a secure method to prevent unauthorized access to confidential information. Simply discarding them in the trash is a confidentiality violation.',
  },
  {
    id: 'q271',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-01',
    question: 'During a home session, the RBT notices that a new family member has moved into the household. The RBT should:',
    options: [
      'Ignore this as it is a personal family matter',
      'Document and report this environmental change to the supervisor, as it could affect the client\'s behavior',
      'Ask the new family member to leave during sessions',
      'Modify the behavior plan to account for the new person',
    ],
    correctIndex: 1,
    explanation:
      'Changes in the home environment, including new household members, can affect the client\'s behavior. The RBT should report this variable to the supervisor so it can be considered in treatment planning.',
  },
  {
    id: 'q272',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-02',
    question: 'Session notes should be completed:',
    options: [
      'At the end of the week in a single batch',
      'As soon as possible after each session, ideally immediately or the same day',
      'Only when the supervisor requests them',
      'Before the session begins based on predictions',
    ],
    correctIndex: 1,
    explanation:
      'Session notes should be completed as soon as possible after the session to ensure accuracy. Delayed documentation increases the risk of inaccurate data and forgotten details.',
  },
  {
    id: 'q273',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-03',
    question: 'Which of the following should the RBT share with their supervisor?',
    options: [
      'Only positive outcomes from sessions',
      'Session data, changes in client behavior, environmental changes, concerns about procedures, and any barriers to implementation',
      'Only information that makes the RBT look competent',
      'Only information the supervisor specifically asks about',
    ],
    correctIndex: 1,
    explanation:
      'Effective communication with a supervisor includes sharing all relevant information: data trends, implementation challenges, environmental changes, concerns about procedures, and both positive and negative outcomes.',
  },
  {
    id: 'q274',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-04',
    question: 'For insurance and billing purposes, session documentation must:',
    options: [
      'Only include the start and end time',
      'Accurately reflect the services provided, including start/end times, activities, data, and goals addressed',
      'Be as brief as possible to save time',
      'Only be completed when the insurance company requests it',
    ],
    correctIndex: 1,
    explanation:
      'Insurance documentation must accurately and completely reflect the services provided. Inaccurate or incomplete documentation can constitute fraud and may result in denied claims, audits, or legal consequences.',
  },
  {
    id: 'q275',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-05',
    question: 'An RBT stores client data in a personal cloud storage account (e.g., personal Google Drive). This is:',
    options: [
      'Acceptable if the account is password-protected',
      'Not acceptable; client data must be stored on organization-approved, HIPAA-compliant platforms',
      'Acceptable if the RBT does not share the link',
      'Required for backup purposes',
    ],
    correctIndex: 1,
    explanation:
      'Personal cloud accounts are not HIPAA-compliant and do not meet the security requirements for storing client data. Only organization-approved, HIPAA-compliant platforms should be used.',
  },
  {
    id: 'q276',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-02',
    question: 'An RBT documents: "Client required a verbal prompt for step 3 and a gestural prompt for step 5 of the hand-washing task analysis." This is an example of:',
    options: [
      'Subjective reporting',
      'Objective documentation of prompt levels used during the session',
      'An opinion about the client\'s performance',
      'A diagnosis of the client\'s limitations',
    ],
    correctIndex: 1,
    explanation:
      'Documenting the specific prompt levels used for each step is objective and measurable. This information helps the supervisor monitor progress and make decisions about prompt fading.',
  },
  {
    id: 'q277',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-01',
    question: 'An RBT learns that the client\'s regular afternoon therapist has quit and the client is now seeing a new therapist. The RBT should:',
    options: [
      'Not report this since it doesn\'t involve their session',
      'Report this staffing change to the supervisor as it may affect the client\'s behavior and consistency of care',
      'Contact the new therapist directly to coordinate',
      'Modify their own sessions to compensate for the change',
    ],
    correctIndex: 1,
    explanation:
      'Staffing changes can affect the client\'s behavior, rapport, and treatment consistency. The RBT should report this change to their supervisor so appropriate steps can be taken.',
  },
  {
    id: 'q278',
    category: 'D. Documentation & Reporting',
    taskCode: 'D-04',
    question: 'An RBT receives a subpoena requesting client records. The RBT should:',
    options: [
      'Immediately hand over all records',
      'Destroy the records to protect the client',
      'Notify their supervisor and the organization\'s legal or compliance department before releasing any information',
      'Ignore the subpoena',
    ],
    correctIndex: 2,
    explanation:
      'A subpoena is a legal document, but the RBT should not release records on their own. They should immediately notify their supervisor and the organization\'s legal or compliance team to ensure proper procedures are followed.',
  },

  // ============================================================
  // E. PROFESSIONAL CONDUCT & SCOPE OF PRACTICE — Additional Questions (q279–q300)
  // ============================================================

  // E-01: Describe the role of the RBT in the service delivery system
  {
    id: 'q279',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-01',
    question: 'How often should an RBT communicate with their supervising BCBA?',
    options: [
      'Only when a crisis occurs',
      'At least at each required supervision meeting and whenever significant changes or concerns arise',
      'Once per year at the annual review',
      'Only when the RBT feels like it',
    ],
    correctIndex: 1,
    explanation:
      'RBTs should communicate with their supervisor regularly during required supervision meetings and additionally whenever significant changes, concerns, or questions arise. Ongoing communication is essential for effective service delivery.',
  },
  {
    id: 'q280',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-01',
    question: 'An RBT notices that data on a client\'s problem behavior shows a significant increasing trend over the past two weeks. The RBT should:',
    options: [
      'Wait to see if it resolves on its own',
      'Change the intervention independently',
      'Report the data trend to the supervisor promptly so the treatment plan can be reviewed',
      'Stop collecting data on that behavior',
    ],
    correctIndex: 2,
    explanation:
      'Significant changes in data trends should be reported to the supervisor promptly. The BCBA may need to analyze the data, reassess the function, or modify the intervention. The RBT should not change the plan independently.',
  },

  // E-02: Respond appropriately to feedback and maintain/improve performance
  {
    id: 'q281',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-02',
    question: 'Which of the following is OUTSIDE the scope of practice for an RBT?',
    options: [
      'Collecting data on target behaviors',
      'Conducting a functional analysis and designing a new behavior intervention plan',
      'Implementing the skill acquisition plan as written',
      'Reporting changes to the supervisor',
    ],
    correctIndex: 1,
    explanation:
      'Conducting functional analyses and designing behavior intervention plans are within the scope of the BCBA, not the RBT. RBTs implement plans designed by the BCBA and collect data, but they do not independently design or modify treatment plans.',
  },
  {
    id: 'q282',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-02',
    question: 'A parent asks the RBT to add a new target behavior to the child\'s program. The RBT should:',
    options: [
      'Add it immediately to be responsive to the parent\'s wishes',
      'Explain that changes to the program must be made by the supervising BCBA and offer to relay the request to the supervisor',
      'Tell the parent that their input is not relevant',
      'Add it but not tell the supervisor',
    ],
    correctIndex: 1,
    explanation:
      'Modifying treatment programs is outside the RBT\'s scope of practice. The RBT should respectfully explain that program changes must be made by the BCBA and should communicate the parent\'s request to the supervisor.',
  },

  // E-03: Communicate with stakeholders as authorized
  {
    id: 'q283',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-03',
    question: 'The right to effective treatment means that clients are entitled to:',
    options: [
      'The most expensive treatment available',
      'Treatment based on the best available scientific evidence that is likely to produce meaningful outcomes',
      'Any treatment the family requests, regardless of evidence',
      'Treatment only if insurance covers it',
    ],
    correctIndex: 1,
    explanation:
      'The right to effective treatment means clients deserve interventions grounded in the best available scientific evidence (evidence-based practice) that have been shown to produce meaningful, socially significant outcomes.',
  },
  {
    id: 'q284',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-03',
    question: 'Social validity in ABA refers to:',
    options: [
      'The number of social skills a client has learned',
      'Whether the goals, procedures, and outcomes of the intervention are considered acceptable and meaningful by the client, family, and community',
      'How popular the treatment is among therapists',
      'The client\'s ability to interact with peers',
    ],
    correctIndex: 1,
    explanation:
      'Social validity evaluates whether the goals of the intervention are important to the client and stakeholders, whether the procedures are acceptable, and whether the outcomes make a meaningful difference in the client\'s life.',
  },

  // E-04: Maintain professional boundaries
  {
    id: 'q285',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-04',
    question: 'When working with an adult client with developmental disabilities, the RBT should:',
    options: [
      'Use children\'s materials because they are easier',
      'Use age-appropriate materials and language that respect the client\'s dignity as an adult',
      'Let the client choose regardless of age-appropriateness',
      'Only work on behaviors that staff find annoying',
    ],
    correctIndex: 1,
    explanation:
      'Maintaining dignity requires using age-appropriate materials and language regardless of the client\'s developmental level. Using children\'s materials with adults is disrespectful and may stigmatize the individual.',
  },
  {
    id: 'q286',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-04',
    question: 'An RBT is out in the community with a client practicing social skills. The client has a behavioral episode in a grocery store. To maintain the client\'s dignity, the RBT should:',
    options: [
      'Loudly announce the client\'s diagnosis to bystanders',
      'Calmly implement the behavior plan, move to a less public area if possible, and avoid drawing unnecessary attention to the client',
      'Leave the store immediately and end the session',
      'Restrain the client in front of other shoppers',
    ],
    correctIndex: 1,
    explanation:
      'Maintaining dignity in the community means managing situations calmly and discreetly, moving to a more private area when possible, and avoiding actions that draw unnecessary attention or stigmatize the client.',
  },

  // E-05: Maintain client dignity
  {
    id: 'q287',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-05',
    question: 'Which of the following is an example of a dual relationship that should be avoided?',
    options: [
      'Attending a professional development workshop with a colleague',
      'Becoming the babysitter for a client\'s family on weekends',
      'Discussing a client\'s progress with the supervising BCBA',
      'Implementing a behavior plan during a session',
    ],
    correctIndex: 1,
    explanation:
      'A dual relationship exists when the professional has another relationship with the client or their family (e.g., babysitter, friend, business partner). These relationships compromise objectivity and professional boundaries.',
  },
  {
    id: 'q288',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-05',
    question: 'A client\'s family offers the RBT an expensive gift during the holidays. The RBT should:',
    options: [
      'Accept the gift to avoid offending the family',
      'Politely decline or follow the organization\'s policy on accepting gifts, as accepting gifts can compromise professional boundaries',
      'Accept it but not tell anyone',
      'Accept it and reciprocate with an equally expensive gift',
    ],
    correctIndex: 1,
    explanation:
      'Accepting gifts from clients or their families can compromise professional boundaries and create a dual relationship. The RBT should follow their organization\'s policy, which typically involves politely declining or accepting only nominal gifts.',
  },

  // E-06: Comply with supervision requirements
  {
    id: 'q289',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-06',
    question: 'To maintain their RBT credential, an RBT must:',
    options: [
      'Only complete the initial training and never update their knowledge',
      'Meet ongoing supervision requirements and complete any required continuing education or renewal procedures as specified by the BACB',
      'Attend one workshop per decade',
      'Only take a refresher course when their certification expires',
    ],
    correctIndex: 1,
    explanation:
      'RBT credential maintenance requires ongoing supervision requirements, annual renewal, and adherence to BACB requirements including competency assessments. This ensures continued professional development and quality of service.',
  },
  {
    id: 'q290',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-06',
    question: 'An RBT reads a research article that suggests a new approach may be more effective than the current procedure being used with a client. The RBT should:',
    options: [
      'Immediately switch to the new approach',
      'Share the information with their supervisor for discussion; any changes to the plan must be made by the BCBA',
      'Ignore the research because they are just an RBT',
      'Tell the parent about the research and suggest they demand a change',
    ],
    correctIndex: 1,
    explanation:
      'While it is commendable for RBTs to stay informed, any changes to treatment must be made by the supervising BCBA. The RBT should share the information with their supervisor for consideration within the treatment decision-making process.',
  },

  // E-07: Maintain client confidentiality
  {
    id: 'q291',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-07',
    question: 'An RBT accidentally leaves a client\'s data binder in a coffee shop. Upon realizing the mistake, the RBT should:',
    options: [
      'Forget about it and create new data sheets',
      'Immediately retrieve the binder if possible and report the data breach to their supervisor and organization following the data breach protocol',
      'Wait to see if anyone finds it',
      'Only report it if someone contacts them about it',
    ],
    correctIndex: 1,
    explanation:
      'A lost data binder is a data breach. The RBT must immediately attempt to retrieve it and report the incident to their supervisor and organization. Timely reporting allows the organization to follow breach notification procedures.',
  },
  {
    id: 'q292',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-07',
    question: 'An RBT is in an elevator with a colleague and begins discussing a client\'s problem behaviors by name. This is:',
    options: [
      'Acceptable because the colleague also works with the client',
      'A confidentiality violation because client information should not be discussed in public settings where others can overhear',
      'Acceptable as long as they speak quietly',
      'Required for professional collaboration',
    ],
    correctIndex: 1,
    explanation:
      'Discussing client information in public settings (elevators, hallways, restaurants) where unauthorized individuals may overhear is a confidentiality violation, regardless of whether the other person is also on the treatment team.',
  },

  // E-08: Identify and report suspected abuse
  {
    id: 'q293',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-08',
    question: 'During a session, an RBT notices the client appears to have difficulty with fine motor tasks that are declining over time. The RBT should:',
    options: [
      'Diagnose the motor issue themselves',
      'Ignore it because motor skills are not part of the ABA program',
      'Report the observation to the supervisor, who may recommend the family consult with an occupational therapist or other specialist',
      'Tell the parent the child needs occupational therapy',
    ],
    correctIndex: 2,
    explanation:
      'If an RBT notices a need for additional services outside their scope, they should report it to the supervisor. The BCBA can then recommend appropriate referrals to other professionals such as occupational therapists.',
  },
  {
    id: 'q294',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-08',
    question: 'An RBT notices that a client has started having difficulty grasping small objects and frequently drops items. This is a concern because:',
    options: [
      'It is not a concern for the RBT',
      'It could indicate a motor development issue that should be reported to the supervisor for potential referral to a specialist',
      'The RBT should begin motor skill training immediately',
      'The client is being defiant',
    ],
    correctIndex: 1,
    explanation:
      'Changes in motor skills should be documented and reported to the supervisor. The supervisor may recommend a referral to an occupational therapist or other specialist. The RBT should not diagnose or treat motor issues independently.',
  },

  // E-09: Follow the RBT supervision requirements
  {
    id: 'q295',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-09',
    question: 'When a supervisor provides corrective feedback about an RBT\'s implementation of a procedure, the RBT should:',
    options: [
      'Argue that their way is better',
      'Accept the feedback professionally, ask clarifying questions if needed, and implement the corrections',
      'Ignore the feedback if they disagree',
      'File a complaint about the supervisor',
    ],
    correctIndex: 1,
    explanation:
      'Accepting feedback professionally is an essential part of the RBT\'s role. Corrective feedback improves treatment fidelity and client outcomes. RBTs should ask questions for clarity and implement corrections promptly.',
  },
  {
    id: 'q296',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-09',
    question: 'During a supervision observation, the BCBA notes that the RBT is delivering reinforcement with a 10-second delay after the correct response. The BCBA provides feedback to deliver reinforcement immediately. The RBT should:',
    options: [
      'Continue with the 10-second delay because it has been working',
      'Implement the correction immediately and practice delivering reinforcement within 1-2 seconds of the correct response',
      'Tell the BCBA that the delay does not matter',
      'Only change when the BCBA is observing',
    ],
    correctIndex: 1,
    explanation:
      'The RBT should implement the supervisor\'s correction immediately and consistently, not only during observations. Delayed reinforcement weakens the contingency between the behavior and the consequence.',
  },

  // E-10: Report concerns about colleague behavior
  {
    id: 'q297',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-10',
    question: 'An RBT arrives at a client\'s home and notices that the child appears malnourished, is wearing dirty clothes, and the home has no food. The RBT should:',
    options: [
      'Mind their own business',
      'Document the observations objectively and report suspected neglect to the appropriate authorities and their supervisor immediately',
      'Bring food for the child at the next session',
      'Confront the parent about the conditions',
    ],
    correctIndex: 1,
    explanation:
      'Signs of neglect (malnourishment, lack of hygiene, no food) must be reported by the RBT as a mandated reporter. The RBT should document observations objectively and report to both the authorities and their supervisor.',
  },
  {
    id: 'q298',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-10',
    question: 'An RBT arrives at a client\'s home and observes that medications and cleaning chemicals are easily accessible to the child. The RBT should:',
    options: [
      'Rearrange the home themselves',
      'Report the safety concern to the supervisor and document the observation',
      'Ignore it because it is the family\'s home',
      'Cancel all future sessions until the issue is resolved',
    ],
    correctIndex: 1,
    explanation:
      'Environmental safety concerns should be reported to the supervisor. The supervisor can address the issue with the family. The RBT should document the observation but should not unilaterally rearrange the client\'s home.',
  },
  {
    id: 'q299',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-10',
    question: 'If an RBT observes another RBT implementing a procedure incorrectly and potentially harming the client, the appropriate reporting chain is:',
    options: [
      'Post about it on social media to warn others',
      'Report the concern to their supervisor or the other RBT\'s supervisor immediately',
      'Confront the other RBT publicly in front of the client',
      'Ignore it because it is not their client',
    ],
    correctIndex: 1,
    explanation:
      'Concerns about a colleague\'s practice should be reported to the appropriate supervisor immediately. The RBT has an ethical obligation to report practices that may harm clients, following the organization\'s reporting procedures.',
  },
  {
    id: 'q300',
    category: 'E. Professional Conduct & Scope of Practice',
    taskCode: 'E-05',
    question: 'A client\'s parent asks the RBT to drive their child to a doctor\'s appointment after the session. The RBT should:',
    options: [
      'Agree to help because it builds rapport with the family',
      'Decline, as transporting clients is outside professional boundaries and creates liability issues, and suggest the family arrange alternative transportation',
      'Agree but only if the parent pays for gas',
      'Agree as long as the supervisor does not find out',
    ],
    correctIndex: 1,
    explanation:
      'Transporting clients is outside the RBT\'s professional role and creates dual relationships, liability issues, and potential boundary violations. The RBT should politely decline and suggest alternative transportation arrangements.',
  },
];
