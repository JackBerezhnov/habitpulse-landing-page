import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = {
  "the-science-of-habit-formation": {
    title: "The Science of Habit Formation: How to Build Lasting Changes",
    excerpt: "Discover the neuroscience behind habit formation and learn evidence-based strategies to create habits that stick for life.",
    content: `
# The Science of Habit Formation: How to Build Lasting Changes

Have you ever wondered why some habits stick while others fade away after just a few days? The answer lies in understanding the fascinating neuroscience behind habit formation.

## The Habit Loop

At the core of every habit is what researchers call the "habit loop" - a neurological pattern that consists of three parts:

### 1. The Cue
The cue is the trigger that initiates the habit. It could be a time of day, an emotional state, a location, or even the presence of certain people.

### 2. The Routine
This is the behavior itself - the action you take in response to the cue. It can be physical, mental, or emotional.

### 3. The Reward
The reward is what your brain gets from completing the routine. It could be a physical sensation, an emotional payoff, or even just the satisfaction of completion.

## The Neuroscience Behind Habits

When you first start a new behavior, your brain's prefrontal cortex (responsible for decision-making) is highly active. However, as the behavior becomes more automatic, activity shifts to the basal ganglia - the brain's "autopilot" center.

## Building Lasting Habits: Evidence-Based Strategies

### Start Small
Research shows that starting with tiny habits increases your chances of success. Instead of committing to an hour-long workout, start with just 5 minutes.

### Stack Your Habits
Link new habits to existing ones. This technique, called "habit stacking," leverages your brain's existing neural pathways.

### Focus on Identity
Instead of focusing on what you want to achieve, focus on who you want to become. Ask yourself: "What would a healthy person do?"

### Design Your Environment
Make good habits obvious and bad habits invisible. Your environment shapes your behavior more than you realize.

## Conclusion

Understanding the science behind habit formation gives you the power to design better systems for change. Remember, you don't rise to the level of your goals - you fall to the level of your systems.

Ready to put this science into practice? Try HabitPulse to track your progress and build lasting habits with evidence-based strategies.
    `,
    publishedAt: "2024-12-15",
    readTime: "8 min read",
    category: "Science",
    author: "Jack Sighton",
  },
  "21-day-habit-myth-debunked": {
    title: "The 21-Day Habit Myth: What Science Really Says",
    excerpt: "Uncover the truth about how long it really takes to form a habit and why the 21-day rule is misleading.",
    content: `
# The 21-Day Habit Myth: What Science Really Says

You've probably heard it before: "It takes 21 days to form a habit." This popular belief has been repeated countless times in self-help books, motivational speeches, and productivity blogs. But here's the truth - it's largely a myth.

## The Origin of the 21-Day Rule

The 21-day rule originated from Dr. Maxwell Maltz, a plastic surgeon in the 1950s. He noticed that patients took about 21 days to adjust to their new appearance after surgery.

## What Research Actually Shows

In 2009, Dr. Phillippa Lally from University College London conducted a comprehensive study on habit formation. Her research revealed:

- **Average time**: 66 days to form a habit
- **Range**: 18 to 254 days depending on the person and habit
- **Complexity matters**: Simple habits form faster than complex ones

## A Better Approach

Instead of counting days, focus on:
- **Consistency**: Aim for daily practice
- **Environment**: Design your surroundings to support the habit
- **Identity**: Align habits with who you want to become
- **Progress**: Celebrate small wins along the way

## The Bottom Line

There's no magic number for habit formation. Some habits might stick in 18 days, others might take 8 months. The key is to focus on the process, not the timeline.

Ready to build habits that actually stick? Start tracking your progress with HabitPulse and focus on consistency over perfection.
    `,
    publishedAt: "2024-12-10",
    readTime: "6 min read",
    category: "Research",
    author: "Jack Sighton",
  },
  "habit-stacking-complete-guide": {
    title: "Habit Stacking: The Complete Guide to Building Multiple Habits",
    excerpt: "Learn how to use habit stacking to effortlessly build multiple positive habits by linking them to existing routines.",
    content: `
# Habit Stacking: The Complete Guide to Building Multiple Habits

Imagine if you could build multiple positive habits without relying on willpower or motivation. That's the power of habit stacking - a simple but incredibly effective strategy for behavior change.

## What is Habit Stacking?

Habit stacking is the practice of linking a new habit to an existing one. The formula is simple:

**After [EXISTING HABIT], I will [NEW HABIT].**

For example:
- After I pour my morning coffee, I will write down three things I'm grateful for.
- After I sit down for dinner, I will put my phone in another room.
- After I brush my teeth at night, I will read one page of a book.

## The Science Behind Habit Stacking

Habit stacking works because it leverages your brain's existing neural pathways. When you perform an established habit, your brain is already in "automatic mode." By immediately following it with a new behavior, you're more likely to remember and execute the new habit.

## How to Create Effective Habit Stacks

### Step 1: Identify Your Current Habits
Make a list of things you already do consistently:
- Wake up
- Check your phone
- Brush your teeth
- Make coffee
- Eat lunch

### Step 2: Choose Your New Habit
Select a habit that:
- Takes less than 2 minutes
- Aligns with your goals
- Can realistically follow your existing habit

### Step 3: Create Your Stack
Use this formula: "After I [EXISTING HABIT], I will [NEW HABIT]."

## Habit Stacking Examples

### Health & Fitness
- After I wake up, I will drink a glass of water.
- After I brush my teeth, I will do 10 push-ups.
- After I eat lunch, I will take a 5-minute walk.

### Productivity
- After I open my laptop, I will review my daily priorities.
- After I finish a work task, I will clean my desk.
- After I check my email, I will close all unnecessary browser tabs.

## Conclusion

Habit stacking is one of the most effective strategies for building multiple positive habits without overwhelming yourself. By linking new behaviors to existing ones, you create a system that works with your brain's natural tendencies.

Ready to start building your own habit stacks? Use HabitPulse to track your progress and build lasting positive changes in your life.
    `,
    publishedAt: "2024-12-05",
    readTime: "10 min read",
    category: "Strategy",
    author: "Jack Sighton",
  },
  "morning-routine-productivity-boost": {
    title: "5 Morning Habits That Will Transform Your Productivity",
    excerpt: "Start your day right with these science-backed morning habits that successful people swear by.",
    content: `
# 5 Morning Habits That Will Transform Your Productivity

How you start your morning sets the tone for your entire day. Research consistently shows that people with intentional morning routines are more productive, less stressed, and more successful in achieving their goals.

## 1. Wake Up at the Same Time Every Day

### The Science
Your body operates on a circadian rhythm - an internal clock that regulates sleep-wake cycles. Consistent wake times help optimize this rhythm, leading to:
- Better sleep quality
- Increased alertness
- Improved mood
- Enhanced cognitive function

### How to Implement
- Choose a wake time and stick to it, even on weekends
- Use a sunrise alarm clock to wake up more naturally
- Avoid hitting the snooze button
- Place your alarm across the room

## 2. Hydrate Immediately

### The Science
After 6-8 hours without water, your body is naturally dehydrated. Even mild dehydration can:
- Reduce cognitive performance by 12%
- Decrease physical performance
- Cause fatigue and mood changes

### How to Implement
- Keep a large glass of water by your bedside
- Drink 16-20 ounces of water within 30 minutes of waking
- Add lemon for extra vitamin C and flavor

## 3. Move Your Body

### The Science
Morning exercise triggers the release of endorphins, BDNF, and norepinephrine. Studies show that just 20 minutes of morning exercise can improve cognitive performance for up to 12 hours.

### How to Implement
- 10-15 minutes of stretching or yoga
- A short walk around the block
- Bodyweight exercises
- Dancing to your favorite songs

## 4. Practice Mindfulness

### The Science
Regular meditation practice increases gray matter in areas associated with learning and memory, reduces stress, and improves attention span.

### How to Implement
- 2-3 minutes of deep breathing
- Use guided meditation apps
- Practice gratitude
- Try mindful observation

## 5. Plan Your Day

### The Science
Having a clear plan activates your brain's reticular activating system, helping you notice opportunities and stay focused on priorities.

### How to Implement
- Review your calendar and commitments
- Identify your top 3 priorities
- Write down specific, actionable tasks
- Visualize successful completion

## Conclusion

Your morning routine is one of the most powerful tools for increasing productivity. Start with one habit, be consistent, and gradually build your ideal morning routine.

Ready to transform your mornings? Track your progress with HabitPulse.
    `,
    publishedAt: "2024-12-01",
    readTime: "7 min read",
    category: "Productivity",
    author: "Jack Sighton",
  },
  "breaking-bad-habits-psychology": {
    title: "The Psychology of Breaking Bad Habits: A Step-by-Step Guide",
    excerpt: "Understand the psychology behind bad habits and learn proven techniques to break free from negative patterns.",
    content: `
# The Psychology of Breaking Bad Habits: A Step-by-Step Guide

Breaking bad habits is one of the most challenging aspects of personal development. Whether it's scrolling social media, procrastinating, or unhealthy eating patterns, bad habits can feel impossible to overcome.

## Why Bad Habits Are So Sticky

### The Neurological Reality
Bad habits aren't a lack of willpower - they're neurological patterns etched into your brain through repetition. Each time you perform a habit, you strengthen the neural pathway.

### The Habit Loop in Bad Habits
Every bad habit follows the same pattern:
1. **Cue**: The trigger (stress, boredom, time of day)
2. **Routine**: The bad habit itself
3. **Reward**: The immediate payoff (relief, pleasure, distraction)

### The Role of Dopamine
Your brain releases dopamine not just when you get a reward, but in anticipation of it. This is why you might feel excited about checking social media or eating junk food.

## A Step-by-Step Guide to Breaking Bad Habits

### Step 1: Identify Your Habit Loop

For one week, track your bad habit:
- **Cue**: What triggered the habit?
- **Routine**: What exactly did you do?
- **Reward**: How did you feel afterward?

### Step 2: Understand Your True Craving

Ask yourself: "What am I really seeking when I do this habit?"

Common underlying cravings:
- **Connection**: Feeling isolated or lonely
- **Control**: Feeling overwhelmed or powerless
- **Stimulation**: Feeling bored or understimulated
- **Comfort**: Feeling anxious or uncomfortable

### Step 3: Design Replacement Behaviors

You can't just eliminate a bad habit - you need to replace it with something that satisfies the same craving.

**Framework**: When I feel [TRIGGER], instead of [BAD HABIT], I will [REPLACEMENT BEHAVIOR] to get [SAME REWARD].

### Step 4: Change Your Environment

Make bad habits:
- **Invisible**: Remove cues from your environment
- **Unattractive**: Add friction to make them harder to do
- **Difficult**: Increase the steps required

### Step 5: Use the 20-Second Rule

Make bad habits 20 seconds harder to do, and good habits 20 seconds easier.

## Advanced Strategies

### The Substitution Method
Instead of trying to eliminate a bad habit, substitute it with a better one that provides similar rewards.

### The Identity Shift
Change how you see yourself:
- Instead of "I'm trying to quit smoking" → "I'm not a smoker"
- Instead of "I'm trying to eat less junk food" → "I'm someone who nourishes my body"

### The Gradual Reduction Method
For some habits, going cold turkey isn't realistic. Try gradual reduction.

## Dealing with Setbacks

Setbacks are part of the process, not evidence of failure. Research shows that it takes an average of 66 days to form a new habit, and breaking old ones can take even longer.

## Conclusion

Breaking bad habits isn't about willpower - it's about understanding the psychology behind your behaviors and strategically designing your environment and routines to support change.

Ready to break free from bad habits? Start tracking your progress with HabitPulse and take the first step toward lasting change today.
    `,
    publishedAt: "2024-11-28",
    readTime: "9 min read",
    category: "Psychology",
    author: "Jack Sighton",
  },
};

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: "Post Not Found - HabitPulse Blog",
    };
  }

  return {
    title: `${post.title} - HabitPulse Blog`,
    description: post.excerpt,
    keywords: `habit building, ${post.category.toLowerCase()}, productivity, personal development`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map(line => {
        if (line.startsWith('# ')) {
          return `<h1 class="text-3xl font-bold text-white mb-6 mt-8">${line.slice(2)}</h1>`;
        } else if (line.startsWith('## ')) {
          return `<h2 class="text-2xl font-bold text-purple-300 mb-4 mt-8">${line.slice(3)}</h2>`;
        } else if (line.startsWith('### ')) {
          return `<h3 class="text-xl font-bold text-purple-200 mb-3 mt-6">${line.slice(4)}</h3>`;
        } else if (line.trim() === '') {
          return '<br>';
        } else if (line.startsWith('- ')) {
          return `<li class="text-white/90 mb-2">${line.slice(2)}</li>`;
        } else {
          return `<p class="text-white/90 leading-relaxed mb-4">${line}</p>`;
        }
      })
      .join('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors">
              HabitPulse
            </Link>
            <div className="flex space-x-6">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors mb-8"
        >
          ← Back to Blog
        </Link>
        
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-white/60 text-sm">{post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-white/80 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span>By {post.author}</span>
            <span>•</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Building Better Habits?
          </h2>
          <p className="text-white/80 mb-6">
            Join thousands of users who are transforming their lives with HabitPulse.
          </p>
          <Link
            href="https://app.habit-pulse.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
          >
            Start Your Journey Free
          </Link>
        </div>
      </div>
    </div>
  );
}
