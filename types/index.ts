import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface HeroData {
  hero_heading: string;
  hero_subHeading: string;
}

export interface AboutUIpiratesData {
  id: number;
  title: string;
  subTitle: { id: number; subTitle: string }[];
}

export interface WorkProcessData {
  id: number;
  title: string;
  subHeading: string;
  subTitle: { id: number; subTitle: string }[];
}

export interface OurWorkData {
  id: number;
  attributes: {
    formats: {
      medium: {
        url: string;
      };
    };
    name: string;
  };
}

export interface HomePageData {
  hero_heading: string;
  hero_subHeading: string;
  about_ui_pirates: AboutUIpiratesData[];
  work_process: WorkProcessData[];
  our_works: {
    data: OurWorkData[];
  };
}