import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { redirect } from "next/navigation";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";


export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}



export default function Home() {
  return (
    <Column 
      maxWidth="m" 
      gap="xl" 
      paddingY="16" 
      horizontal="center" 
      align="center"
    >
      {/* Welcome Header */}
      <Heading variant="display-strong-m" wrap="balance" align="center">
        Welcome to my portfolio 👋
      </Heading>

      {/* Intro Paragraph */}
      <Text 
        variant="heading-default-l" 
        onBackground="neutral-weak" 
        wrap="balance" 
        align="center"
      >
        I'm <strong>Khiem</strong>, an aspiring <strong>AI Engineer</strong> with a 
        background in <strong>Data Science</strong>, intelligent systems, and 
        machine learning.  
        I specialize in building AI agents, retrieval-augmented systems,  
        and full-stack applications that connect data, reasoning, and user experience.
      </Text>

      {/* Navigation Guidance */}
      <Text 
        variant="body-default-l" 
        onBackground="neutral-weak" 
        wrap="balance" 
        align="center"
      >
        Feel free to explore my journey.  
        Visit the <strong>About</strong> page to learn more about my background  
        and academic achievements, or check the <strong>Projects</strong> section  
        to see the work I've built.
      </Text>
    </Column>
  );
}
